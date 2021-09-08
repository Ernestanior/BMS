import React, { FC, ReactElement } from "react";
import "./index.less";
import SideBar from "components/sideBar";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Avail from "./availability";
import Response from "./responseTime";
import Visit from "./visitSource";

const Index: FC = (): ReactElement => {
  const sitename = useLocation().pathname.split("/")[2];

  return (
    <div className="sys-manage-userlist-container">
      <SideBar
        title="网页性能统计"
        linkList={[
          {
            text: "可用率",
            path: `/cdn-site/${sitename}/statistics/web-performance/availability`,
          },
          {
            text: "响应时间",
            path: `/cdn-site/${sitename}/statistics/web-performance/response-time`,
          },
          {
            text: "资源访问",
            path: `/cdn-site/${sitename}/statistics/web-performance/visit-source`,
          },
        ]}
      ></SideBar>
      <Switch>
        <Route
          path="/cdn-site/:sitename/statistics/web-performance/availability"
          component={Avail}
        ></Route>
        <Route
          path="/cdn-site/:sitename/statistics/web-performance/response-time"
          component={Response}
        ></Route>
        <Route
          path="/cdn-site/:sitename/statistics/web-performance/visit-source"
          component={Visit}
        ></Route>

        <Redirect to="/cdn-site/:sitename/statistics/web-performance/availability"></Redirect>
      </Switch>
    </div>
  );
};

export default Index;
