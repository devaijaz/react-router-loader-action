import { Link, useLoaderData } from "react-router-dom";
import { ITask, taskData } from "../../task-data";
import { delay } from "../../util";

export default function() {
  const tasks = useLoaderData() as ITask[];
  return <div>
    <h3>Task List Page</h3>
    {tasks?.map(task=> {
      return <div key={task.id} className="task-container">
        <Link to={`${task.id}`}>
          <p>
            <strong>{task.title}</strong>
          </p>
          <p>
            {task.content}
          </p>
          </Link>
      </div>
    })}
  </div>
}


export async function loader():Promise<ITask[]> {
  await delay();
  return taskData;
}