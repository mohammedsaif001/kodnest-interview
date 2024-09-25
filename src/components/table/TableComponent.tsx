"use client";
import React, { useEffect } from "react";
import LoadTableColumns from "./LoadTableColumns";
import TableUtility from "./TableUtility";
import { useDispatch, useSelector } from "@/config/redux/store";
import { TTableBody, TTableComponent, TTableHeaders } from "../../../types";
import {
  handleChangeItemsPerPage,
  handleChangePageNumber,
} from "@/config/redux/slices/paginationSlice";

const TableBody = <T,>({
  data,
  header,
  onClick,
  handleDelete,
  handleEdit,
  Component,
  modalHeading,
}: TTableBody<T>) => {
  const paginationStore = useSelector((store) => store.pagination);
  const { itemsPerPage, pageNumber } = paginationStore;
  const dispatch = useDispatch();
  const resData = data?.slice(
    itemsPerPage * (pageNumber - 1),
    pageNumber * itemsPerPage
  );

  useEffect(() => {
    if (data.length > 0 && !resData.length && pageNumber > 1) {
      dispatch(handleChangeItemsPerPage(2));
      dispatch(handleChangePageNumber(pageNumber - 1));
    }
  }, [data, resData]);
  return (
    <>
      {Array.isArray(resData) && resData?.length ? (
        resData?.map((data, i: number) => (
          <tr
            key={i}
            className={`
            border-b-searchBtnColor-hover border-b-[0.5px]  text-xs font-normal tracking-wider even:bg-table-header-color-light`}
          >
            {
              <LoadTableColumns
                data={data}
                className={"sm:py-3 2xl:py-4 pl-6"}
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
        ))
      ) : (
        <span className="mt-4">No Records to display :(</span>
      )}
    </>
  );
};

const TableHeader = ({ header }: { header: TTableHeaders[] }) => {
  return (
    <thead>
      <tr className=" bg-table-header-color h-10 font-semibold tracking-wider text-[0.7rem] sm:text-[0.8rem] 2xl:text-xs ">
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
  return (
    <div className={`w-full ${className ? className : `h-max`} mt-3`}>
      <div className=" h-full w-full overflow-x-auto">
        <table className="mt-2 w-full text-left text-sm bg-white">
          <TableHeader header={header} />
          <tbody>
            <TableBody
              onClick={onClick}
              data={body}
              header={header}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              Component={Component}
              modalHeading={modalHeading}
            />
          </tbody>
        </table>
      </div>
      {body?.length > 0 && <TableUtility data={body} />}
    </div>
  );
};

export default TableComponent;
