import { Header } from './Components/Header';
import TaskList from './Components/TaskList';
import { useState } from 'react';

function App() {

  const [taskList, setTaskList] = useState([]);


  const addTask = (item) => {
    const newTask = {
      id: taskList.length,
      taskName: item,
      completed: false
    };
    setTaskList([...taskList, newTask]);

  };

  const completeTask = index => {
    const newTasks = [...taskList];
    newTasks[index].completed = true;
    setTaskList(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...taskList];
    newTasks.splice(index, 1);
    setTaskList(newTasks);
  }

  return (
    <div className='app'>
      <Header />
      <TaskList addTask={addTask} taskList={taskList} deleteTask={deleteTask} completeTask={completeTask} />
    </div>
  );
}

export default App;

