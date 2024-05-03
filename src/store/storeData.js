import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const storeDataSlice = createSlice({
    name: 'storeData',
    initialState,
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload);
            let copied = JSON.stringify(state.value)
            localStorage.setItem('storeData', copied);
        },
        remove: (state, action) => {
            state.value = action.payload
        }
    },
});

export const { add, remove } = storeDataSlice.actions;
export default storeDataSlice.reducer;
