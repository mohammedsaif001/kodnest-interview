"use client";
import { Pagination, Stack } from "@mui/material";
import { useDispatch, useSelector } from "@/config/redux/store";
import { handleChangePageNumber } from "@/config/redux/slices/paginationSlice";

const TablePagination = ({ data }) => {
  const pageNumber = useSelector((state) => state.pagination.pageNumber);
  const itemsPerPage = useSelector((state) => state.pagination.itemsPerPage);

  const dispatch = useDispatch();

  const count = Math.ceil(data?.length / Number(itemsPerPage));

  const handleChange = (_, value: number) => {
    dispatch(handleChangePageNumber(value));
  };

  return (
    <Stack spacing={2}>
      <Pagination page={pageNumber} count={count} onChange={handleChange} />
    </Stack>
  );
};

export default TablePagination;
