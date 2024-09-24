import React, { ReactNode, useState } from "react";

import moment from "moment";

import { Button } from "@mui/material";
import EditForm from "../form/EditForm";

const LoadTableColumns = ({
  data,
  classNames = "text-center",
  header,
  onClick,
  handleDelete,
  handleEdit,
  FormValues,
  Component,
  modalHeading,
  totalRecordsFromFrontend,
  rowIndex,
}: {
  data: any;
  classNames;
  header: TableHeaders[];
  pathname: any;
  onClick: any;
  onChange: any;
  handleDelete?: any;
  handleEdit?: any;
  FormValues?: any;
  Component?: any;
  modalHeading?: string;
  totalRecordsFromFrontend?: number;
  rowIndex: any;
}) => {
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
              <td className={classNames} key={`${col.key}-${index}`}>
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

          case col.type === "BUTTON":
            console.log("datttta", data);
            return col.visible ? (
              <td className={classNames} key={`${col.key}-${index}`}>
                <div className="w-max ">
                  {!data.IsVoid && data.paymentStatus !== "PAID" && (
                    <Button
                      color="primary"
                      onClick={() => onClick({ key: col.key, data })}
                    >
                      {col.buttonTitle}
                    </Button>
                  )}
                </div>
              </td>
            ) : (
              ""
            );

          case col?.type === "DATE":
            return col.visible ? (
              <td className={classNames} key={`${col.key}-${index}`}>
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
              <td className={classNames + ``} key={`${col.key}-${index}`}>
                <div className="flex gap-4">
                  <Button
                    color="primary"
                    onClick={() => {
                      handleEditModal();
                    }}
                  >
                    Edit
                  </Button>
                  <Button color="secondary" onClick={() => handleDeleteModal()}>
                    Delete
                  </Button>
                </div>
              </td>
            ) : (
              ""
            );
          default:
            return col.visible ? (
              <td className={classNames + ``} key={`${col.key}-${index}`}>
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
      {/* TableBody Row for column Chooser */}
      <td className={classNames}>
        <span className=""></span>
      </td>

      <EditForm
        Component={Component}
        FormValues={FormValues}
        handleEditModal={handleEditModal}
        editData={data}
        editApi={handleEdit}
        editModal={editModal}
        heading={`Edit ${modalHeading}`}
      />
      {/* <DeleteForm
        deleteModal={deleteModal}
        handleDeleteModal={handleDeleteModal}
        heading={`Delete ${modalHeading}`}
        deleteApi={handleDelete}
        data={data}
        totalRecordsFromFrontend={totalRecordsFromFrontend}
      /> */}
    </>
  );
};

export default LoadTableColumns;
