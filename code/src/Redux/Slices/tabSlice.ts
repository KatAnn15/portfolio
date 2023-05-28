import { createSlice } from "@reduxjs/toolkit";

export const tabSlice = createSlice({
  name: "activeTab",
  initialState: { value: "home" },
  reducers: {
    setActiveTab: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export default tabSlice.reducer;

export const { setActiveTab } = tabSlice.actions;
