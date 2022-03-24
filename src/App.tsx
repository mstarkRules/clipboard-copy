import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from "react-router-dom";

import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import { SuccessPage } from "./pages/Success";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={SuccessPage} />
        </Switch>

        <GlobalStyle />
        <Footer />
      </Router>
    </>
  );
}

export default App;
