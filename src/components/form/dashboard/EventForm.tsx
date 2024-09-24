"use client";
import InputField from "@/components/mui/forms/InputField";
import { usePathname } from "next/navigation";

const EventForm = ({ register, control, errors, data, watch }) => {
  const pathName = usePathname();

  return (
    <>
      <InputField
        name="eventName"
        type="text"
        label={"Event Name"}
        register={(name) =>
          register(name, {
            required: {
              value: true,
              message: "Event Name is Required",
            },
          })
        }
        errors={errors}
        required={true}
      />
      <InputField
        name="eventDate"
        type="date"
        label={"Event Name"}
        register={(name) =>
          register(name, {
            required: {
              value: true,
              message: "Event Name is Required",
            },
          })
        }
        errors={errors}
        required={true}
      />
      <InputField
        name="eventDescription"
        type="text"
        label={"Event Description"}
        register={(name) =>
          register(name, {
            required: {
              value: true,
              message: "Event Description is Required",
            },
          })
        }
        errors={errors}
        required={true}
      />
      <InputField
        name="eventLocation"
        type="text"
        label={"Event Location"}
        register={(name) =>
          register(name, {
            required: {
              value: true,
              message: "Event Location is Required",
            },
          })
        }
        errors={errors}
        required={true}
      />
    </>
  );
};

export default EventForm;
