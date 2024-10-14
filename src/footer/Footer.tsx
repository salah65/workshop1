import React from "react";
import {Task} from "../App";
import './index.css';

interface TodoFooterProps {
    tasks: Task[];
    onToggle: (completed: boolean) => void;
    deleteCompletedTasks: () => void;
}
export default function  TodoFooter ({ tasks, onToggle,deleteCompletedTasks }: TodoFooterProps) {
    const completedTasks = tasks.filter(task => task.completed).length;
    const allCompleted = completedTasks === tasks.length && tasks.length > 0;

    return (
        <div className="todo-footer">
            <label>
                <input
                    type="checkbox"
                    checked={allCompleted}
                    onChange={() => onToggle(!allCompleted)}
                />
            </label>
            <span>
        <span>Finished {completedTasks}</span> / total {tasks.length}
      </span>
            <button className="btn btn-danger" onClick={deleteCompletedTasks}>
                Delete Finished Tasks
            </button>
        </div>
    );
};
