import checked from "../Pictures/checked.png"
import remove from "../Pictures/remove.png"

export default function Tasks({ taskList, deleteTask, completeTask }) {

    return (
        <div className="tasks-container">
            {
                taskList.map((item, index) => {
                    return <li key={item.id} className="each-task-container" style={{ backgroundColor: item.completed ? "rgba(52, 52, 52, 1)" : "" }}>
                        <div className="label-container">
                            <label className="tasks-label" htmlFor="tasks-0">
                                {item.taskName}
                            </label>
                        </div>
                        <div className="btn-group">
                            <img className="btn" src={checked} alt="" onClick={() => completeTask(index)} />
                            <img className="btn" src={remove} alt="" onClick={() => deleteTask(index)} />
                        </div>
                    </li>
                })}
        </div>);
}





