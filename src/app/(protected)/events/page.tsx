"use client";
import AddForms from "@/components/form/AddForm";
import EventForm from "@/components/form/dashboard/EventForm";
import TableComponent from "@/components/table/TableComponent";
import {
  decrementTotalEvents,
  incrementTotalEvents,
  replaceUpcomingPastEvents,
} from "@/config/redux/slices/dashboardStatsSlice";
import {
  addEventData,
  deleteEventData,
  editEventData,
} from "@/config/redux/slices/eventSlice";
import { useDispatch, useSelector } from "@/config/redux/store";
import { EVENTS_HEADER } from "@/constants/tableHeaders";
import { showToast } from "@/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  TEventDetails,
  TEventDetailsWithId,
  TEventPayloadOnclick,
} from "../../../../types";

const EventsPage = () => {
  const events = useSelector((store) => store.events);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAdd = (data: TEventDetails) => {
    console.log("Skkssss", data);
    dispatch(addEventData(data));
    dispatch(incrementTotalEvents());
    dispatch(replaceUpcomingPastEvents({ data, isDelete: false }));
    showToast("success", "Event Added");
  };

  const onClick = (data: TEventPayloadOnclick) => {
    const id = data.key === "eventId" ? data.data.eventId : null;
    if (id) {
      console.log("sjhjssss", data, id);
      // router.push(`/events/${id}`);
    }
  };

  const handleEdit = (data: TEventDetailsWithId) => {
    dispatch(editEventData(data));
    dispatch(replaceUpcomingPastEvents({ data, isDelete: false }));
    console.log("Shkssss", data);
    showToast("success", "Event Edited");
  };

  const handleDelete = (data: TEventDetailsWithId) => {
    dispatch(deleteEventData(data?.eventId));
    dispatch(decrementTotalEvents());
    dispatch(replaceUpcomingPastEvents({ data, isDelete: true }));
    showToast("success", "Event Deleted");
  };
  return (
    <div className="p-4">
      <section className="flex justify-between gap-3">
        <h3 className="font-bold text-2xl">Events Page</h3>
        <AddForms
          handleAdd={handleAdd}
          Component={EventForm}
          heading={`Add Event`}
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
