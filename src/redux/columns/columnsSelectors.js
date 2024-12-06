import { createSelector } from 'reselect';

export const selectColumns = state => state.columns.columns;

export const selectCurrentColumn = state => state.columns.currentColumn;

export const selectIsLoading = state => state.columns.isLoading;

export const selectIsError = state => state.columns.isError;

export const selectBoard = state => state.board.board;

export const selectColumnsForBoard = createSelector(
  [selectBoard, selectColumns, (_, boardId) => boardId],
  (board, columns, boardId) => {
    if (board.id !== boardId) return [];
    return board.columns.map(columnId =>
      columns.find(column => column._id === columnId)
    );
  }
);
