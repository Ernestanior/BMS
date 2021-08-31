import React, { ReactElement, FC } from "react";
import Header from "components/header";
import Footer from "components/footer";
import "./index.less";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "pages/home";
import Site from "pages/site";
import Dns from "pages/dns";
import Ssl from "pages/ssl";
import Ai from "pages/ai";
import Cache from "pages/cache";
interface IProps {}

const Index: FC<IProps> = ({}: IProps): ReactElement => {
  return (
    <>
      <Header></Header>
      <section className="frame-section">
        <Switch>
          <Route path="/home/site" component={Site}></Route>
          <Route path="/home/dns" component={Dns}></Route>
          <Route path="/home/ssl" component={Ssl}></Route>
          <Route path="/home/ai" component={Ai}></Route>
          <Route path="/home/cache" component={Cache}></Route>
          <Route path="/home/" component={Home}></Route>
          <Redirect to="/home/"></Redirect>
        </Switch>
      </section>
      <Footer></Footer>
    </>
  );
};
export default Index;
