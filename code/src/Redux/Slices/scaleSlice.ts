import { createSlice } from "@reduxjs/toolkit";

export const scaleSlice = createSlice({
  name: "mode",
  initialState: { value: 1 },
  reducers: {
    updateScale: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export default scaleSlice.reducer;

export const { updateScale } = scaleSlice.actions;
