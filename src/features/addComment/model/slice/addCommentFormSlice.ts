import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAddCommentFormSchema } from "../types/comment";

const initialState: IAddCommentFormSchema = {
  error: undefined,
  text: undefined,
};

export const addCommentFormSlice = createSlice({
  name: "addCommentFormSlice",
  initialState,
  reducers: {
    updateText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchArticleById.pending, (state) => {
  //       state.error = undefined;
  //       state.isLoading = true;
  //     })
  //     .addCase(fetchArticleById.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.data = action.payload;
  //       state.error = undefined;
  //     })
  //     .addCase(fetchArticleById.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // },
});

export const { actions: addCommentsFormActions } = addCommentFormSlice;
export const { reducer: addCommentsFormReducer } = addCommentFormSlice;
