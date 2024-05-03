import { configureStore } from "@reduxjs/toolkit";
import storeData from "./storeData";

export const reduxStore = configureStore({
    reducer: {
        storeData: storeData
    }
});

export default reduxStore;
