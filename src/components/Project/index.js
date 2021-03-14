import React from "react";

function Project() {

  return (
    
    <div className="container my-5 mb-5 p-3 border border-secondary rounded bg-secondary text-white border border-light">

      <div className="page-header">
        <h2>Portfolio</h2>
        <hr></hr>
      </div>

      <div className="row">

        <div className="col-lg-6 col-sm-12">
          <img src="images/Project2.jpg" className="img-thumbnail mx-auto d-block pb-3 mt-2" alt="Placeholder"></img>
          <h6 className="ml-4 mt-1"><strong>Project Name: Inbox Playlist</strong></h6>
          <div id="linkList">
            <a className="btn btn-dark text-warning border border-light my-1"
              href="https://github.com/ehardek/Project-2-Group-3" target="_blank" rel="noopener noreferrer">Project
              Repository</a>
            <br></br>
            <a className="btn btn-dark text-warning border border-light my-1"
              href="https://email-playlist.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed
              Project</a>
          </div>
        </div>

        <div className="col-lg-6 col-sm-12">
          <img src="images/Burger.jpg" className="img-thumbnail mx-auto d-block pb-3 mt-2" alt="Placeholder"></img>
          <h6 className="ml-4 mt-1"><strong>Project Name: Get Da Burger</strong></h6>
          <div id="linkList">
            <a className="btn btn-dark text-warning border border-light my-1"
              href="https://github.com/jordanks93/burger" target="_blank" rel="noopener noreferrer">Project
              Repository</a>
            <br></br>
            <a className="btn btn-dark text-warning border border-light my-1"
              href="https://glacial-waters-83708.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed
              Project</a>
          </div>
        </div>

        <div className="col-lg-6 col-sm-12">
          <img src="images/CovidTracker.JPG" className="img-thumbnail mx-auto d-block pb-3 mt-2" alt="Placeholder"></img>
          <h6 className="ml-4 mt-1"><strong>Project Name: Covid Tracker</strong></h6>
          <div id="linkList">
            <a className="btn btn-dark text-warning border border-light my-1"
              href="https://github.com/sziccardi1998/COVIDTracker" target="_blank" rel="noopener noreferrer">Project
              Repository</a>
            <br></br>
            <a className="btn btn-dark text-warning border border-light my-1"
              href="https://sziccardi1998.github.io/COVIDTracker/" target="_blank" rel="noopener noreferrer">Deployed
              Project</a>
          </div>
        </div>

        <div className="col-lg-6 col-sm-12">
          <img src="images/WorkDaySched.JPG" className="img-thumbnail mx-auto d-block pb-4 mt-2" alt="Placeholder"></img>
          <h6 className="ml-4 mt-1"><strong>Project Name: Work Day Scheduler</strong></h6>
          <div id="linkList">
            <a className="btn btn-dark text-warning border border-light my-1"
              href="https://github.com/jordanks93/WorkDayScheduler" target="_blank" rel="noopener noreferrer">Project
              Repository</a>
            <br></br>
            <a className="btn btn-dark text-warning border border-light my-1"
              href="https://jordanks93.github.io/WorkDayScheduler/" target="_blank" rel="noopener noreferrer">Deployed
              Project</a>
          </div>
        </div>
      </div>

      <div className="row">

        <div className="col-lg-6 col-sm-12">
          <img src="images/weatherDash.jfif" className="img-thumbnail mx-auto d-block pb-1 mt-2" alt="Placeholder"></img>
          <h6 className="ml-4 mt-1"><strong>Project Name: Weather Dashboard</strong></h6>
          <div id="linkList">
            <a className="btn btn-dark text-warning border border-light my-1"
              href="https://github.com/jordanks93/WeatherDashboard" target="_blank" rel="noopener noreferrer">Project
              Repository</a>
            <br></br>
            <a className="btn btn-dark text-warning border border-light my-1"
              href="https://jordanks93.github.io/WeatherDashboard/" target="_blank" rel="noopener noreferrer">Deployed
              Project</a>
          </div>
        </div>

        <div className="col-lg-6 col-sm-12">
          <img src="images/PasswordGen.jfif" className="img-thumbnail mx-auto d-block pb-3 mt-2" alt="Placeholder"></img>
          <h6 className="ml-4 mt-1"><strong>Project Name: Password Generator</strong></h6>
          <div id="linkList">
            <a className="btn btn-dark text-warning border border-light my-1"
              href="https://github.com/jordanks93/PasswordGenerator" target="_blank" rel="noopener noreferrer">Project
              Repository</a>
            <br></br>
            <a className="btn btn-dark text-warning border border-light my-1"
              href="https://jordanks93.github.io/PasswordGenerator/" target="_blank" rel="noopener noreferrer">Deployed
              Project</a>
          </div>
        </div>
      </div>
      
    </div>

  );
}

export default Project;