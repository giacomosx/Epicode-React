import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  books: [],
  error: "",
  searchResults: []
};

export const getAllBooks = createAsyncThunk("books/GET", async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
});

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    filterByTitle: (state, action) => {
      state.searchResults = state.books.filter((book) =>
        book.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    resetResults: (state) => {
        state.searchResults = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBooks.pending, (state) => {
        state.isLoading = true;
        state.books = [];
      })
      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getAllBooks.rejected, (state) => {
        state.isLoading = false;
        state.error = "Ops c'è stato un errore";
      });
  },
});

export const booksLoading = (state) => state.booksState.isLoading;
export const allBooks = (state) => state.booksState.books;
export const booksError = (state) => state.booksState.error;
export const searchResults = (state) => state.booksState.searchResults
export const { filterByTitle, resetResults } = booksSlice.actions;
export default booksSlice.reducer;
