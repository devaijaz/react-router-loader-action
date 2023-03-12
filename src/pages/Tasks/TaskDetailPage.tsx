import { Suspense } from "react";
import { Await, defer, LoaderFunction, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { ITask, taskData } from "../../task-data";
import { delay } from "../../util"

export default function TaskDetailPage() {
  const task = useLoaderData() as Record<string, any>;
  return <div>
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={task.task}>
        {(task)=> {
          return <h3>{`Task Detail of ID '${task.title}'`}</h3>

        }}
      </Await>
    </Suspense>
  </div>
}


export async function loader({params}: LoaderFunctionArgs){
  return defer({task: getTaskById(params.id)})
}
async function getTaskById(id: string | undefined) {
  await delay();
  const found = taskData.find(task=> task.id.toString() === id);
  console.log(found);
  return found
}