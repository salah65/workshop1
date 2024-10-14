import React from "react";
import {Task} from "../App";
import TodoItem from "../item/TodoItem";
import "./index.css"

interface TodoItemProps {
    tasks: Task[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function TodoList({tasks, onToggle, onDelete}: TodoItemProps) {
    return (
        <ul className="todo-main">
            {tasks.map(task => (
                TodoItem({task, onToggle, onDelete})
            ))}
        </ul>
    )
};