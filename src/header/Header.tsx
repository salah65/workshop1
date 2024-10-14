import React, {ChangeEvent, KeyboardEvent} from "react";
import "./index.css"
interface TodoHeaderProps {
    newTask: string;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export default function TodoHeader({newTask, onInputChange, onKeyPress}: TodoHeaderProps) {
    return (
        <div className="todo-header">
            <input
                type="text"
                placeholder="Enter task name"
                value={newTask}
                onChange={onInputChange}
                onKeyPress={onKeyPress}
            />
        </div>
    )
}