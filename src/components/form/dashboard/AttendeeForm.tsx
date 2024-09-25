import InputField from "@/components/mui/forms/InputField";

const AttendeeForm = ({ register, errors }) => {
  return (
    <>
      <InputField
        name="name"
        type="text"
        label={"Name"}
        register={(name) =>
          register(name, {
            required: {
              value: true,
              message: "Name is Required",
            },
          })
        }
        errors={errors}
        required={true}
      />
      <InputField
        name="emailId"
        type="email"
        label={"Email Id"}
        register={(name) =>
          register(name, {
            required: {
              value: true,
              message: "Email ID is Required",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email address",
            },
          })
        }
        errors={errors}
        required={true}
      />
    </>
  );
};
export default AttendeeForm;
