import React from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <AboutMe />
      <Project />
      <Footer />
    </div>
  );
}
export default App;
