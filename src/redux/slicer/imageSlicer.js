import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images:[]
};

const imageSlice = createSlice({
  name: "Images",
  initialState,
  reducers:{
    addImageUrl:(state, action)=>{
      state.images.push(action.payload);
    },
    emptyStack:(stack)=>{
      stack.images = [];
    }
  }
});

export default imageSlice.reducer;
export const { addImageUrl, emptyStack } = imageSlice.actions