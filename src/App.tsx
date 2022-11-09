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

  const khanSketches = [
    {
      name: "Homepage",
      image: "KhanHome.png",
    },
    {
      name: "Module Selection",
      image: "KhanModule.png",
    },
    {
      name: "Topic Selection",
      image: "KhanSection.png",
    },
  ];

  const codecademySketches = [
    {
      name: "Homepage",
      image: "CodecademyHome.png",
    },
    {
      name: "Course Selection",
      image: "CodecademyCourse.png",
    },
    {
      name: "Module Selection",
      image: "CodecademyModule.png",
    },
  ];

  const codinGameSketches = [
    {
      name: "Module Selection",
      image: "CodingameModuleSelectionPage.png",
    },
    {
      name: "Editor Page",
      image: "CodingameEditorPage.png",
    },
    {
      name: "Prototyping Page",
      image: "CodingamePrototypingPage.png",
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
              For this assignment, students are tasked with iteratively
              designing a mobile, website, or desktop application for a startup
              of their choice.
            </p>
            <br />
            <p>
              Our startup of choice is Avocademy, a startup founded in 2020
              dedicated to teaching people UI/UX design. They offer an
              eight-week personalized UI/UX curriculum, mentoring services, and
              portfolio-building support. We chose this startup because we are
              all current students in a UI/UX course at Brown, which allows us
              to integrate our perspectives into the project.
            </p>
            <br />
            <p>
              Our team decided to prototype what the Avocademy learning
              experience could look like for users of a website. To do this, we
              initially sketched out a variety of possible experiences before
              honing in on a final design to produce an interactive Figma
              prototype for. We received feedback during a critique session and
              through user testing, which allowed us to further refine our
              prototype and ultimately show it to the company.
            </p>
          </div>
        </div>
      </div>
      <hr className="lineBreakBetweenSections" />
      <div className="sectionContainer">
        <div className="section">
          <div id="Initial Sketches">
            {/* TODO @Nick - make images in carousel into a uniform size */}
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
              Our second prototype was inspired by programming puzzle site
              CodinGame. It features a set of puzzles at different difficulty
              levels that the user can complete to earn XP. The puzzles are can
              be chosen from a variety of categories, and the user can work on
              them in an integrated editor.
            </p>
            <br />
            <p>
              The below screens show a mockup of the puzzle selection page,
              editor page for a particular puzzle, and prototyping page for a
              particular puzzle.
            </p>
            <br />
            <Carousel>
              {codinGameSketches.map((item, i) => (
                <Paper key={i}>
                  <img src={item.image} style={{ width: "100%" }} />
                </Paper>
              ))}
            </Carousel>
            <br />
            <p>
              Our third prototype was inspired by Khan Academy, one of the most
              popular online platforms for learning a variety of different
              subjects. The Home page features an informative header with
              account information (which persists though all of the screens),
              along with a scrollable display of cards with each card being a
              lesson module on a given topic. Clicking on one of these module
              cards opens the Module View, which gives more detail on current
              progress on the different topics that are a part of the module.
              Clicking on one of these topics opens the Topic View, where the
              user can read the topic description and jump directly into the
              lesson.
            </p>
            <br />
            <Carousel>
              {khanSketches.map((item, i) => (
                <Paper key={i}>
                  <img src={item.image} style={{ width: "100%" }} />
                </Paper>
              ))}
            </Carousel>
            <br />
            <p>
              Our fourth prototype was inspired by Codecademy, and online
              platform that offers coding classes to many different languages.
              It features a detailed page for one to keep track of the topics
              they are interested in or working on and a code editor for doing
              activities.
            </p>
            <br />
            <p>
              The below screens show a mockup of the home page, course selection
              page, and editor page for an activity of a module.
            </p>
            <br />
            <Carousel>
              {codecademySketches.map((item, i) => (
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
          <div id="Final Sketch">
            <h2>Final Sketch</h2>
            <p>
              For our final sketch, we opted to combine elements from each of
              the initial sketches, creating an integrated homepage with aspects
              of all of the sketches and incorporating the meeting and project
              workflows from the Duolingo prototype; the topic selection view
              from the Khan Academy prototype; and the lesson view from the
              CodinGame and Codecademy prototypes.
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
            <p>embed prototype</p>
            {/* TODO */}
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
            <p>In response to this feedback, we implemented these changes:</p>
            <ul>
              <li>Redesigned the homepage to be more visual</li>
              <li>
                Added a section of the homepage showing the user&apos;s current
                place in the course. This includes a button that in practice
                would lead to a description of the entire curriculum
              </li>
              <li>
                Changed the interaction behavior in the prototype to reduce
                confusion
              </li>
              <li>
                Implemented all of the suggested changes in the &quot;suggested
                minor changes&quot; section above
              </li>
            </ul>
          </div>
          {/* TODO */}
        </div>
      </div>
      <hr className="lineBreakBetweenSections" />
      <div className="sectionContainer">
        <div className="section">
          <div id="Final Prototype">
            <h2>Final Prototype</h2>
            <p>embed prototype</p>
            {/* TODO */}
            <p>discuss user testing results</p>
            {/* TODO */}
            <p>email startup</p>
            {/* TODO */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
