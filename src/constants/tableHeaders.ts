export const HIGHEST_TURNOVER_SPORTS = [
  {
    name: "user Id",
    key: "userId",
  },
  {
    name: "Turnover",
    key: "totalPnl",
    type: "AMOUNT",
  },
  // {
  //   name: "brand",
  //   key: "brand",
  //   // type: "PERCENTAGE",
  // },
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
  // {
  //   name: "brand",
  //   key: "brand",
  //   // type: "PERCENTAGE",
  // },
];
