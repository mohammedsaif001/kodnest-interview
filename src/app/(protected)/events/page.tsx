import EventsListClient from "@/components/events/EventsListClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events List | EMS",
  description: "Total List of EVents ",
};

const EventsListServer = () => {
  return <EventsListClient />;
};
export default EventsListServer;
