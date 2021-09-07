import React, { FC, ReactElement } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import UserList from "./userList";
const Index: FC = (): ReactElement => {
  return (
    <div style={{ height: "200px" }}>
      <Switch>
        <Route path="/system-management/userlist" component={UserList}></Route>
        <Redirect to="/system-management/userlist"></Redirect>
      </Switch>
    </div>
  );
};

export default Index;
