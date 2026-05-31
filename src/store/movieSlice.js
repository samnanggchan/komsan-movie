import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bannerData: [],
    imageURL:""
}

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        // Add reducers for movie actions here
        setBannerData: (state, action) => {
            state.bannerData = action.payload;
        },
        setImageURL : (state, action) => {
            state.imageURL = action.payload;
        }
    },
})

export const { setBannerData, setImageURL } = movieSlice.actions;

export default movieSlice.reducer;