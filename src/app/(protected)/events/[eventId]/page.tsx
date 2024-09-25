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
    description: `Event Details of ${eventId} | ID | Name | Date | Location | Description. This page alos includes list of attendees attending this event  `,
  };
}
const EventItemComponent: React.FC<EventItemProps> = ({
  params: { eventId },
}) => {
  return <EventItemClient eventId={eventId} />;
};
export default EventItemComponent;
