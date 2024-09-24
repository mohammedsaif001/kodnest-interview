"use client";

import { useDispatch, useSelector } from "@/config/redux/store";
import TableComponent from "../table/TableComponent";
import { ATTENDEES_HEADER } from "@/constants/tableHeaders";
import AttendeeForm from "../form/dashboard/AttendeeForm";
import {
  addAttendee,
  deleteAttendee,
  editAttendee,
} from "@/config/redux/slices/eventSlice";
import AddForms from "../form/AddForm";
import { useState } from "react";

const EventItemClient = ({ eventId }) => {
  const eventDetails = useSelector(
    (state) => state.events.filter((item) => item.eventId === +eventId)[0]
  );

  const dispatch = useDispatch();
  const attendeeList = eventDetails?.attendees;

  const handleDelete = (data) => {
    console.log("shjsksss", data);
    dispatch(deleteAttendee({ eventId: +eventId, attendeeId: data?.id }));
  };

  const handleEdit = (data) => {
    dispatch(
      editAttendee({
        ...data,
        eventId: +eventId,
      })
    );
    console.log("sjhsss", data);
  };

  const handleAdd = (data) => {
    dispatch(addAttendee({ eventId: +eventId, attendee: data }));
  };
  const [addOpen, setAddOpen] = useState(false);

  const addOpenModel = (e) => {
    setAddOpen(e);
  };

  return (
    <div className="p-4 flex flex-col gap-2">
      <section className="flex justify-between">
        <h3 className="text-2xl font-bold">{eventDetails?.eventName}</h3>
        <AddForms
          handleAdd={handleAdd}
          Component={AttendeeForm}
          heading={`Add Event`}
          addOpenForm={addOpenModel}
        />
      </section>
      <article className="w-max flex flex-col gap-2">
        {Object.entries(eventDetails).map(([key, value]) => {
          // Skip 'eventName' and 'attendees'
          if (key === "eventName" || key === "attendees") {
            return null;
          }
          if (key === "noOfAttendees") {
            return (
              <p key={key} className="grid grid-cols-2 ">
                <span className="font-bold">Number of Attendees:</span>{" "}
                <span>{value}</span>
              </p>
            );
          }
          return (
            <p key={key} className="grid grid-cols-2 ">
              <span className="font-bold">
                {" "}
                {key.charAt(0).toUpperCase() +
                  key.slice(1).replace(/([A-Z])/g, " $1")}
                :
              </span>{" "}
              <span>{value}</span>
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
        Component={(props) => <AttendeeForm {...props} isEdit={true} />}
      />
    </div>
  );
};
export default EventItemClient;
