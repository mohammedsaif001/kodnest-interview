import EventItemClient from "@/components/events/EventItemClient";

const EventItemComponent = ({ params: { eventId } }) => {
  return (
    <div>
      <EventItemClient eventId={eventId} />
    </div>
  );
};
export default EventItemComponent;
