export const selectColumns = state => state.columns.columns;

export const selectCurrentColumn = state => state.columns.currentColumn;

export const selectIsLoading = state => state.columns.isLoading;

export const selectIsError = state => state.columns.isError;

export const selectColumnsForBoard = (state, boardId) => {
  const board = state.board.board;
  if (board.id !== boardId) return [];
  return board.columns.map(columnId =>
    state.columns.columns.find(column => column._id === columnId)
  );
};

// ? як використати в компоненті (ColumnList):
// const board = useSelector(selectBoard);
// const columns = useSelector(state => selectColumnsForBoard(state, board.id));
// columns.map(column => <Column key={column._id} column={column} />);
