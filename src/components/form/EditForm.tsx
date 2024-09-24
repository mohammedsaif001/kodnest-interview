"use client";
import CustomModal from "./CustomModal";
import RenderFormFields from "./RenderFormFields";

const EditForm = ({
  handleEditModal,
  editData,
  editApi,
  editModal,
  heading,
  FormValues,
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
          sendCredentials={editApi}
          Component={Component}
          FormValues={FormValues}
        />
      </CustomModal>
    </section>
  );
};

export default EditForm;
