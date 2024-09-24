"use client";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";
import CustomModal from "./CustomModal";
import { Button } from "@mui/material";

const DeleteForm = ({
  deleteModal,
  handleDeleteModal,
  handleDelete,
  data,
  heading,
  totalRecordsFromFrontend,
}) => {
  const pathName = usePathname();

  return (
    <section>
      <CustomModal
        heading={`${heading} ${data.name || data.id || ""}`}
        open={deleteModal}
        handleClose={handleDeleteModal}
      >
        <div className="flex justify-end gap-4">
          <Button color="secondary" onClick={() => handleDeleteModal()}>
            Cancel
          </Button>
          <Button color="primary" onClick={() => handleDelete(data)}>
            Delete
          </Button>
        </div>
      </CustomModal>
    </section>
  );
};

export default DeleteForm;
