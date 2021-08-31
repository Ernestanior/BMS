import React from "react";
import "./App.less";
import Frame from "components/frame";
import Login from "pages/login";
import { Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Frame}></Route>
        <Route path="/login" component={Login}></Route>
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default App;
