import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slicer/imageSlicer";

const store = configureStore({
    reducer: reducer
})


export default store;