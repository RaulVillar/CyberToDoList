import checked from "../Pictures/checked.png"
import remove from "../Pictures/remove.png"

export default function Tasks({ taskList, deleteTask, completeTask }) {



    return (
        <div>
            {
                taskList.map((item, index) => {
                    return <li key={item.id} className="tasks-container" style={{ textDecoration: item.completed ? "line-through" : "" }}>
                        <div>
                            <label className="tasks-label" htmlFor="tasks-0">
                                {item.taskName}
                            </label>
                        </div>
                        <div className="btn-group">
                            <img className="btn" src={checked} alt="" onClick={() => completeTask(index)}/>
                            <img className="btn" src={remove} alt="" onClick={() => deleteTask(index)} />
                        </div>
                    </li>
                })}
        </div>);
}





