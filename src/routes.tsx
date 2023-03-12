import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { MainLayoutPage } from "./pages/MainLayoutPage";
import HomePage from "./pages/HomePage";
import TaskCreatePage, {action as taskCreateAction}  from "./pages/Tasks/TaskCreatePage";
import TaskListPage, {loader as tasklistLoader} from "./pages/Tasks/TaskListPage";
import TaskDetailPage, {loader as taskDetailLoader} from "./pages/Tasks/TaskDetailPage";
import { Suspense } from "react";

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayoutPage />}>
      <Route index element={<HomePage />}/>
      <Route path="/tasks" element={<Suspense fallback="Loading..."><TaskListPage/></Suspense>} loader={tasklistLoader} shouldRevalidate={(params)=> {
        console.log(params);
        return true;
      }}/>
      <Route path="/tasks/new" element={<TaskCreatePage/>} action={taskCreateAction}/>
      <Route path="/tasks/:id" element={<TaskDetailPage/>} loader={taskDetailLoader}/>
    </Route>
  )
);
