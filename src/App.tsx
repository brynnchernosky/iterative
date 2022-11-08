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
    {
      name: "Mentor Meeting Scheduling",
      image: "DuolingoMentor.png",
    },
    {
      name: "Mentor Meeting Scheduling",
      image: "DuolingoSchedule.png",
    },
    {
      name: "Project Ideas",
      image: "DuolingoProject.png",
    },
    {
      name: "Project Ideas",
      image: "DuolingoPrompts.png",
    },
  ];

  const finalSketches = [
    {
      name: "Homepage",
      image: "FinalHomepage.png",
    },
    {
      name: "Topic Selection",
      image: "FinalModule.png",
    },
    {
      name: "Example Task",
      image: "FinalLesson.png",
    },
    {
      name: "Mentor Meeting Scheduling",
      image: "FinalMentor.png",
    },
    {
      name: "Mentor Meeting Scheduling",
      image: "FinalSchedule.png",
    },
    {
      name: "Project Ideas",
      image: "FinalProject.png",
    },
    {
      name: "Project Ideas",
      image: "FinalPrompt.png",
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
              by theme and level of expertise. There are also workflows to set
              up a meeting with a mentor and to look through project ideas in a
              similar manner.
            </p>
            <br />
            <p>
              The below screens show a mockup of the homepage, module selection
              page, topic selection page within a given module, two example
              questions, the mentor meeting scheduling workflow, and the project
              ideas workflow.
            </p>
            <br />
            <Carousel>
              {duolingoSketches.map((item, i) => (
                <Paper key={i}>
                  <img src={item.image} style={{ width: "100%" }} />
                </Paper>
              ))}
            </Carousel>
            <br />
            <p>
              Our second prototype was inspired by CodinGame. //add description
              and image carousel//
            </p>
            <br />
            <p>
              Our third prototype was inspired by Khan Academy. //add
              description and image carousel//
            </p>
            <br />
            <p>
              Our second prototype was inspired by Code Academy. //add
              description and image carousel//
            </p>
            <br />
          </div>
        </div>
      </div>

      <hr className="lineBreakBetweenSections" />
      <div className="sectionContainer">
        <div className="section">
          <div id="Final Sketch">
            <h2>Final Sketch</h2>
            <p>
              For our final sketch, we opted to combine elements from each of
              the initial sketches, creating an integrated homepage with aspects
              of all of the sketches and incorporating the meeting and project
              workflows from the Duolingo prototype; the topic selection view
              from the Khan Academy prototype; and the lesson view from the
              CodinGame and Code Academy prototypes.
            </p>
            <br />
            <p>
              The below screens show a mockup of the homepage, the topic
              selection page, an example task, the mentor meeting scheduling
              workflow, and the project ideas workflow.
            </p>
            <Carousel>
              {finalSketches.map((item, i) => (
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
            <p>
              embed prototype -- revert to file as it was on the day we did
              critique
            </p>
            <br />
            <p>
              During a critique session with our peers, we received the
              following feedback:
            </p>
            <ul>
              <li>Usability</li>
              <ul>
                <li>Would like more styling on the homepage</li>
                <li>
                  Would like to have a better understanding of full curriculum
                </li>
                <li>
                  Previous/next buttons on lesson page going to different
                  courses unexpected
                </li>
              </ul>
              <li>Suggested minor changes</li>
              <ul>
                <li>Use term submit instead of continue on scheduling page</li>
                <li>Show more dates on scheduling page</li>
                <li>
                  Remove or make smaller the profile image in the lesson page
                </li>
                <li>Make left menu bar on lesson page smaller</li>
                <li>
                  Make the project ideas page scrollable instead of just
                  implying it
                </li>
                <li>Remove add/remove goal options</li>
                <li>Change yellow outline to orange on topic selection page</li>
              </ul>
            </ul>
            <br />
            In response to this feedback, we redesigned the homepage to be more
            visual; added a section of the homepage explaining the user&apos;s
            current place in the course with a button that in practice would
            lead to a description of the entire curriculum; changed the
            interaction behavior in the prototype to reduce confusion; and made
            all of the minor changes.
          </div>
        </div>
      </div>
      <hr className="lineBreakBetweenSections" />
      <div className="sectionContainer">
        <div className="section">
          <div id="Final Prototype">
            <h2>Final Prototype</h2>
            <p>embed prototype</p>
            <p>discuss usertesting results</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
