import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { TCustomModal } from "../../../types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  minWidth: "20%",
  maxHeight: "70vh",
  outline: "none",
  overflowY: "auto",
};

export default function CustomModal({
  handleClose,
  open,
  children,
  heading,
  width = "50%",
}: TCustomModal) {
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: width }}>
          <div className="flex justify-between items-center py-2 mb-3 ">
            <h3 className="capitalize text-text-color-dark font-bold text-xl">
              {heading}
            </h3>
            <span className="relative inline cursor-pointer pb-0.5 z-50">
              <abbr title="close" onClick={handleClose}>
                <CloseIcon color="error" fontSize="medium" />
              </abbr>
            </span>
          </div>
          {children}
        </Box>
      </Modal>
    </div>
  );
}
