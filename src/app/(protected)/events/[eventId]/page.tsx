import EventItemClient from "@/components/events/EventItemClient";
type EventItemProps = {
  params: {
    eventId: string;
  };
};

export async function generateMetadata({
  params: { eventId },
}: EventItemProps) {
  return {
    title: `Event ${eventId} Details`,
  };
}
const EventItemComponent: React.FC<EventItemProps> = ({
  params: { eventId },
}) => {
  return <EventItemClient eventId={eventId} />;
};
export default EventItemComponent;
