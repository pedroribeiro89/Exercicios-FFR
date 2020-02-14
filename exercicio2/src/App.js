import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import { ApplicationRoutes } from "./ApplicationRoutes";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>

      <ApplicationRoutes />
    </div>
  );
}

export default App;
