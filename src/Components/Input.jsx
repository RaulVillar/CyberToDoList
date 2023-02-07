import React, { useState } from 'react';

export default function Input ({addTask}) {



    const [tasks, setTasks] = useState("");

    const InputChange = (event) => {
        setTasks(event.target.value);
    };

    const InputSubmit = (event) => {
        event.preventDefault();
        addTask(tasks)
        // const id = tasks.length + 1;
        // // setTasks((prev) => [
        // //   ...prev,
        // //   {
        // //     id: id,
        // //     task: tasks,
        // //     complete: false,
        // //   },
        // // ]);
        console.log (tasks)
        setTasks("")

    };

    const InputKeypress = (event) => {
        if (event.keyCode === 13) {
            InputSubmit();
        }
    };

    return (
        <form onSubmit={InputSubmit}>
            <input
                value={tasks}
                onChange={InputChange}
                onKeyPress={InputKeypress}
                type="text"
                id="app-input"
                className="app-input"
                name="text"
                placeholder="Introduce your task"
            />
            <button onClick={InputSubmit} type="submit">
                Add
            </button>
        </form>
    )
}