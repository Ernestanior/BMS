import React, { ReactElement, FC } from "react";
import Header from "components/header";
import Footer from "components/footer";
import "./index.less";
import { Switch, Route, Redirect } from "react-router-dom";
import Console from "pages/console";
import Site from "pages/site";

const Index: FC = (): ReactElement => {
  return (
    <>
      <Header></Header>
      <section className="frame-section">
        <Switch>
          <Route path="/console/site" component={Site}></Route>
          <Route path="/console/" component={Console}></Route>
          <Redirect to="/console/"></Redirect>
        </Switch>
      </section>
      <Footer></Footer>
    </>
  );
};
export default Index;
