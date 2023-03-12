import { ActionFunctionArgs, redirect, useActionData, useNavigation } from "react-router-dom";
import { TaskCreateForm } from "../../components/TaskCreateForm";
import { taskData } from "../../task-data";

export default function() {
  const error = useActionData() as any;
  const navigation = useNavigation();
  const submitting = navigation.state !=="idle";
  return <div>
    <h3>Create a new Task</h3>
    {error && error.message && <p>{error.message}</p>}
    <TaskCreateForm submitting={submitting}/>
  </div>
}


export async function action({request}: ActionFunctionArgs) {
  const formData = await request.formData();
  const task = Object.fromEntries(formData);
  try {
    validateTask(task);
  }catch(e) {
    return e;
  }
  taskData.push({
    id: taskData.length + 1,
    title: task.title as string,
    content: task.content as string
  });
  return redirect("/tasks");
  
}

function validateTask(task:any) {
  if(!task.title) {
    throw {message: "title is required", status: 422}
  }
  if(!task.content) {
    throw {message: "content is required", status: 422}
  }
}