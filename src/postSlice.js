import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    show: false,
    likes: [],
  },
  reducers: {
    showLikes: (state, action) => {
      state.show = action.payload.show;
      state.likes = action.payload.likes;
    },
  },
});

export const { showLikes } = postSlice.actions;

export const selectShow = (state) => state.post.show;
export const selectLikes = (state) => state.post.likes;

export default postSlice.reducer;
