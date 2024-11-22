export const selectTasks = state => state.tasks.tasks;

export const selectCurrentTask = state => state.tasks.currentTask;

export const selectIsLoading = state => state.tasks.isLoading;

export const selectIsError = state => state.tasks.isError;

export const selectTasksForColumn = (state, columnId) => {
  const column = state.columns.columns.find(col => col._id === columnId);
  if (!column || !column.tasksIds) return [];

  return column.tasksIds.map(taskId =>
    state.tasks.tasks.find(task => task._id === taskId)
  );
};

// ? як використати в компоненті (Column):
// const tasks = useSelector(state => selectTasksForColumn(state, column._id));
// tasks.map(task => <Task key={task._id} task={task} />
