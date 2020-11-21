import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "../containers/App";
import LoginPage from "../containers/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
    </BrowserRouter>
  );
};

export default App;
