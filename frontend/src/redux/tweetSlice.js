import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
    name: "tweets",
    initialState: {
        tweets:[],
        refresh: false,
    },
    reducers:{
        getAllTweets:(state, action) => {
            state.tweets = action.payload
        },
        getRefresh:(state) => {
            state.refresh = !state.refresh
        },
    }
})

export const {getAllTweets, getRefresh} = tweetSlice.actions
export default tweetSlice.reducer