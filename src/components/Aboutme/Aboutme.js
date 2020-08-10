import React from "react";
import displaypic from "../../images/display-pic.jpg";
import "./Aboutme.css";

const Aboutme = () => {
  return (
    <div>
      <div className="container-fluid splash container" id="splash">
        <img
          src={displaypic}
          alt="Portrait of Mr. Roboto"
          className="profile-image"
        />
        <h1>HELLO!</h1>
        <h1 className="intro-text">
          <span className="lead" id="typed">
            I am{" "}
          </span>
        </h1>
        <span className="continue">
          <a href="#about">
            <i className="fa fa-angle-down"></i>
          </a>
        </span>
      </div>
      <section
        className="success container row col-lg-12 text-center about" id="about" >
        <h2>About Me</h2>
        <hr className="star-light" />
        <div className="row">
          <div>
            <p className="content-text">
              I am Khush Jain. I have a lot of experience in the field of web
              development. I've made various web based projects before. I've
              been learning various web related languages, javascript
              frameworks, python frameworks since a long time. I'm a full stack
              developer, currently a student in third year of engineering. I am
              a hard worker and believe in doing the work with perfection and
              deliver exceptional results. I have the skills which you are
              looking for in a candidate.
            </p>
          </div>
          <div className="col-lg-8 col-lg-offset-2 text-center contact-button">
            <a href="#contact" className="btn btn-lg btn-outline">
              <i className="fa fa-envelope"></i> Contact Me
            </a>
          </div>
        </div>
      </section>
      <div class="col-lg-8 col-lg-offset-2 text-center">
			<span className="tech-title">My Technical Skills</span>
			<hr className="star-portfolio" />
				<strong className="tech">Python</strong>
        <div class="progress">
          <div class="bar" style={{ width:"80%"}}>
            <p class="percent">80%</p>
          </div>
        </div>
				<strong className="tech">Javascript</strong>
        <div class="progress">
          <div class="bar" style={{ width:"80%"}}>
            <p class="percent">80%</p>
          </div>
        </div>
				<strong className="tech">Django</strong>
        <div class="progress">
          <div class="bar" style={{ width:"75%"}}>
            <p class="percent">75%</p>
          </div>
        </div>
				<strong className="tech">React JS</strong>
        <div class="progress">
          <div class="bar" style={{ width:"75%"}}>
            <p class="percent">75%</p>
          </div>
        </div>
				<strong className="tech">Node JS</strong>
        <div class="progress">
          <div class="bar" style={{ width:"60%"}}>
            <p class="percent">60%</p>
          </div>
        </div>
				<strong className="tech">Deep Learning</strong>
        <div class="progress">
          <div class="bar" style={{ width:"60%"}}>
            <p class="percent">60%</p>
          </div>
        </div>
				<strong className="tech">Machine Learning</strong>
        <div class="progress">
          <div class="bar" style={{ width:"60%"}}>
            <p class="percent">60%</p>
          </div>
        </div>
				<strong className="tech">HTML5 and CSS</strong>
        <div class="progress">
          <div class="bar" style={{ width:"85%"}}>
            <p class="percent">85%</p>
          </div>
        </div>
				<strong className="tech">C</strong>
        <div class="progress">
          <div class="bar" style={{ width:"70%"}}>
            <p class="percent">70%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
