import React from "react";
import AboutMePhoto from "./AboutMePhoto.jpg";

function AboutSection() {

  return (
    
    <div id="aboutMe" className="container my-5 py-3 border border-secondary rounded bg-secondary text-white border border-light">
      <div className="row ml-2">
        <div className="col-12">
          <div className="page-header">
            <h2>About Me</h2>
            <hr></hr>
          </div>
        </div>
      </div>
      <div className="row ml-2">
        <div className="col-12">
          <img src={AboutMePhoto} width="150" height="150" className="img-thumbnail float-left mr-3"
            alt="Jordan Stuckman"></img>
          <p>
            My name is Jordan Stuckman. I am an aspiring web-developer based in Columbus, OH. I have been employed at
            Alliance Data Systems
            for the last 6 years, where I work as a fraud detection analyst. In May of
            2019, I recieved my bachelors degree in Marketing. Currently, I am completing a web development bootcamp
            offered by
            The Ohio State University,
            which will end in April 2020. I am seeking a role as junior web developer. You can view my
            LinkedIn profile, Github repository and resume with the links provided below.
          </p>
          <br></br>
          <br></br>
          <hr></hr>
          <label for="linkedIn">LinkedIn:</label>
          <a id="linkedIn" className="text-warning" href="https://www.linkedin.com/in/jordan-stuckman-42a9b987/"
            target="_blank" rel="noopener noreferrer"> jordan-stuckman-42a9b987</a>
          <br></br>
          <label for="gitHub">Github:</label>
          <a id="gitHub" className="text-warning" href="https://github.com/jordanks93" target="_blank"
            rel="noopener noreferrer"> jordanks93</a>
          <br></br>
          <label for="resume">Resume:</label>
          <a id="resume" className="text-warning"
            href="https://drive.google.com/file/d/1t4EdHBg8wR34rloS4zMExBR1pid8Imz-/view?usp=sharing" target="_blank"
            rel="noopener noreferrer"> Downloadable Copy (Google Docs)</a>
          <br></br>
          <label for="email">Email:</label>
          <a id="email" className="text-warning">jordanks93@gmail.com</a>
          <br></br>
          <label for="phone">Phone:</label>
          <a id="phone" className="text-warning">(740) 360-0083</a>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;