import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:{
        user: null,
        otherUsers: [],
        profile: null
    },
    reducers:{
        // multiple actions
        getUser: (state, action) => {
            state.user = action.payload
        },
        getOtherUsers: (state, action) => {
            state.otherUsers = Array.isArray(action.payload) ? action.payload : []
        },
        getMyProfile: (state, action) => {
            state.profile = action.payload
        },
        followingUpdate:(state, action) => {
            // unfollowing
            if(state.user.following.includes(action.payload)){
                state.user.following = state.user.following.filter((itemId) => {
                    return itemId !== action.payload
                })
            } else{
                // follow
                state.user.following.push(action.payload)
            }
        },
        bookmarkUpdate:(state, action) => {
            // toggle bookmark
            if(state.user.bookmark.includes(action.payload)){
                state.user.bookmark = state.user.bookmark.filter((itemId) => {
                    return itemId !== action.payload
                })
            } else{
                state.user.bookmark.push(action.payload)
            }
        }
        
    }
})

export const {getUser, getOtherUsers, getMyProfile, followingUpdate, bookmarkUpdate} = userSlice.actions
export default userSlice.reducer