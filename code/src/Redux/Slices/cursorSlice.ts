import { createSlice } from "@reduxjs/toolkit";

const initialState: { value: string | null } = { value: null };

export const cursorSlice = createSlice({
  name: "cursor",
  initialState,
  reducers: {
    setCursorText: (state, { payload }) => {
      if (window.innerWidth > 400) state.value = payload;
    },
  },
});

export default cursorSlice.reducer;

export const { setCursorText } = cursorSlice.actions;
