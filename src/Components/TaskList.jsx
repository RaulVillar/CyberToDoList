import Input from './Input';
import Tasks from './Tasks';


export default function TaskList({ addTask, taskList, deleteTask, completeTask }) {

    return (
        <div>
            <Input addTask={addTask} />
            <div className='app-task-container'>
                <h2 className='app-task-container-title' id="app-task-container-title">List of tasks</h2>
                <Tasks addTask={addTask} taskList={taskList} deleteTask={deleteTask} completeTask={completeTask}/>
            </div>
        </div>
    );
}


// markTask={markTask} 

