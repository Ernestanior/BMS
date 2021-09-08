import React, { FC, ReactElement } from "react";
import "./index.less";
import SideBar from "components/sideBar";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Avail from "./availability";
import Response from "./responseTime";

const Index: FC = (): ReactElement => {
  const sitename = useLocation().pathname.split("/")[2];

  return (
    <div className="sys-manage-userlist-container">
      <SideBar
        title="平台统计"
        linkList={[
          {
            text: "可用率",
            path: `/cdn-site/${sitename}/statistics/platforms/availability`,
          },
          {
            text: "响应时间",
            path: `/cdn-site/${sitename}/statistics/platforms/response-time`,
          },
        ]}
      ></SideBar>
      <Switch>
        <Route
          path="/cdn-site/:sitename/statistics/platforms/availability"
          component={Avail}
        ></Route>
        <Route
          path="/cdn-site/:sitename/statistics/platforms/response-time"
          component={Response}
        ></Route>

        <Redirect to="/cdn-site/:sitename/statistics/platforms/availability"></Redirect>
      </Switch>
    </div>
  );
};

export default Index;
