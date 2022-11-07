import React, { useState } from "react";
import "./App.scss";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

function App() {
  const duolingoSketches = [
    {
      name: "Homepage",
      image: "DuolingoHomepage.png",
    },
    {
      name: "Module Selection",
      image: "DuolingoModules.png",
    },
    {
      name: "Topic Selection",
      image: "DuolingoTasks.png",
    },
    {
      name: "Example Question",
      image: "DuolingoQuestion.png",
    },
    {
      name: "Example Question",
      image: "DuolingoQuestion2.png",
    },
  ];

  return (
    <div id="App">
      <div id="appHeaderContainer">
        <h1>Iterative Design</h1>
      </div>
      <div id="menuContainer">{/* TODO: Add menu */}</div>
      <hr className="lineBreakBetweenSections" />
      <div className="sectionContainer">
        <div className="section">
          <div id="Overview">
            <h2>Overview</h2>
            <p>
              Avocademy is a 2020 startup dedicated to teaching people UI/UX
              design. They offer an 8 week personalized UI/UX curriculum,
              mentoring, and portfolio-building support.
            </p>
            <br />
            <p>
              Our team decided to prototype what that experience could look like
              for users, sketching out a variety of possible experiences before
              honing in on a final design to produce an interactive Figma
              prototype for. We received feedback during a critique session and
              through user testing, which allowed us to further refine our
              prototype.
            </p>
          </div>
        </div>
      </div>
      <hr className="lineBreakBetweenSections" />
      <div className="sectionContainer">
        <div className="section">
          <div id="Initial Sketches">
            <h2>Initial Sketches</h2>
            <p>
              Our first prototype was inspired by language-learning site
              Duolingo. It features a simple, organized structure with a focus
              on navigation elements that allow the user to select course topics
              by theme and level of expertise. The below screens show a mockup
              of the homepage, module selection page, topic selection page
              within a given module, and two example questions.
            </p>
            <br />
            <Carousel>
              {duolingoSketches.map((item, i) => (
                <Paper key={i}>
                  <img src={item.image} style={{ width: "100%" }} />
                </Paper>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <hr className="lineBreakBetweenSections" />
      <div className="sectionContainer">
        <div className="section">
          <div id="Initial Prototype">
            <h2>Initial Prototype</h2>
          </div>
        </div>
      </div>
      <hr className="lineBreakBetweenSections" />
      <div className="sectionContainer">
        <div className="section">
          <div id="Final Prototype">
            <h2>Final Prototype</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
