"use client";
import EventForm from "@/components/form/dashboard/EventForm";
import TableComponent from "@/components/table/TableComponent";
import { eventsData } from "@/constants/events";
import { EVENTS_HEADER } from "@/constants/tableHeaders";

const EventsPage = () => {
  return (
    <div>
      EventsPage
      <TableComponent
        body={eventsData}
        header={EVENTS_HEADER}
        // handleDelete={handleDelete}
        // handleEdit={handleEdit}
        // onClick={onClick}
        Component={(props) => <EventForm {...props} isEdit={true} />}
        // modalHeading={modalHeading}
      />
    </div>
  );
};
export default EventsPage;
