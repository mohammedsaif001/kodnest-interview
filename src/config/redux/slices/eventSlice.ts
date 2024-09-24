// counterSlice.js
import { eventsData } from "@/constants/events";
import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

const initialState = eventsData;

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    editEventData(
      state: Draft<typeof initialState>,
      action: PayloadAction<(typeof initialState)[0]>
    ) {
      const newData = action.payload;
      const index = state.findIndex(
        (item) => item.eventId === newData?.eventId
      );
      if (index !== -1) {
        state[index] = { ...state[index], ...newData }; // Merge updates
      }
      // state =
    },
    deleteEventData(
      state: Draft<typeof initialState>,
      action: PayloadAction<string | number>
    ) {
      const id = action.payload;
      console.log("sjhsjsss", id);
      return state.filter((item) => item.eventId !== id);
    },

    addEventData(
      state: Draft<typeof initialState>,
      action: PayloadAction<(typeof initialState)[0]>
    ) {
      const eventId = new Date().getTime();
      const noOfAttendees = 0;
      const newData = action.payload;
      console.log("sjhsjsss", newData);
      state.unshift({ ...newData, eventId, noOfAttendees });
    },
    editAttendee(
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState & { eventId: number }>
    ) {
      const { eventId, ...attendeeData } = action.payload;
      const eventIndex = state.findIndex((item) => item.eventId === eventId);

      if (eventIndex !== -1) {
        const currentEvent = state[eventIndex];
        const attendeeIndex = currentEvent?.attendees?.findIndex(
          (attendee) => attendee.id === attendeeData?.id
        );

        if (attendeeIndex !== -1 && currentEvent.attendees) {
          currentEvent.attendees[attendeeIndex] = {
            ...currentEvent.attendees[attendeeIndex], // retain the existing attendee data
            ...attendeeData, // overwrite with new data
          };
        }
      }
    },
    deleteAttendee(
      state: Draft<typeof initialState>,
      action: PayloadAction<{ eventId: number; attendeeId: number }>
    ) {
      const { eventId, attendeeId } = action.payload;
      const eventIndex = state.findIndex((item) => item.eventId === eventId);

      if (eventIndex !== -1) {
        const currentEvent = state[eventIndex];

        // Find the index of the attendee to be deleted
        const attendeeIndex = currentEvent?.attendees?.findIndex(
          (attendee) => attendee.id === attendeeId
        );

        if (attendeeIndex !== -1 && currentEvent.attendees) {
          currentEvent.attendees.splice(attendeeIndex, 1); // Remove the attendee
        }
      }
    },
    addAttendee(
      state: Draft<typeof initialState>,
      action: PayloadAction<{
        eventId: number;
        attendee: {
          name: string;
          emailId: string /* other fields */;
        };
      }>
    ) {
      const { eventId, attendee } = action.payload;
      const eventIndex = state.findIndex((item) => item.eventId === eventId);

      if (eventIndex !== -1) {
        const currentEvent = state[eventIndex];

        // Check if attendees array exists, if not initialize it
        if (!currentEvent.attendees) {
          currentEvent.attendees = [];
        }

        // Add the new attendee to the attendees array
        currentEvent.attendees.unshift({
          ...attendee,
          id: new Date().getTime(),
        });
      }
    },
  },
});

export const {
  editEventData,
  deleteEventData,
  addEventData,
  editAttendee,
  deleteAttendee,
  addAttendee,
} = eventsSlice.actions;
export default eventsSlice.reducer;
