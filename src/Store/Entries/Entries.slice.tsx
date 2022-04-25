import { createSlice } from "@reduxjs/toolkit";
import { EntriesData, Entries } from "./Entries.type";
import { RootState } from "@Store/ConfigureStore";
import {getEntries} from "./Entries.extraReducers"
import { v4 as uuidv4 } from 'uuid';

const initialState: EntriesData = {
  entriesData: [],
  pending: false,
  loaded: false,
};

export const entriesSlice = createSlice({
  name: "Entries",
  initialState,
  reducers: {
    editDataEntries: (state, action) => {
     state.entriesData = state.entriesData?.map((item: Entries) => {
       let returnData = item
       if (item?.id === action?.payload?.id) {
        returnData = action?.payload
       }
       return returnData
     })
    },

   addDataEntries: (state, action) => {
      state.entriesData = [ action?.payload, ...state.entriesData]
     },
    deleteDataEntries: (state, action) => {
      state.entriesData = state.entriesData?.filter((item: Entries) => !action?.payload?.includes(item?.id))
     }
  },
  extraReducers: (builder) => {
      builder
      .addCase(getEntries.pending, (state) => {
          state.pending = true;
      })
      .addCase(getEntries.fulfilled, (state, action) => {
        state.pending = false;
        state.loaded = true
        state.entriesData = action.payload?.entries?.map((item:Entries[]) => ({...item, id:uuidv4()}));
    })
  }
});
export const {editDataEntries, deleteDataEntries, addDataEntries} = entriesSlice.actions
export const entriesData = (state: RootState) => state.entries.entriesData;
export const entriesLoaded = (state: RootState) => state.entries.loaded;
export const entriesDataPending = (state: RootState) => state.entries.pending;
export const EntriesState = (state: RootState) => state.entries;

export default entriesSlice.reducer;
