import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from "react-redux";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import eventSlice from "./slices/eventSlice";

// Combining Reducers
const rootReducer = combineReducers({
  counter: counterSlice,
  events: eventSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useDispatchBase<AppDispatch>();

export const useSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected
): TSelected => useSelectorBase<RootState, TSelected>(selector);
