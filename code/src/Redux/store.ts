import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./Slices/modeSlice";
import scaleReducer from "./Slices/scaleSlice";
import tabReducer from "./Slices/tabSlice";
import cursorReducer from "./Slices/cursorSlice";

export const store = configureStore({
  reducer: {
    mode: modeReducer,
    siteScale: scaleReducer,
    activeTab: tabReducer,
    cursor: cursorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

interface CustomWindow extends Window {
  state: RootState;
}

declare let window: CustomWindow;

window.state = store.getState();
