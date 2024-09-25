"use client";
import React, { ComponentType } from "react";
import LoadTableColumns from "./LoadTableColumns";
import TableUtility from "./TableUtility";
import { useSelector } from "@/config/redux/store";
import {
  TEventPayloadOnclick,
  THandleDelete,
  THandleEdit,
  TTableComponent,
  TTableHeaders,
} from "../../../types";

interface Params {
  key: string;
  value?: any;
  data?: any;
}

const TableBody = ({
  data,
  header,
  onClick,
  handleDelete,
  handleEdit,
  Component,
  modalHeading,
}: any) => {
  const paginationStore = useSelector((store) => store.pagination);
  const { itemsPerPage, pageNumber } = paginationStore;

  const resData = data?.slice(
    itemsPerPage * (pageNumber - 1),
    pageNumber * itemsPerPage
  );
  return (
    <>
      {Array.isArray(resData) &&
        resData?.map((data: any, i: any) => (
          <tr
            key={i}
            className={`
            border-b-searchBtnColor-hover border-b-[0.5px]  text-xs font-normal tracking-wider `}
          >
            {
              <LoadTableColumns
                data={data}
                classNames={"sm:py-3 2xl:py-4 pl-6"}
                header={header}
                onClick={onClick}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                rowIndex={i}
                Component={Component}
                modalHeading={modalHeading}
              />
            }
          </tr>
        ))}
    </>
  );
};

const TableHeader = ({ header }: { header: TTableHeaders[] }) => {
  return (
    <thead>
      <tr className=" bg-table-header-color h-10 font-semibold tracking-wider sm:text-[0.7rem] 2xl:text-xs ">
        {header?.map((head, index) =>
          head?.visible ? (
            <th
              className={`${index === 0 && "rounded-tl-xl"} py-2 capitalize `}
              key={head?.name}
            >
              <div className="flex-start flex pl-5">
                <p className={`w-max font-semibold `}>{head?.name}</p>
              </div>
            </th>
          ) : (
            ""
          )
        )}
      </tr>
    </thead>
  );
};

const TableComponent = <T,>({
  header,
  body,
  onClick,
  className = "",
  handleDelete,
  handleEdit,
  Component,
  modalHeading,
}: TTableComponent<T>) => {
  const loadData = (body: any) => {
    return body;
  };

  return (
    <div className={`w-full ${className ? className : `h-max`} mt-3`}>
      <div className=" h-full w-full overflow-x-auto">
        <table className="mt-2 w-full text-left text-sm">
          <TableHeader header={header} />
          <tbody>
            <TableBody
              onClick={onClick}
              data={loadData(body) ?? {}}
              header={header}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              Component={Component}
              modalHeading={modalHeading}
            />
          </tbody>
        </table>
      </div>

      <TableUtility inputData={{}} data={body} />
    </div>
  );
};

export default TableComponent;
