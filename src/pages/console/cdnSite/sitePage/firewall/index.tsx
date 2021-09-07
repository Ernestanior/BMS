import React, { FC, ReactElement } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import IPWhite from "./ipWhite";
import IPBlack from "./ipBlack";
import UAWhite from "./uaWhite";
import UABlack from "./uaBlack";

const Index: FC = (): ReactElement => {
  return (
    <div>
      <Switch>
        <Route
          path="/cdn-site/:sitename/firewall/ip-whitelist"
          component={IPWhite}
        ></Route>
        <Route
          path="/cdn-site/:sitename/firewall/ip-blacklist"
          component={IPBlack}
        ></Route>
        <Route
          path="/cdn-site/:sitename/firewall/ua-whitelist"
          component={UAWhite}
        ></Route>
        <Route
          path="/cdn-site/:sitename/firewall/ua-blacklist"
          component={UABlack}
        ></Route>
        <Redirect to="/cdn-site/:sitename/firewall/ip-whitelist"></Redirect>
      </Switch>
    </div>
  );
};

export default Index;
