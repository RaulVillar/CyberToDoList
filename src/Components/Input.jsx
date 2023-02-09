import React, { useState } from 'react';

export default function Input({ addTask }) {

    const [tasks, setTasks] = useState("");

    const InputChange = (event) => {
        setTasks(event.target.value);
    };

    const InputSubmit = (event) => {
        if (tasks.length > 0) {
            event.preventDefault();
            addTask(tasks)
            setTasks("")
        } else
            alert("Introduce a task!")
    };

    return (
        <form className="form-container" onSubmit={InputSubmit}>
            <input
                value={tasks}
                onChange={InputChange}
                type="text"
                id="app-input"
                className="app-input"
                name="text"
                placeholder="Introduce your task"
            />
            <button className='input-button' onClick={InputSubmit} type="submit">
                Add
            </button>
        </form>
    )
}