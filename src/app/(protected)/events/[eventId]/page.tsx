import EventItemClient from "@/components/events/EventItemClient";
type EventItemProps = {
  params: {
    eventId: string;
  };
};

const EventItemComponent: React.FC<EventItemProps> = ({
  params: { eventId },
}) => {
  return (
    <div>
      <EventItemClient eventId={eventId} />
    </div>
  );
};
export default EventItemComponent;
