import React, { FC, ReactElement } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Domain from "./domain";
import Record from "./record";
const Index: FC = (): ReactElement => {
  return (
    <div>
      <Switch>
        <Route path="/dns/record-management" component={Record}></Route>
        <Route path="/dns/domain-management" component={Domain}></Route>
        <Redirect to="/dns/domain-management"></Redirect>
      </Switch>
    </div>
  );
};

export default Index;
