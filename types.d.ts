import { ReactNode } from "react";

export type TEventDetails = {
  eventName: string;
  eventDate: string;
  eventDescription: string;
  eventLocation: string;
};

export type TAttendee = {
  name: string;
  emailId: string;
};

export type TAttendeeWithId = TAttendee & {
  id: number;
};

export type TEventDetailsWithId = TEventDetails & {
  eventId: number;
};

export type EventData = TEventDetailsWithId & {
  attendees: TAttendeeWithId[];
};

export type TEventPayloadOnclick = {
  key: string;
  data: EventData;
  index: number;
};

export type TCustomModal = {
  handleClose: () => void;
  open: boolean;
  children: ReactNode;
  heading: string;
  width?: string;
};
