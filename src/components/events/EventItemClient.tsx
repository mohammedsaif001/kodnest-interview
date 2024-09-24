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
    <div>
      {eventId}
      <AddForms
        handleAdd={handleAdd}
        Component={AttendeeForm}
        heading={`Add Event`}
        addOpenForm={addOpenModel}
      />
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
