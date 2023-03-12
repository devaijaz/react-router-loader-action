import React from "react";
import { Link, useLocation } from "react-router-dom";

const activeClass = (path:string, currentPath: string)=> {
  return path===currentPath? 'active': ''
}

export const Header = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/" className={activeClass(location.pathname, "/")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/tasks" className={activeClass(location.pathname, "/tasks")}>Tasks</Link>
        </li>
        <li>
          <Link to="/tasks/new" className={activeClass(location.pathname, "/tasks/new")}>Create new Task</Link>
        </li>
      </ul>
    </nav>
  );
};
