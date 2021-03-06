import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    // name: "Jeff Bezos",
    // image: "https://www.gstatic.com/tv/thumb/persons/532529/532529_v9_bb.jpg",
    name: null,
    image: '',
  },
  reducers: {
    login: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.name = action.payload.displayName;
      state.image = action.payload.photoURL;
    },
    logout: (state) => {
      state.name = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

export const selectName = (state) => state.user.name;
export const selectImage = (state) => state.user.image;

export default userSlice.reducer;
