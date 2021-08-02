import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import  Novedades  from "./pages/novedades/novedades";
import Property from "./pages/property/property";
import Properties  from "./pages/properties/properties";
import { StateProvider } from "./state";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { WhatsappLinked } from "./App.styles";

export default function App() {
  return (
    <>
      <StateProvider>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/novedades">
                <Novedades />
              </Route>
              <Route exact path="/property/:id">
                <Property />
              </Route>
              <Route exact path="/properties">
                <Properties />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <WhatsappLinked link="https://wa.me/+5491162991141" />
          </div>
        </Router>
      </StateProvider>
      {/* <Footer /> */}
    </>
  );
}
