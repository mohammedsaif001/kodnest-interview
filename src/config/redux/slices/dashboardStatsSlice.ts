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
    decrementTotalEvents: (state) => {
      state.totalEvents--;
    },
    decrementTotalAttendees: (state) => {
      state.totalAttendees++;
    },
    pushUpcomingEvents: (state, action) => {
      state.upcomingEvents.unshift(action.payload);
    },
    pushPastEvents: (state, action) => {
      state.pastEvents.unshift(action.payload);
    },
    replaceUpcomingPastEvents: (state, action) => {
      const { data, isDelete } = action.payload;
      if (isDelete) {
        state.upcomingEvents = state.upcomingEvents.filter(
          (event) => event.eventId !== data.eventId
        );
        state.pastEvents = state.pastEvents.filter(
          (event) => event.eventId !== data.eventId
        );
      } else {
        // If not deleting, update or add the event
        const existingEventIndex = state.upcomingEvents.findIndex(
          (event) => event.eventId === data.eventId
        );

        if (existingEventIndex !== -1) {
          // Update existing event in upcoming events
          state.upcomingEvents[existingEventIndex] = data;
        } else {
          // If it's not found in upcoming, check in past events
          const pastEventIndex = state.pastEvents.findIndex(
            (event) => event.eventId === data.eventId
          );
          if (pastEventIndex !== -1) {
            // Update existing event in past events
            state.pastEvents[pastEventIndex] = data;
          } else {
            // If the event is new, add it to upcoming or past based on the date
            if (new Date(data.eventDate) > new Date()) {
              state.upcomingEvents.unshift(data);
            } else {
              state.pastEvents.unshift(data);
            }
          }
        }
      }
    },
  },
});

export const {
  incrementTotalEvents,
  incrementTotalAttendees,
  pushUpcomingEvents,
  pushPastEvents,
  decrementTotalEvents,
  decrementTotalAttendees,
  replaceUpcomingPastEvents,
} = dashboardStatsSlice.actions;
export default dashboardStatsSlice.reducer;
