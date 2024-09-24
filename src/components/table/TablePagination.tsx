"use client";
import { Pagination, Stack } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { COLORS_COMBINATION } from "../colors/Colors";

const TablePagination = ({
  bodyData,
  data,
  itemsPerPage,
}: {
  bodyData?: any;
  data?: any;
  itemsPerPage?: any;
}) => {
  const count = Math.ceil(data?.length / Number(itemsPerPage));
  console.log("sjhsjssss", count, data);
  const pathname = usePathname();
  const router = useRouter();
  const [page, setPage] = useState(1);

  const paginationSx = {
    "& .MuiPaginationItem-root": {
      color: "defaultColor",
    },
  };

  const handleChange = () => {};

  return (
    <Stack spacing={2}>
      <Pagination
        // className={`${COLORS_COMBINATION["text-color-dark"]} `}
        page={page}
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
