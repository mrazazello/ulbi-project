import { IStateSchema } from "app/providers/storeProvider";

export const getAddCommentFormText = (state: IStateSchema) =>
  state.addCommentForm?.text ?? "";

export const getAddCommentFormError = (state: IStateSchema) =>
  state.addCommentForm?.error;
