import { Component } from "react";
import './../../index'
import "./About.css";
import "./../title.css";


export default class About extends Component {
  state = {};

  render() {
    return (
      <>
        <section id="#about">
          <div className="m-auto vh-100 container d-flex flex-column justify-content-evenly">
          <h1 className="header">ABOUT COMPONENT</h1>

            <div className="row justify-content-evenly align-items-center">
              <p className="col-md-5">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
              <p className="col-md-5">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            
            </div>
          </div>
        </section>
      </>
    );
  }
}
