import React from "react";
import {Task} from "../App";
import './index.css';

interface TodoListProps {
    task: Task;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function TodoItem({task, onToggle, onDelete}: TodoListProps) {
    return (
        <>
            <li className="li" key={task.id}>
                <label>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onToggle(task.id)}
                    />
                    <span>{task.text}</span>
                    <button className="btn btn-danger" onClick={() => {
                        onDelete(task.id);
                    }}>Delete
                    </button>
                </label>
            </li>
        </>
    )
}