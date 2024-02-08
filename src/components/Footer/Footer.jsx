import { Component } from "react";
import "./Footer.css";
import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css'

export default class Footer extends Component {
  state = {};

  render() {
    return (
      <>
        <section id="footer">
          <div className=" m-auto container row ">
            <div className="col-md-4">
              <h3>LOCATION</h3>
              <p> 2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
              <h3>AROUND THE WEB</h3>
              <ul className=" list-unstyled d-flex justify-content-center w-75 gap-3 align-items-center">
                <li className="">
                  <i class="fa-brands fa-facebook"></i>
                </li>
                <li>
                  <i class="  fa-brands fa-twitter"></i>{" "}
                </li>
                <li>
                  <i class="fa-brands fa-pinterest"></i>
                </li>
                <li>
                  <i class="fa-brands fa-linkedin"></i>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}
