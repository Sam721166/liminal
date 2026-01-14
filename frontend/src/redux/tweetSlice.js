import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
    name: "tweets",
    initialState: {
        tweets:[],
        refresh: false,
        isActice: true,
    },
    reducers:{
        getAllTweets:(state, action) => {
            state.tweets = action.payload
        },
        getRefresh:(state) => {
            state.refresh = !state.refresh
        },
        getIsActive:(state, action) => {
            state.isActice = action.payload
        },
    }
})

export const {getAllTweets, getRefresh, getIsActive} = tweetSlice.actions
export default tweetSlice.reducer