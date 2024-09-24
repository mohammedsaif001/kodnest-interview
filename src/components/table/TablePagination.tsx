"use client";
import { Pagination, Stack } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { COLORS_COMBINATION } from "../colors/Colors";
import { useDispatch, useSelector } from "@/config/redux/store";
import { handleChangePageNumber } from "@/config/redux/slices/paginationSlice";

const TablePagination = ({ data }: { data?: any }) => {
  const pageNumber = useSelector((state) => state.pagination.pageNumber);
  const itemsPerPage = useSelector((state) => state.pagination.itemsPerPage);

  const dispatch = useDispatch();

  const count = Math.ceil(data?.length / Number(itemsPerPage));
  console.log("sjhsjssss", count, data);
  const pathname = usePathname();
  const router = useRouter();

  const paginationSx = {
    "& .MuiPaginationItem-root": {
      color: "defaultColor",
    },
  };

  const handleChange = (e, value) => {
    dispatch(handleChangePageNumber(value));
  };

  return (
    <Stack spacing={2}>
      <Pagination
        // className={`${COLORS_COMBINATION["text-color-dark"]} `}
        page={pageNumber}
        count={count}
        // sx={paginationSx}
        // variant="outlined"
        // shape="rounded"
        onChange={handleChange}
      />
    </Stack>
  );
};

export default TablePagination;
