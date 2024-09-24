// dashboardSlice.js
import { eventsData } from "@/constants/events";
import { createSlice } from "@reduxjs/toolkit";

// Function to get total number of events
export const getTotalEvents = () => {
  return eventsData.length;
};

// Function to get total number of attendees
export const getTotalAttendees = () => {
  return eventsData.reduce((total, event) => total + event.attendees.length, 0);
};

// Function to get upcoming events
export const getUpcomingEvents = () => {
  const today = new Date();
  return eventsData.filter((event) => new Date(event.eventDate) > today);
};

// Function to get past events
export const getPastEvents = () => {
  const today = new Date();
  return eventsData.filter((event) => new Date(event.eventDate) <= today);
};

const initialState = {
  totalEvents: getTotalEvents(),
  totalAttendees: getTotalAttendees(),
  upcomingEvents: getUpcomingEvents(),

  pastEvents: getPastEvents(),
};

const dashboardStatsSlice = createSlice({
  name: "dashboardStats",
  initialState,
  reducers: {
    incrementTotalEvents: (state) => {
      state.totalEvents++;
    },
    incrementTotalAttendees: (state) => {
      state.totalAttendees++;
    },
    pushUpcomingEvents: (state, action) => {
      state.upcomingEvents.unshift(action.payload);
    },
    pushPastEvents: (state, action) => {
      state.pastEvents.unshift(action.payload);
    },
  },
});

export const {
  incrementTotalEvents,
  incrementTotalAttendees,
  pushUpcomingEvents,
  pushPastEvents,
} = dashboardStatsSlice.actions;
export default dashboardStatsSlice.reducer;
