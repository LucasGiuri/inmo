import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import News from "./pages/news/news";
import Property from "./pages/property/property";
import Properties from "./pages/properties/properties";
import { StateProvider } from "./state";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WhatsappLink from "./components/whatsappLink/whatsappLink";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <>
      <StateProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route exact path="/property/:id">
              <Property />
            </Route>
            <Route exact path="/on-sale">
              <Properties id='on-sale' />
            </Route>
            <Route exact path="/rentals">
              <Properties id='rentals' />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <WhatsappLink link="https://wa.me/+5491162991141" />
        </Router>
        <Footer />
      </StateProvider>
    </>
  );
}
