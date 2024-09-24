import EventItemClient from "@/components/events/EventItemClient";

const EventItemComponent = ({ params: { eventId } }) => {
  return (
    <div>
      EventItemComponent {eventId}
      <EventItemClient eventId={eventId} />
    </div>
  );
};
export default EventItemComponent;
