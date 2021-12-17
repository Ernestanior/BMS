import React, { FC, ReactElement } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dns from "./dns";
import PlatSet from "./platSet";
import AIconfig from "./AIconfig";
const Index: FC = (): ReactElement => {
  return (
    <div>
      <Switch>
        <Route
          path="/cdn-site/:sitename/site-configuration/platform-setting"
          component={PlatSet}
        ></Route>
        <Route
          path="/cdn-site/:sitename/site-configuration/ai-configuration"
          component={AIconfig}
        ></Route>
        <Route
          path="/cdn-site/:sitename/site-configuration/dns"
          component={Dns}
        ></Route>
        <Redirect to="/cdn-site/:sitename/site-configuration/dns"></Redirect>
      </Switch>
    </div>
  );
};

export default Index;
