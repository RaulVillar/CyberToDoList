import Input from './Input';
import Tasks from './Tasks';
import { useState } from 'react';

export default function TaskList() {

    const [taskList, setTaskList] = useState([]);


    const addTask = (item) => {
        item.id = 
        setTaskList([...taskList, item]);
    };
    console.log(taskList)

    return (
        <div>
            <Input addTask={addTask} />
            <div className='app-task-container'>
                <h2 className='app-task-container-title' id="app-task-container-title">List of tasks</h2>
                <Tasks taskList={taskList} />
            </div>
        </div>
    );
}




