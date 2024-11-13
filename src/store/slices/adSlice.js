import { createSlice } from "@reduxjs/toolkit";
const adSlice = createSlice({
    name: "ad",
    initialState: {
        ads: null,
    },
    reducers: {
        setAds: (state, { payload }) => {
            state.ads = payload;
        },
    },
});
export const { setAds } = adSlice.actions;
export default adSlice.reducer;
