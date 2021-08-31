import React, { ReactElement, FC } from "react";
import Header from "components/header";
import Footer from "components/footer";
import "./index.less";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "pages/home";
import Site from "pages/site";
interface IProps {}

const Index: FC<IProps> = ({}: IProps): ReactElement => {
  return (
    <>
      <Header></Header>
      <section className="frame-section">
        <Switch>
          <Route path="/home/site" component={Site}></Route>
          <Route path="/home/" component={Home}></Route>
          <Redirect to="/home/"></Redirect>
        </Switch>
      </section>
      <Footer></Footer>
    </>
  );
};
export default Index;
