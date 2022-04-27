import { createAsyncThunk, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { getEntriesData } from "@Services/EntriesApi";
import { EntriesData, Entries, Action } from "./Entries.type";
import { v4 as uuidv4 } from "uuid";


export const getEntries = createAsyncThunk("entries/fetchEntries", async () => {
  const response = await getEntriesData();
  return response.data;
});

const EntriesExtraReducer = (builder: ActionReducerMapBuilder<EntriesData>) => {
  builder
    .addCase(getEntries.pending, (state: EntriesData) => {
      state.pending = true;
    })
    .addCase(getEntries.fulfilled, (state: EntriesData, action: Action) => {
      state.pending = false;
      state.loaded = true;
      state.entriesData = action.payload?.entries?.map((item: Entries[]) => ({
        ...item,
        id: uuidv4(),
      }));
    });
};

export default EntriesExtraReducer;
