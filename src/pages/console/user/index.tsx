import React, { FC, ReactElement } from "react";
import Info from "./info";
import Log from "./log";
import ResetPwd from "./resetPwd";
import Security from "./security";
import { Switch, Route, Redirect } from "react-router-dom";
const Index: FC = (): ReactElement => {
  return (
    <div>
      <Switch>
        <Route path="/user/info" component={Info}></Route>
        <Route path="/user/log" component={Log}></Route>
        <Route path="/user/reset-pwd" component={ResetPwd}></Route>
        <Route path="/user/security" component={Security}></Route>
        <Redirect to="/user/info" />
      </Switch>
    </div>
  );
};

export default Index;
