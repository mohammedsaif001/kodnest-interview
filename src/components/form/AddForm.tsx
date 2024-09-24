"use client";
import { useState } from "react";
import RenderFormFields from "./RenderFormFields";
import CustomModal from "./CustomModal";
import { Button } from "@mui/material";

const AddForms = ({ handleAdd, Component, heading, ...rest }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const onOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <Button color="primary" variant="contained" onClick={() => onOpen()}>
        {heading}
      </Button>
      <CustomModal open={open} handleClose={handleClose} heading={heading}>
        <RenderFormFields
          handleClose={handleClose}
          onSubmit={handleAdd}
          Component={Component}
          {...rest}
        />
      </CustomModal>
    </div>
  );
};

export default AddForms;
