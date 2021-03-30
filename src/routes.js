import React from "react";
import { Home } from "./views/home";
import { About } from "./views/about";
import { Contact } from "./views/contact";
import { NotFound } from "./views/404";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Route, Switch } from "react-router-dom";

export const Routes = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
};
