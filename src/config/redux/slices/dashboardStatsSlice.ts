// dashboardSlice.js
import { eventsData } from "@/constants/events";
import { createSlice } from "@reduxjs/toolkit";
import { TEventData } from "../../../../types";

// Function to get total number of events
export const getTotalEvents = () => {
  return eventsData.length;
};

// Function to get total number of attendees
export const getTotalAttendees = (data: TEventData[] | null = null) => {
  const eventsToUse = data || eventsData;
  return eventsToUse.reduce(
    (total, event) => total + event.attendees.length,
    0
  );
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
    recalculateTotalAttendees: (state, action) => {
      state.totalAttendees = getTotalAttendees(action.payload);
    },
    incrementTotalAttendees: (state) => {
      state.totalAttendees++;
    },
    decrementTotalEvents: (state) => {
      state.totalEvents--;
    },
    decrementTotalAttendees: (state) => {
      state.totalAttendees--;
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
          if (new Date(data.eventDate) < new Date()) {
            // remove existing event in future events & add in past if selected date is past
            state.upcomingEvents.splice(existingEventIndex, 1);
            state.pastEvents.unshift(data);
          } else {
            // Replace the data if date is present
            state.upcomingEvents[existingEventIndex] = data;
          }
        } else {
          // If it's not found in upcoming, check in past events
          const pastEventIndex = state.pastEvents.findIndex(
            (event) => event.eventId === data.eventId
          );

          if (pastEventIndex !== -1) {
            if (new Date(data.eventDate) > new Date()) {
              // Remove existing event in past events & add in future if selected date is in future
              state.pastEvents.splice(pastEventIndex, 1);
              state.upcomingEvents.unshift(data);
            } else {
              // Replace the data if date is past
              state.pastEvents[pastEventIndex] = data;
            }
          } else {
            // If the event is new, add it to upcoming or past based on the date
            const newData = { ...data };
            if (new Date(data.eventDate) > new Date()) {
              state.upcomingEvents.unshift(newData);
            } else {
              state.pastEvents.unshift(newData);
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
  recalculateTotalAttendees,
} = dashboardStatsSlice.actions;
export default dashboardStatsSlice.reducer;
