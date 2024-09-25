import React, { useState } from "react";

import moment from "moment";

import { Button } from "@mui/material";
import EditForm from "../form/EditForm";
import DeleteForm from "../form/DeleteForm";
import { TTableLoadColumns } from "../../../types";

const LoadTableColumns = <T,>({
  data,
  className = "text-center",
  header,
  onClick,
  handleDelete,
  handleEdit,
  Component,
  modalHeading,
  rowIndex,
}: TTableLoadColumns<T>) => {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  console.log("shjshjsss", data, rowIndex);
  const handleEditModal = () => setEditModal(!editModal);
  const handleDeleteModal = () => setDeleteModal(!deleteModal);

  return (
    <>
      {header?.map((col: any, index: any) => {
        switch (true) {
          case col.type === "CLICKABLE":
            return col.visible ? (
              <td className={className} key={`${col.key}-${index}`}>
                <span
                  className="cursor-pointer underline sm:text-[0.7rem] 2xl:text-xs"
                  onClick={() =>
                    onClick({ key: col.key, data, index: rowIndex })
                  }
                >
                  {data[`${col.key}`]}
                </span>
              </td>
            ) : (
              ""
            );

          case col?.type === "DATE":
            return col.visible ? (
              <td className={className} key={`${col.key}-${index}`}>
                <span className=" sm:text-[0.7rem] 2xl:text-xs">
                  {data[`${col.key}`] &&
                    moment(data[`${col.key}`]).format("DD/MM/YYYY")}{" "}
                </span>
              </td>
            ) : (
              ""
            );

          case col?.type === "CRUD":
            return col.visible ? (
              <td className={className + ``} key={`${col.key}-${index}`}>
                <div className="flex gap-4 py-3 sm:py-0">
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      handleEditModal();
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDeleteModal()}
                  >
                    Delete
                  </Button>
                </div>
              </td>
            ) : (
              ""
            );
          default:
            return col.visible ? (
              <td className={className + ``} key={`${col.key}-${index}`}>
                <span className=" sm:text-[0.7rem] 2xl:text-xs">
                  {typeof data[`${col.key}`] === "boolean"
                    ? JSON.stringify(data[`${col.key}`])
                    : data[`${col.key}`]}
                </span>
              </td>
            ) : (
              ""
            );
        }
      })}

      <EditForm
        Component={Component}
        handleEditModal={handleEditModal}
        editData={data}
        handleEditFunction={handleEdit}
        editModal={editModal}
        heading={`Edit ${modalHeading}`}
      />
      <DeleteForm
        deleteModal={deleteModal}
        handleDeleteModal={handleDeleteModal}
        heading={`Delete ${modalHeading}`}
        handleDelete={handleDelete}
        data={data}
      />
    </>
  );
};

export default LoadTableColumns;
