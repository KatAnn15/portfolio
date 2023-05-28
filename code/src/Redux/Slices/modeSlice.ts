import { createSlice } from "@reduxjs/toolkit";

export enum Modes {
  Web = "web",
  Mobile = "mobile",
}

export const modeSlice = createSlice({
  name: "mode",
  initialState: { value: Modes.Mobile },
  reducers: {
    updateMode: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export default modeSlice.reducer;

export const { updateMode } = modeSlice.actions;
