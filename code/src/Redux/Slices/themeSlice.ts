import { createSlice } from "@reduxjs/toolkit";

const initialState: { value: "light" | "dark" } = { value: "light" };

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export default themeSlice.reducer;

export const { setTheme } = themeSlice.actions;
