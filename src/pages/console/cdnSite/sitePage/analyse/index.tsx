import React, { FC, ReactElement } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CdnUtil from "./cdnUtil";
import Platform from "./platform";
import Usage from "./usage";
import WebPerform from "./webPerform";

const Index: FC = (): ReactElement => {
  return (
    <div>
      <Switch>
        <Route
          path="/cdn-site/:sitename/analyse/cdn-utilization"
          component={CdnUtil}
        ></Route>
        <Route
          path="/cdn-site/:sitename/analyse/platforms"
          component={Platform}
        ></Route>
        <Route
          path="/cdn-site/:sitename/analyse/usage"
          component={Usage}
        ></Route>
        <Route
          path="/cdn-site/:sitename/analyse/web-performance"
          component={WebPerform}
        ></Route>
        <Redirect to="/cdn-site/:sitename/analyse/web-performance"></Redirect>
      </Switch>
    </div>
  );
};

export default Index;
