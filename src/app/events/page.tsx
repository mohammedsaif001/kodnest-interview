"use client";
import AddForms from "@/components/form/AddForm";
import EventForm from "@/components/form/dashboard/EventForm";
import TableComponent from "@/components/table/TableComponent";
import {
  addEventData,
  deleteEventData,
  editEventData,
} from "@/config/redux/slices/eventSlice";
import { useDispatch, useSelector } from "@/config/redux/store";
import { EVENTS_HEADER } from "@/constants/tableHeaders";
import { useState } from "react";

const EventsPage = () => {
  const events = useSelector((store) => store.events);
  const dispatch = useDispatch();

  const [addOpen, setAddOpen] = useState(false);

  const handleAdd = (data) => {
    console.log("Skkssss", data);
    dispatch(addEventData(data));
  };

  const addOpenModel = (e) => {
    setAddOpen(e);
  };

  const handleEdit = (data) => {
    dispatch(editEventData(data));
    console.log("Shkssss", data);
  };

  const handleDelete = (data) => {
    dispatch(deleteEventData(data?.eventId));
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
        body={events}
        header={EVENTS_HEADER}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        // onClick={onClick}
        Component={(props) => <EventForm {...props} isEdit={true} />}
        // modalHeading={modalHeading}
      />
    </div>
  );
};
export default EventsPage;
