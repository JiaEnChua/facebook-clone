import { createSlice } from "@reduxjs/toolkit";

export const clickSlice = createSlice({
  name: "click",
  initialState: {
    showLP: false,
  },
  reducers: {
    showLP: (state, action) => {
      //   console.log("ShowLeftPanel >> ", action.payload.show);
      state.showLP = action.payload;
    },
  },
});

export const { showLP } = clickSlice.actions;

export const selectShowLP = (state) => state.click.showLP;

export default clickSlice.reducer;
