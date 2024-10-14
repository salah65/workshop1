import React, {useState, ChangeEvent, KeyboardEvent} from 'react';
import './index.css';
import TodoFooter from "./footer/Footer";
import TodoList from "./todoList/TodoList";
import TodoHeader from "./header/Header";

export interface Task {
    id: number;
    text: string;
    completed: boolean;
}

const TodoApp: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([
        {id: 1, text: 'xxxxx', completed: false},
        {id: 2, text: 'yyyy', completed: false},
    ]);
    const [newTask, setNewTask] = useState<string>(''); // Track the input value

    const handleToggle = (id: number) => {
        setTasks(tasks.map(task =>
            task.id === id ? {...task, completed: !task.completed} : task
        ));
    };

    const handleDelete = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleDeleteAllToggle = (completed: boolean) => {
        setTasks(tasks.map(task => ({...task, completed})));
    };

    const deleteCompletedTasks = () => {
        setTasks(tasks.filter(task => !task.completed));
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value);
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && newTask.trim()) {
            addTask(newTask);
            setNewTask(''); // Clear the input field
        }
    };

    const addTask = (text: string) => {
        const newTask = {id: Date.now(), text, completed: false};
        setTasks([...tasks, newTask]);
    };

    return (
        <div className="todo-container">
            <div className="todo-wrap">
                <TodoHeader
                    newTask={newTask}
                    onInputChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
                <TodoList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete}/>
                <TodoFooter
                    tasks={tasks}
                    deleteCompletedTasks={deleteCompletedTasks}
                    onToggle={handleDeleteAllToggle}
                />
            </div>
        </div>
    );
};


export default TodoApp;