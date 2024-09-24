"use client";
import { useState } from "react";
import RenderFormFields from "./RenderFormFields";
import CustomModal from "./CustomModal";
import { Button } from "@mui/material";

const AddForms = ({
  handleAdd,
  Component,
  heading,
  FormValues,
  addOpenForm,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const onOpen = () => {
    setOpen(true);
    addOpenForm(open);
  };
  return (
    <>
      <Button color="primary" onClick={() => onOpen()}>
        {heading}
      </Button>
      <CustomModal open={open} handleClose={handleClose} heading={heading}>
        <RenderFormFields
          handleClose={handleClose}
          FormValues={FormValues}
          sendCredentials={handleAdd}
          Component={Component}
          {...rest}
        />
      </CustomModal>
    </>
  );
};

export default AddForms;
