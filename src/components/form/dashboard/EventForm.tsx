"use client";
import InputField from "@/components/mui/forms/InputField";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { usePathname } from "next/navigation";
import { Controller } from "react-hook-form";

const EventForm = ({ register, control, errors, data, watch }) => {
  const pathName = usePathname();
  const defaultDate = dayjs(data.eventDate);
  console.log("sjhsjssssss", defaultDate, data);
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
      {/* <Controller
        name="eventDate"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Event Date is Required",
          },
        }}
        defaultValue={defaultDate}
        render={({ field }) => (
          <DatePicker
            {...field}
            label="Event Date"
            renderInput={(params) => (
              <InputField {...params} errors={errors} required={true} />
            )}
          />
        )}
      /> */}
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
