import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { UsersTable } from "./UsersTable";
import { UserDetail } from "./UserDetail";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/users/" exact component={UsersTable} />
    <Route path="/users/:name"  component={UserDetail} />
  </>
);