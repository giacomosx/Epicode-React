import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDark : false
}

const themeSlice = createSlice({
    name : 'theme', 
    initialState, 
    reducers : {
        toggleTheme : (state) => {
            state.isDark = !state.isDark
            if (state.isDark) {
                document.body.classList.add('bg--light-black')
            } else {
                document.body.classList.remove('bg--light-black')
            }
        }
    }
})

export const actualTheme = state => state.themeState.isDark
export const {toggleTheme} = themeSlice.actions
export default themeSlice.reducer