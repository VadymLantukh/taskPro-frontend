export const handlePending = state => {
  state.isError = false;
  state.isLoading = true;
};
export const handleRejected = (state, action) => {
  state.isError = action.payload;
  state.isLoading = false;
};

export const handleFulFilled = state => {
  state.isLoading = false;
};
