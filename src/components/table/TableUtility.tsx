"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import TablePagination from "./TablePagination";
import { MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "@/config/redux/store";
import {
  handleChangeItemsPerPage,
  handleChangePageNumber,
} from "@/config/redux/slices/paginationSlice";

const TableUtility = ({ data }) => {
  const itemsPerPage = useSelector((state) => state.pagination.itemsPerPage);
  const dispatch = useDispatch();
  const pathname = usePathname();
  const options = [
    {
      value: "2",
      name: "2",
    },
    {
      value: "5",
      name: "5",
    },
    {
      value: "10",
      name: "10",
    },
  ];

  useEffect(() => {
    dispatch(handleChangePageNumber(1));
    dispatch(handleChangeItemsPerPage(2));
  }, [dispatch, pathname]);
  return (
    <div
      className={` flex flex-row-reverse  items-center z-10 py-6 px-4 justify-between`}
    >
      <div className="w-max">
        <Select
          value={itemsPerPage}
          onChange={(e) => {
            dispatch(handleChangeItemsPerPage(Number(e.target.value)));
            dispatch(handleChangePageNumber(1));
          }}
        >
          {options?.map((item) => (
            <MenuItem key={item?.value} value={item?.value}>
              {item?.name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <TablePagination data={data} />
    </div>
  );
};

export default TableUtility;
