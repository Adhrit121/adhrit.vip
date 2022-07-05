import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceworker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Donotclick,
  Warning
} from "./components";


ReactDOM.render(
  <Router>
    <Navigation options={{
          headerStyle: {backgroundColor: "#fff", borderBottomWidth: 0 ,
          headerTitleStyle: { color: "#000" },
          headerTintColor: "#000",
          headerMode: 'float',}
          
          
        }} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/warning" element={<Warning />} />
      <Route path="/do-not-click" element={<Donotclick />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();