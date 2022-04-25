import { createAsyncThunk } from "@reduxjs/toolkit";
import { getEntriesData } from "@Services/EntriesApi";

export const getEntries = createAsyncThunk(
  "entries/fetchEntries",
  async () => {
    const response = await getEntriesData();
    return response.data;
  }
);
