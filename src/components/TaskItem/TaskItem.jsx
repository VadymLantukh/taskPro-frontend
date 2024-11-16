import icons from '../../images/icons.svg';
import data from '../../taskTest.json';

const TaskItem = () => {
  const taskArr = data;

  return (
    <div className="task-card">
      {taskArr.map(taskCard => {
        return (
          <div key={taskCard.id}>
            <h4 className="task-title">{taskCard.title}</h4>
            <p className="task-description">{taskCard.description}</p>
            <div className="task-footer">
              <div className="task-meta">
                <div className="priority-dot"></div>
                <span>{taskCard.priority}</span>
              </div>
              <div className="task-meta">
                <span>{taskCard.deadline}</span>
              </div>
              <div className="actions">
                <button className="action-button">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#161616"
                  >
                    <use href={icons + '#icon-right-arrow'} />
                  </svg>
                </button>
                <button className="icon-pencil">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#161616"
                  >
                    <use href={icons + '#icon-pencil'} />
                  </svg>
                </button>
                <button className="icon-trash">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#161616"
                  >
                    <use href={icons + '#icon-trash'} />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskItem;
