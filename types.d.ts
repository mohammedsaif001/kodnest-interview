import { ReactNode } from "react";

export type TTableHeaderType = "DATE" | "CLICKABLE" | "AMOUNT" | "CRUD";
export type TTableHeaders = {
  name: string;
  key: string;
  type?: TTableHeaderType;
  visible?: boolean;
};

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

export type TEventData = TEventDetailsWithId & {
  attendees: TAttendeeWithId[];
};

export type TEventPayloadOnclick<T> = {
  key: string;
  data: T;
  index: number;
};

export type TCustomModal = {
  handleClose: () => void;
  open: boolean;
  children: ReactNode;
  heading: string;
  width?: string;
};

export type TTableComponent<T> = {
  header: TTableHeaders[];
  body: T[];
  onClick?: (params: TEventPayloadOnclick<T>) => void;
  className?: string;
  handleDelete: THandleDelete<T>;
  handleEdit?: THandleEdit<T>;
  Component?: any;
  modalHeading?: string;
};

export type THandleDelete<T> = (item: T) => void;
export type THandleEdit<T> = (item: T) => void;
