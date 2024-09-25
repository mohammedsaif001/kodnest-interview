import { TTableHeaderType } from "../../types";

export const UPCOMING_PAST_EVENTS_HEADER = [
  {
    name: "Event Id",
    key: "eventId",
    type: "CLICKABLE" as TTableHeaderType,
  },

  {
    name: "Event Name",
    key: "eventName",
  },
  {
    name: "Date",
    key: "eventDate",
  },
];

const ACTION_FIELD_HEADER = {
  name: "Actions",
  key: "crud",
  type: "CRUD" as TTableHeaderType,
  visible: true,
};

export const EVENTS_HEADER = [
  {
    name: "Event Id",
    key: "eventId",
    type: "CLICKABLE" as TTableHeaderType,
    visible: true,
  },
  {
    name: "Event Name",
    key: "eventName",
    visible: true,
  },
  {
    name: "Event Date",
    key: "eventDate",
    type: "DATE" as TTableHeaderType,
    visible: true,
  },
  {
    name: "Event Location",
    key: "eventLocation",
    visible: true,
  },
  {
    name: "Total Attendees",
    key: "noOfAttendees",
    visible: true,
  },
  {
    name: "Event Description",
    key: "eventDescription",
    visible: true,
  },
  ACTION_FIELD_HEADER,
];

export const ATTENDEES_HEADER = [
  {
    name: "Attendee Id",
    key: "attendeeId",
    visible: false,
  },
  {
    name: "Name",
    key: "name",
    visible: true,
  },
  {
    name: "Email Id",
    key: "emailId",
    visible: true,
  },
  ACTION_FIELD_HEADER,
];
