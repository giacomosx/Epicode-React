import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    latestBooks : []
}

const latestReleaseSlice = createSlice({
    name : 'latestRelease',
    initialState,
    reducers : {
        addToLatestRelease : (state, action) => {
            state.latestBooks = [...state.latestBooks ,action.payload]
        },
        resetLatestRelease : (state) => {
            state.latestBooks = []
        },
        deleteLatestRelease : (state, action) => {
            state.latestBooks = state.latestBooks.filter(book => book.asin !== action.payload)
        }
    }
})

export const latestReleaseBooks = state => state.latestReleaseState.latestBooks
export const {addToLatestRelease, resetLatestRelease, deleteLatestRelease} = latestReleaseSlice.actions
export default latestReleaseSlice.reducer