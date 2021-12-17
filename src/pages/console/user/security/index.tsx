import React, { FC, ReactElement } from "react";
import "./index.less";
import SideBar from "components/sideBar";
import Restriction from "./restriction";
import Record from "./record";
import { Switch, Route, Redirect } from "react-router-dom";
const Index: FC = (): ReactElement => {
  return (
    <div className="user-security-container">
      <SideBar
        title="安全设置"
        linkList={[
          { text: "登录限制", path: "/user/security/login-restriction" },
          { text: "登录历史", path: "/user/security/login-records" },
        ]}
      ></SideBar>
      <Switch>
        <Route
          path="/user/security/login-restriction"
          component={Restriction}
        ></Route>
        <Route path="/user/security/login-records" component={Record}></Route>
        <Redirect to="/user/security/login-restriction"></Redirect>
      </Switch>
    </div>
  );
};

export default Index;
