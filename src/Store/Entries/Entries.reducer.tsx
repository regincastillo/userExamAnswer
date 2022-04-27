import { EntriesData, Entries, Action } from "./Entries.type";

const EntriesReducer = {
  editDataEntries: (state: EntriesData, action: Action) => {
    state.entriesData = state.entriesData?.map((item: Entries) => {
      let returnData = item;
      if (item?.id === action?.payload?.id) {
        returnData = action?.payload;
      }
      return returnData;
    });
  },

  addDataEntries: (state: EntriesData, action: Action) => {
    state.entriesData = [action?.payload, ...state.entriesData];
  },
  deleteDataEntries: (state: EntriesData, action: Action) => {
    state.entriesData = state.entriesData?.filter(
      (item: Entries) => !action?.payload?.includes(item?.id)
    );
  },
};

export default EntriesReducer;
