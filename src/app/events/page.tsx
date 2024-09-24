"use client";
import AddForms from "@/components/form/AddForm";
import EventForm from "@/components/form/dashboard/EventForm";
import TableComponent from "@/components/table/TableComponent";
import { eventsData } from "@/constants/events";
import { EVENTS_HEADER } from "@/constants/tableHeaders";
import { useState } from "react";

const EventsPage = () => {
  const [addOpen, setAddOpen] = useState(false);

  const handleAdd = (data) => {
    console.log("Skkssss", data);
  };

  const addOpenModel = (e) => {
    setAddOpen(e);
  };

  return (
    <div>
      EventsPage
      <AddForms
        handleAdd={handleAdd}
        Component={EventForm}
        heading={`Add Event`}
        addOpenForm={addOpenModel}
      />
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
