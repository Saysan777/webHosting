import React from "react";
import { BrowerRouter as Router, Switch, Route, Link } from "react-router";
import Body from "./Body.js";
import Homepage from "./Homepage";

export const practice = () => {
  return (
    <div>
      <Router>
        <Link to="/">Homepage </Link>
        <Link to="/about"> About </Link>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/body" exact component={Body} />
          <Route path="/body" exact component={Body} />
        </Switch>
      </Router>
    </div>
  );
};

export default practice;
