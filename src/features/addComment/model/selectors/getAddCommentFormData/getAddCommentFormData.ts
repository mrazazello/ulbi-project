import { IStateSchema } from "app/providers/storeProvider";

export const getAddCommentFormData = (state: IStateSchema) =>
  state.addCommentForm?.text;
