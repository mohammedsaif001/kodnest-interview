"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import LoadTableColumns from "./LoadTableColumns";
import TableUtility from "./TableUtility";
import { useSelector } from "@/config/redux/store";

interface Params {
  key: string;
  value?: any;
  data?: any;
}

const TableBody = ({
  data,
  header,
  onClick,
  onChange,
  handleDelete,
  handleEdit,
  Component,
  modalHeading,
  totalRecordsFromFrontend,
  modetype,
}: any) => {
  const paginationStore = useSelector((store) => store.pagination);
  const { itemsPerPage, pageNumber } = paginationStore;

  const resData = data?.slice(
    itemsPerPage * (pageNumber - 1),
    pageNumber * itemsPerPage
  );
  const pathname = usePathname();
  console.log("jshjshsss", resData);
  return (
    <>
      {Array.isArray(resData) &&
        resData?.map((data: any, i: any) => (
          <tr
            key={i}
            className={`${
              modetype
                ? "text-dark-mode table-dark-mode"
                : "text-light-mode table-light-mode"
            } border-b-searchBtnColor-hover border-b-[0.5px]  text-xs font-normal tracking-wider `}
          >
            {
              <LoadTableColumns
                data={data}
                classNames={"sm:py-5 2xl:py-7 pl-6"}
                header={header}
                pathname={pathname}
                onClick={onClick}
                onChange={onChange}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                rowIndex={i}
                Component={Component}
                modalHeading={modalHeading}
                totalRecordsFromFrontend={totalRecordsFromFrontend}
              />
            }
          </tr>
        ))}
    </>
  );
};

const TableHeader = ({ header, modalHeading, modetype }: any) => {
  console.log("shjshjss", header);
  return (
    <thead>
      <tr className="text-blackishText  bg-table-header-color h-10 font-semibold tracking-wider sm:text-[0.7rem] 2xl:text-xs ">
        {header?.map((head: any, index) =>
          head?.visible ? (
            <th
              className={`${index === 0 && "rounded-tl-xl"} py-2 capitalize `}
              key={head?.name}
            >
              <div className="flex-start flex pl-5">
                <p
                  className={`w-max font-semibold ${
                    modetype ? "text-dark-mode" : "text-light-mode"
                  }`}
                >
                  {head?.name}
                </p>
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

const TableComponent = ({
  header,
  body,
  headerName,
  onClick,
  className,
  handleDelete,
  handleEdit,
  Component,
  modalHeading,
}: {
  header: any;
  body: any;
  headerName?: string;
  onClick?: (params: Params) => void;
  className?: string;
  handleDelete?: any;
  handleEdit?: any;
  Component?: any;
  modalHeading?: string;
}) => {
  const totalRecordsFromFrontend = body?.length;

  const pathName = usePathname();

  const loadData = (body: any) => {
    return body;
  };

  return (
    <div className={`w-full ${className ? className : `h-max`} mt-3`}>
      <div className=" h-full w-full overflow-x-auto">
        <table className="mt-2 w-full text-left text-sm">
          <TableHeader header={header} modalHeading={modalHeading} />
          <tbody>
            <TableBody
              onClick={onClick}
              data={loadData(body) ?? {}}
              header={header}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              Component={Component}
              modalHeading={modalHeading}
              totalRecordsFromFrontend={totalRecordsFromFrontend}
            />
          </tbody>
        </table>
      </div>

      <TableUtility inputData={{}} data={body} />
    </div>
  );
};

export default TableComponent;
