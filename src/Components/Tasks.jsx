import checked from "../Pictures/checked.png"
import remove from "../Pictures/remove.png"

export default function Tasks ({taskList}) {

   

    return (
        <div>
        {
            (taskList != null) ?
            <>  
            {
              taskList.map((item) => {
        return <li className="tasks-container">
            <div>
                <label className="tasks-label" htmlFor="tasks-0">
                    {item}
                </label>
            </div>
            <div className="btn-group">
                <img className="btn" src={checked} alt=""/>
                <img className="btn" src={remove} alt=""/>
            </div>
        </li>
        })}
          </>
          : 
          <>
          </>
        }
        </div>);
}


