import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ViewPage from "./pages/ViewPage";
import AddOrEdit from "./pages/AddOrEdit";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={ViewPage} exact path="/" />
          <Route component={AddOrEdit} path="/product:data" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
