"use client";
import CustomModal from "./CustomModal";
import RenderFormFields from "./RenderFormFields";

const EditForm = ({
  handleEditModal,
  editData,
  handleEditFunction,
  editModal,
  heading,
  Component,
}) => {
  console.log("hsksss", editData);
  return (
    <section className="w-full flex justify-end">
      <CustomModal
        heading={heading}
        open={editModal}
        handleClose={() => handleEditModal()}
      >
        <RenderFormFields
          handleClose={handleEditModal}
          data={editData}
          onSubmit={handleEditFunction}
          Component={Component}
        />
      </CustomModal>
    </section>
  );
};

export default EditForm;
