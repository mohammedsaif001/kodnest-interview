"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import TablePagination from "./TablePagination";
import { Select } from "@mui/material";

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

  return (
    <div
      className={` flex ${
        modetype ? "text-dark-mode" : "text-light-mode"
      } items-center z-10 py-6 px-4 justify-end`}
    >
      <div className="w-max">
        <Select
          options={options}
          value={"25"}
          onChange={(value) => {
            console.log("skkssss", value);
          }}
        />
      </div>
      <TablePagination
        bodyData={inputData}
        modetype={modetype}
        data={data}
        itemsPerPage={"25"}
      />
    </div>
  );
};

export default TableUtility;
