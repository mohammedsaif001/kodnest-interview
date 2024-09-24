"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import TablePagination from "./TablePagination";
import { MenuItem, Select } from "@mui/material";

const TableUtility = ({ inputData, data, modetype }: any) => {
  const pathname = usePathname();
  const router = useRouter();
  const options = [
    {
      value: "25",
      name: "25",
    },
    {
      value: "50",
      name: "50",
    },
    {
      value: "100",
      name: "100",
    },
    {
      value: "200",
      name: "200",
    },
    {
      value: "500",
      name: "500",
    },
  ];
  console.log("Shsjkhsss", data);
  return (
    <div className={` flex  items-center z-10 py-6 px-4 justify-end`}>
      <div className="w-max">
        <Select
          value={"25"}
          onChange={(value) => {
            console.log("skkssss", value);
          }}
        >
          {options?.map((item) => (
            <MenuItem key={item?.value} value={item?.value}>
              {item?.name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <TablePagination bodyData={inputData} data={data} itemsPerPage={"5"} />
    </div>
  );
};

export default TableUtility;
