export const UPCOMING_PAST_EVENTS_HEADER = [
  {
    name: "Event Id",
    key: "eventId",
  },

  {
    name: "Event Name",
    key: "eventName",
    type: "AMOUNT",
  },
  {
    name: "Date",
    key: "eventDate",
  },
];

const ACTION_FIELD_HEADER = {
  name: "Actions",
  key: "crud",
  type: "CRUD",
  visible: true,
};

export const EVENTS_HEADER = [
  {
    name: "Event Id",
    key: "eventId",
    type: "CLICKABLE",
    visible: true,
  },
  {
    name: "eventName",
    key: "eventName",
    visible: true,
  },
  {
    name: "eventDate",
    key: "eventDate",
    type: "DATE",
    visible: true,
  },
  {
    name: "eventLocation",
    key: "eventLocation",
    visible: true,
  },
  {
    name: "noOfAttendees",
    key: "noOfAttendees",
    visible: true,
  },
  {
    name: "eventDescription",
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

export const MOST_PROFITABLE_SPORTS = [
  {
    name: "user Id",
    key: "userId",
  },
  {
    name: "loss",
    key: "totalPnl",
    type: "AMOUNT",
  },
];
