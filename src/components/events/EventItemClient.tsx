"use client";

import { useDispatch, useSelector } from "@/config/redux/store";
import TableComponent from "../table/TableComponent";
import { ATTENDEES_HEADER } from "@/constants/tableHeaders";
import AttendeeForm from "../form/dashboard/AttendeeForm";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  addAttendee,
  deleteAttendee,
  editAttendee,
} from "@/config/redux/slices/eventSlice";
import AddForms from "../form/AddForm";
import {
  decrementTotalAttendees,
  incrementTotalAttendees,
} from "@/config/redux/slices/dashboardStatsSlice";
import { showToast } from "@/utils";
import { TAttendee, TAttendeeWithId, TEventData } from "../../../types";
import { useRouter } from "next/navigation";

const EventItemClient = ({ eventId }: { eventId: string }) => {
  const eventDetails: TEventData = useSelector(
    (state) => state.events.filter((item) => item.eventId === +eventId)[0]
  );
  const router = useRouter();
  const dispatch = useDispatch();
  const attendeeList = eventDetails?.attendees;

  const handleDelete = (data: TAttendeeWithId) => {
    dispatch(deleteAttendee({ eventId: +eventId, attendeeId: data?.id }));
    dispatch(decrementTotalAttendees());
    showToast("success", "Attendee Deleted");
  };

  const isEmailIdAlreadyExists = (
    data: TAttendeeWithId | TAttendee
  ): boolean => {
    // Check if there is an attendee with the same email and a different ID
    const emailExists = attendeeList.some((attendee) => {
      const isSameEmail = attendee?.emailId === data?.emailId;

      // Check if data is of type TAttendeeWithId before accessing id
      const isDifferentId = "id" in data ? attendee?.id !== data.id : true;

      return isSameEmail && isDifferentId;
    });

    // Show a toast message if an attendee with the same email exists
    if (emailExists) {
      showToast("error", "Attendee with this email already exists");
    }

    return emailExists; // Return true if the email exists, otherwise false
  };

  const handleEdit = (data: TAttendeeWithId) => {
    if (isEmailIdAlreadyExists(data)) {
      return;
    }
    dispatch(
      editAttendee({
        ...data,
        eventId: +eventId,
      })
    );
    showToast("success", "Attendee Edited");
  };

  const handleAdd = (data: TAttendee) => {
    if (isEmailIdAlreadyExists(data)) {
      return;
    }
    dispatch(addAttendee({ eventId: +eventId, attendee: data }));
    dispatch(incrementTotalAttendees());
    showToast("success", "Attendee Added");
  };

  return (
    <div className="p-4 flex flex-col gap-2">
      <div
        className="border-2 cursor-pointer w-max rounded-md p-1 border-slate-900"
        onClick={() => router.back()}
      >
        <ArrowBackIcon />
      </div>
      <section className="flex justify-between">
        <h3 className="text-2xl font-bold">{eventDetails?.eventName}</h3>
        <AddForms
          handleAdd={handleAdd}
          Component={AttendeeForm}
          heading={`Add Event`}
        />
      </section>
      <article className="w-max flex flex-col gap-2">
        {eventDetails &&
          Object?.entries(eventDetails)?.map(([key, value]) => {
            // Skip 'eventName' and 'attendees'
            if (key === "eventName" || key === "attendees") {
              return null;
            }
            if (key === "noOfAttendees") {
              return (
                <p key={key} className="grid grid-cols-2 ">
                  <span className="font-bold">Number of Attendees:</span>{" "}
                  <span>{value as string | number}</span>
                </p>
              );
            }
            return (
              <p key={key} className="grid grid-cols-2 gap-2">
                <span className="font-bold">
                  {" "}
                  {key.charAt(0).toUpperCase() +
                    key.slice(1).replace(/([A-Z])/g, " $1")}
                  :
                </span>{" "}
                <span>{value as string | number}</span>
              </p>
            );
          })}
      </article>
      <TableComponent
        body={attendeeList}
        header={ATTENDEES_HEADER}
        handleDelete={handleDelete}
        modalHeading={"Attendee"}
        handleEdit={handleEdit}
        Component={(props) => <AttendeeForm {...props} />}
      />
    </div>
  );
};
export default EventItemClient;
