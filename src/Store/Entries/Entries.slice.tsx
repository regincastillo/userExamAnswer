import { createSlice } from "@reduxjs/toolkit";
import { EntriesData } from "./Entries.type";
import { RootState } from "@Store/ConfigureStore.type";

import EntriesReducer from "./Entries.reducer";
import EntriesExtraReducer from "./Entries.extraReducers";

const initialState: EntriesData = {
  entriesData: [],
  pending: false,
  loaded: false,
};

export const entriesSlice = createSlice({
  name: "Entries",
  initialState,
  reducers: EntriesReducer,
  extraReducers: EntriesExtraReducer,
});
export const { editDataEntries, deleteDataEntries, addDataEntries } =
  entriesSlice.actions;
export const entriesData = (state: RootState) => state.entries.entriesData;
export const entriesLoaded = (state: RootState) => state.entries.loaded;
export const entriesDataPending = (state: RootState) => state.entries.pending;
export const EntriesState = (state: RootState) => state.entries;

export default entriesSlice.reducer;
