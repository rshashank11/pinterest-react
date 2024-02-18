import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
  name: "image",
  initialState: {
    images: [],
  },
  reducers: {
    addImages: (state, action) => {
      state.images = action.payload;
    },
  },
});

export default imageSlice.reducer;
export const { addImages } = imageSlice.actions;
