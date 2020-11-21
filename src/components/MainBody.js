import React from "react";
import {
    // BrowserRouter as Router,
    Switch,
    Route,
    // Link
  } from 'react-router-dom';
import "./MainBody.css";
import Home from "./Home";
import Library from "./Library";
import Reading from "./Reading";
import Setting from "./Setting";

import NavTab from './NavTab';

const MainBody = () => {
  return (
    <div className="mainbody">
        {/* Routing link */}
        <NavTab/>

        {/* router components */}
        <Switch>
          <Route path="/setting">
            <Setting/>
          </Route>
          <Route path="/reading">
            <Reading/>
          </Route>
          <Route path="/library">
            <Library/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </div>
  );
};

export default MainBody;
