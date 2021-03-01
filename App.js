import React, { useEffect, useState } from "react";
import Homepage from "./page/Homepage";
import Aboutpage from "./page/Aboutpage";
import Navigation from "./Navigation";
import Information from "./page/Information";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/information" component={Information} />
          <Route path="/about" component={Aboutpage} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;