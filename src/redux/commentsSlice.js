import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  comments: null,
  error: null,
  response: null
};

export const getComments = createAsyncThunk(
  "comments/GET",
  async (endpoint) => {
    try {
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const postComment = createAsyncThunk(
  "comments/POST",
  async (body) => {
    const APIKEY =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAxYzgwN2QwYjM3MTAwMWFhODk0YTEiLCJpYXQiOjE3MTM3OTU3MTIsImV4cCI6MTcxNTAwNTMxMn0.7oRDb0oNzyyBd9z6l4oXh7lzg39fpVFebWJCeR_adZs";
    const reqOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: APIKEY,
      }, 
      body: JSON.stringify(body)
    };

    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', reqOptions);

      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const deleteComment = createAsyncThunk(
  "comments/DELETE",
  async (id) => {
    const APIKEY =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAxYzgwN2QwYjM3MTAwMWFhODk0YTEiLCJpYXQiOjE3MTUxMDA0MDAsImV4cCI6MTcxNjMxMDAwMH0.awm-TsZJX_k9vGfjTNagxOIw8wFNCB44L9IP6MjkC_k";
    const reqOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: APIKEY,
      }
    };

    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + id, reqOptions);

      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    resetResponse : state => {
        state.response = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments = action.payload;
      })
      .addCase(getComments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(postComment.pending, state => {
        state.isLoading = true
      })
      .addCase(postComment.fulfilled, state => {
        state.isLoading = false
        state.response = "Thank's for your review"
      })
      .addCase(postComment.rejected, state => {
        state.isLoading = false
        state.response = 'There was an error, retry!'
      })
      .addCase(deleteComment.pending, state => {
        state.isLoading = true
      })
      .addCase(deleteComment.fulfilled, state => {
        state.isLoading = false
        state.response = 'Your review has been deleted!'
      })
      .addCase(deleteComment.rejected, state => {
        state.isLoading = false
        state.response = 'There was an error, retry!'
      })
  },
});

export const loadingComments = (state) => state.commentsState.isLoading;
export const dataComments = (state) => state.commentsState.comments;
export const errorComments = (state) => state.commentsState.error;
export const responseComments = state => state.commentsState.response
export const {resetResponse} = commentsSlice.actions
export default commentsSlice.reducer;
