import React, { FC, ReactElement } from "react";
import "./index.less";
// import TableOne from "./home/tableOne";
// import TableTwo from "./home/tableTwo";
// import TableThree from "./home/tableThree";
// import TableFour from "./home/tableFour";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./home";
import Site from "./cdnSite";

const Index: FC = (): ReactElement => {
  return (
    <div>
      <Switch>
        <Route path="/console/cdn-site" component={Site}></Route>
        <Route path="/console/home" component={Home} />
        <Redirect to="/console/home"></Redirect>
      </Switch>
    </div>
  );
};

export default Index;
