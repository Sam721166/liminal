import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
    name: "tweets",
    initialState: {
        tweets:[]
    },
    reducers:{
        getAllTweets:(state, action) => {
            state.tweets = action.payload
        }
    }
})

export const {getAllTweets} = tweetSlice.actions
export default tweetSlice.reducer