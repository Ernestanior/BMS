import React from "react";
import "./App.less";
import Frame from "components/frame";
import Login from "pages/login";
import { Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/" component={Frame}></Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
