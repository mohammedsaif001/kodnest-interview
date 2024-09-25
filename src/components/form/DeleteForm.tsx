"use client";
import CustomModal from "./CustomModal";
import { Button } from "@mui/material";

const DeleteForm = ({
  deleteModal,
  handleDeleteModal,
  handleDelete,
  data,
  heading,
}) => {
  return (
    <td>
      <section>
        <CustomModal
          heading={`${heading} ${data.name || data.id || ""}`}
          open={deleteModal}
          handleClose={handleDeleteModal}
        >
          <div className="flex justify-end gap-4 mt-4">
            <Button
              color="error"
              variant="contained"
              onClick={() => handleDeleteModal()}
            >
              Cancel
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                handleDelete(data);
                handleDeleteModal();
              }}
            >
              Delete
            </Button>
          </div>
        </CustomModal>
      </section>
    </td>
  );
};

export default DeleteForm;
