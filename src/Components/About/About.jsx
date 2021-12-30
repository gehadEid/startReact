import React from "react";
import style from "./About.module.css";

export default function About() {
  return (
    <div >
      <section className={`${style.about}`}>
        <div className="py-5 container text-white">
          <div>
            <div className="text-center fw-bold">
              <h2>ABOUT</h2>
            </div>
            <div className={`text-center mb-5 ${style.icon}`}>
              <i className="fas fa-star fs-2"></i>
            </div>
          </div>

          <div
            className={`row justify-content-center py-5 ${style.capAbout}`}
          >
            <p className="col-md-4">
              Freelancer is a free bootstrap theme created
              by Start Bootstrap.
              The download includes the complete source
              files including HTML, CSS, and
              JavaScript as well as optional SASS
              stylesheets for easy customization.
            </p>
            <p className="col-md-4">
              You can create your own custom
              avatar for the masthead, change the
              icon in the dividers, and add your
              email address to the contact form to
              make it fully functional!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
