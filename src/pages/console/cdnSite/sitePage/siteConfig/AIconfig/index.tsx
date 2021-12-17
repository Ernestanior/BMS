import React, { FC, ReactElement } from "react";
import "./index.less";
import SideBar from "components/sideBar";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Config from "./config";
import Log from "./log";

const Index: FC = (): ReactElement => {
  const sitename = useLocation().pathname.split("/")[2];

  return (
    <div className="sys-manage-userlist-container">
      <SideBar
        title="客户管理"
        linkList={[
          {
            text: "配置设置",
            path: `/cdn-site/${sitename}/site-configuration/ai-configuration/config`,
          },
          {
            text: "调度日志",
            path: `/cdn-site/${sitename}/site-configuration/ai-configuration/log`,
          },
        ]}
      ></SideBar>
      <Switch>
        <Route
          path="/cdn-site/:sitename/site-configuration/ai-configuration/config"
          component={Config}
        ></Route>
        <Route
          path="/cdn-site/:sitename/site-configuration/ai-configuration/log"
          component={Log}
        ></Route>

        <Redirect to="/cdn-site/:sitename/site-configuration/ai-configuration/config"></Redirect>
      </Switch>
    </div>
  );
};

export default Index;
