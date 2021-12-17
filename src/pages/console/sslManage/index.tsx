import React, { FC, ReactElement } from "react";
import "./index.less";
import SideBar from "components/sideBar";
import { Redirect, Route, Switch } from "react-router-dom";
import Client from "./client";
import Download from "./download";
import Origin from "./origin";

const Index: FC = (): ReactElement => {
  return (
    <div className="sys-manage-userlist-container">
      <SideBar
        title="信息查询"
        linkList={[
          { text: "客户端证书", path: "/ssl-management/client-certificate" },
          { text: "源点证书", path: "/ssl-management/origin-certificate" },
          { text: "证书下载", path: "/ssl-management/certificate-download" },
        ]}
      ></SideBar>
      <Switch>
        <Route
          path="/ssl-management/client-certificate"
          component={Client}
        ></Route>
        <Route
          path="/ssl-management/origin-certificate"
          component={Origin}
        ></Route>
        <Route
          path="/ssl-management/certificate-download"
          component={Download}
        ></Route>
        <Redirect to="/ssl-management/client-certificate"></Redirect>
      </Switch>
    </div>
  );
};

export default Index;
