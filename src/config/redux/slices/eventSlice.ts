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
  },
});

export const { editEventData, deleteEventData, addEventData } =
  eventsSlice.actions;
export default eventsSlice.reducer;
