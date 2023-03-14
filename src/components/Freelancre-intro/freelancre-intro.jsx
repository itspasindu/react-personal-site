/* eslint-disable @next/next/no-img-element */
import React from "react";
import Typewriter from "typewriter-effect";

const FreelancreIntro = () => {
  return (
    <header className="freelancre valign">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="img">
              <img src="/img/myphoto.png" alt="" />
            </div>
          </div>
          <div className="col-lg-8 valign">
            <div className="cont">
              <h1 className="cd-headline clip">
                Hello, My name is pasindu<br></br> iam &nbsp;
                <span
                  style={{ fontSize: "35px", lineHeight: "49px" }}
                  className="cd-words-wrapper"
                >
                  <Typewriter
                    options={{
                      wrapperClassName: "color-font fw-600",
                      strings: [
                        "Front-end Developer",
                        "Ui/Ux Designer",
                        "WordPress ",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                    loop={true}
                    onInit={(typewriter) => {
                      typewriter;
                    }}
                  />
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className="states">
          <div className="container">
            <ul className="flex">
              <li className="flex">
                <div className="numb valign">
                  <h3>2+</h3>
                </div>
                <div className="text valign">
                  <p>
                    Years <br /> Of Experience
                  </p>
                </div>
              </li>

              <li className="flex">
                <div className="numb valign">
                  <h3>27</h3>
                </div>
                <div className="text valign">
                  <p>
                    Projects Completed <br /> In 9 Countries
                  </p>
                </div>
              </li>

              <li className="mail-us">
                <a href="mailto:admin@xline.lk?subject=Freelancing Web Projects">
                  <div className="flex">
                    <div className="text valign">
                      <div className="full-width">
                        <p>Get In Touch</p>
                        <h6>admin@xline.lk</h6>
                      </div>
                    </div>
                    <div className="mail-icon">
                      <div className="icon-box">
                        <span className="icon color-font pe-7s-mail"></span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default FreelancreIntro;
