import React, { useState } from "react";
import "./App.scss";
import Carousel from "react-material-ui-carousel";
import {
  Paper,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

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

  const comparisons = [
    {
      name: "First",
      image: "comparison1.jpg",
    },
    {
      name: "Second",
      image: "comparison2.jpg",
    },
    {
      name: "Third",
      image: "comparison3.jpg",
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
            {/* TODO @Nick - make images in carousel into a uniform size and smaller */}
            {/* TODO should we also add some instructions so users know how to use 
            carousel buttons (they start off hidden) */}
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
            <Carousel autoPlay={false}>
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
            <Carousel autoPlay={false}>
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
              subjects. The homepage features an informative header with account
              information (which persists though all of the screens), along with
              a scrollable display of cards with each card being a lesson module
              on a given topic. Clicking on one of these module cards opens the
              Module View, which gives more detail on current progress on the
              different topics that are a part of the module. Clicking on one of
              these topics opens the Topic View, where the user can read the
              topic description and jump directly into the lesson.
            </p>
            <br />
            <p>
              The below screens show a mockup of the homepage, module view, and
              topic view for an activity of a module.
            </p>
            <br />
            <Carousel autoPlay={false}>
              {khanSketches.map((item, i) => (
                <Paper key={i}>
                  <img src={item.image} style={{ width: "100%" }} />
                </Paper>
              ))}
            </Carousel>
            <br />
            <p>
              Our fourth prototype was inspired by Codecademy, an online
              platform that offers coding classes for many different languages.
              It features a detailed page for users to keep track of the topics
              they are interested in or working on, and a code editor for doing
              activities.
            </p>
            <br />
            <p>
              The below screens show a mockup of the homepage, course selection
              page, and editor page for an activity of a module.
            </p>
            <br />
            <Carousel autoPlay={false}>
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
            <Carousel autoPlay={false}>
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
            Based on our final sketch, we developed the following design guide.
            After that, we combined our low-fidelity prototype with our design
            guide to produce our initial high-fidelity prototype, which is
            embedded below and can also be accessed{" "}
            <a href="https://www.figma.com/proto/HXYixM5CfPGaaenXeHHSiD/Avocademy-Initial-Prototype?node-id=1%3A7&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A7">
              here
            </a>
            .
            <iframe
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
              width="800"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FHXYixM5CfPGaaenXeHHSiD%2FAvocademy-Initial-Prototype%3Fnode-id%3D1%253A7%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A7"
              allowFullScreen
            ></iframe>
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
                  courses is unexpected
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
                place in the course, which includes a button that in practice
                would lead to a description of the entire curriculum
              </li>
              <li>
                Changed the interaction behavior in the prototype to reduce user
                confusion and ensure mock content matched user expectations
              </li>
              <li>
                Implemented all of the suggested changes in the &quot;suggested
                minor changes&quot; section above
              </li>
            </ul>
          </div>
        </div>
        <hr className="lineBreakBetweenSections" />
        <div className="section">
          <div id="Prototype Comparison">
            <h2>Prototype Comparison</h2>
            <p>
              The diagrams below showcase the key changes that we made between
              the initial and final version of the prototype after receiving
              feedback.
            </p>
            <Carousel autoPlay={false} sx={{ width: "80vw" }}>
              {comparisons.map((item, i) => (
                <Paper key={i}>
                  <img src={item.image} />
                </Paper>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <hr className="lineBreakBetweenSections" />
      <div className="sectionContainer">
        <div className="section">
          <div id="Final Prototype">
            <h2>Final Prototype</h2>
            Based on the feedback we received on our initial prototype, we
            implemented the changes from the "Prototype Comparison" section and
            developed the final version of the high-fidelity prototype, which is
            embedded below and can also be accessed{" "}
            <a href="https://www.figma.com/proto/h9kL8DP45ex85JgEiNQ85H/Avocademy-Final-Prototype?page-id=0%3A1&node-id=1%3A7&viewport=24%2C212%2C0.14&scaling=scale-down&starting-point-node-id=1%3A7">
              here
            </a>
            .
            <br />
            <iframe
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
              width="800"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fh9kL8DP45ex85JgEiNQ85H%2FAvocademy-Final-Prototype%3Fpage-id%3D0%253A1%26node-id%3D1%253A7%26viewport%3D24%252C212%252C0.14%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A7"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <hr className="lineBreakBetweenSections" />
      <div className="sectionContainer">
        <div className="section">
          <div id="User Testing">
            <h2>User Testing</h2>
            <p>
              We conducted user testing on our final prototype with 3 users. The
              users were given a prompt that provided context for the prototype
              and asked them to complete a set of tasks.
            </p>
            <br />
            <p>The scenario provided to the users was as follows:</p>
            <p>
              <ul>
                <li>
                  You've signed up for an 8 week bootcamp learning about user
                  interfaces and user experiences, with the hopes of getting a
                  job in UI/UX afterwards. You're currently on Week 2 of the
                  course, and you have been working on the Intro to Bootstrap
                  module. Please note that the "webpage" you'll interact with
                  for these tasks is not an actual webpage but instead an
                  interactive mockup made on prototyping software.
                </li>
              </ul>
            </p>
            <br />
            <p>The tasks given to the users were as follows:</p>
            <p>
              <ul>
                <li>
                  Sign up for an account and complete the first lesson of the
                  course
                </li>
                <li>
                  Schedule a mentor meeting and complete the project ideas
                  workflow
                </li>
              </ul>
            </p>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="iframe"
                    height="200"
                    src="https://www.youtube.com/embed/dClXKhpQKp4"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      User 1
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <ul>
                        <li>...</li>
                      </ul>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="iframe"
                    height="200"
                    src="https://www.youtube.com/embed/CKoLWWJvup4"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      User 2
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <ul>
                        <li>...</li>
                      </ul>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="iframe"
                    height="200"
                    src="https://www.youtube.com/embed/Q6TDsTGgdew"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      User 3
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <ul>
                        <li>...</li>
                      </ul>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <br />
            <p>
              TODO: In your write-up, explain what the UserTesting results mean
              by directly addressing the task you gave, and discuss if they were
              in line with your expectations. Include a short summary of the
              subtasks, what types of errors users made, and generally how they
              did on the tasks. Finally, comment about the potential interface
              changes you would make based on your UserTesting results and
              feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
