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
import { useRouter } from "next/navigation";
import { useState } from "react";

const EventsPage = () => {
  const events = useSelector((store) => store.events);
  const dispatch = useDispatch();
  const router = useRouter();

  const [addOpen, setAddOpen] = useState(false);

  const handleAdd = (data) => {
    console.log("Skkssss", data);
    dispatch(addEventData(data));
  };

  const addOpenModel = (e) => {
    setAddOpen(e);
  };

  const onClick = (data) => {
    const id = data?.data?.[data.key];
    console.log("sjhjssss", id);
    router.push(`/events/${id}`);
  };

  const handleEdit = (data) => {
    dispatch(editEventData(data));
    console.log("Shkssss", data);
  };

  const handleDelete = (data) => {
    dispatch(deleteEventData(data?.eventId));
  };
  return (
    <div className="p-4">
      <section className="flex justify-between gap-3">
        <h3 className="font-bold text-2xl">Events Page</h3>
        <AddForms
          handleAdd={handleAdd}
          Component={EventForm}
          heading={`Add Event`}
          addOpenForm={addOpenModel}
        />
      </section>
      <TableComponent
        body={events}
        header={EVENTS_HEADER}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        onClick={onClick}
        Component={(props) => <EventForm {...props} isEdit={true} />}
        modalHeading={"Event"}
      />
    </div>
  );
};
export default EventsPage;
