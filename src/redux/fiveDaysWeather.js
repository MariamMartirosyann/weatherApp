import { createSlice } from "@reduxjs/toolkit";

const fiveDaysDataSlice = createSlice({
  name: "fiveDaysData",
  initialState: {},
  reducers: {
    addfiveDaysData: (state, action) => {
      state.fiveDaysData = action.payload;
    },
  },
});

export const { addfiveDaysData } = fiveDaysDataSlice.actions;

export default fiveDaysDataSlice.reducer;
