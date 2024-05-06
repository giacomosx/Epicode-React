import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentBook : null
}

const bookSelectedSlice = createSlice({
    name : 'bookSelected',
    initialState,
    reducers: {
        selectABook: (state, action) => {
            state.currentBook = action.payload
        }
    }
})

export const currentBook = state => state.bookSelectedState.currentBook
export const {selectABook} = bookSelectedSlice.actions
export default bookSelectedSlice.reducer