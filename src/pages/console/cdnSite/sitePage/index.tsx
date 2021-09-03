import React, { FC, ReactElement } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dns from "./dns";
import Cache from "./cache";
const Index: FC = (): ReactElement => {
  return (
    <div>
      <Switch>
        <Route
          path="/console/cdn-site/:sitename/cache"
          component={Cache}
        ></Route>
        <Route
          path="/console/cdn-site/:sitename/site-configuration"
          component={Dns}
        ></Route>
        <Redirect to="/console/cdn-site/:sitename/site-configuration" />
      </Switch>
    </div>
  );
};

export default Index;
