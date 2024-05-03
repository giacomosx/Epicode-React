import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShow: false
}

const sidebarSlice = createSlice({
    name : 'sidebar', 
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isShow = !state.isShow
        }
    }
})

export const sidebarState = state => state.actualSidebarState.isShow
export const {toggleSidebar} = sidebarSlice.actions
export default sidebarSlice.reducer 