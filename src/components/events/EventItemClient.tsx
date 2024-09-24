"use client";

import { useSelector } from "@/config/redux/store";
import TableComponent from "../table/TableComponent";
import { ATTENDEES_HEADER } from "@/constants/tableHeaders";
import AttendeeForm from "../form/dashboard/AttendeeForm";

const EventItemClient = ({ eventId }) => {
  const eventDetails = useSelector(
    (state) => state.events.filter((item) => item.eventId === +eventId)[0]
  );

  const attendeeList = eventDetails?.attendees;

  const handleDelete = (data) => {};

  const handleEdit = (data) => {};

  return (
    <div>
      {eventId}
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
