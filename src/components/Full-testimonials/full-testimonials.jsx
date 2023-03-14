/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class FullTestimonials extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="arrows">
        <div className="container">
          <div
            onClick={() => this.slider.slickNext()}
            className="next cursor-pointer"
          >
            <span className="pe-7s-angle-right"></span>
          </div>
          <div
            onClick={() => this.slider.slickPrev()}
            className="prev cursor-pointer"
          >
            <span className="pe-7s-angle-left"></span>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <section
        className={`testimonials ${this.props.withIMG
          ? "section-padding bg-img"
          : this.props.withCOLOR
            ? "section-padding back-color"
            : this.props.noPadding ? ""
              : "section-padding"
          } ${this.props.classText ? this.props.classText : ""}`}
        style={{
          backgroundImage: `${this.props.withIMG ? "url(/img/testim-img.jpg)" : "none"
            }`,
        }}
      >
        {this.props.showHead && (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head  text-center">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Testimonials
                  </h6>
                  <h3 className="wow color-font">
                    We love our clients from all over the world.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container-fluid position-re">
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-lg-12">
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: false,
                  infinite: true,
                  arrows: true,
                  centerMode: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 3,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                  ],
                }}
              >
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/team-1.jpg" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Alex Regelman
                        </h6>
                        <span className="author-details">
                          Co-founder, Cartfull
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    "I had an amazing experience working with this web development team. They were very professional, responsive, and delivered a high-quality website that exceeded my expectations. I highly recommend them!"
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/team-2.jpg" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Jimmy Peterson
                        </h6>
                        <span className="author-details">
                          founder, EasyGo
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    "I am extremely satisfied with the website that this team built for my business. They took the time to understand my needs and goals, and created a custom solution that is user-friendly and visually appealing. Their attention to detail and commitment to excellence is impressive."
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/team-3.jpg" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Carey Clark
                        </h6>
                        <span className="author-details">
                          CEO, Daraflex
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    I would highly recommend Vie Digital. I worked with the team
                    on an animation for our ‘Click &amp; Collect’ service.
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/team-4.jpg" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Patrick Cate
                        </h6>
                        <span className="author-details">
                          Co-founder, Diablo
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    "I was very impressed with the level of expertise and creativity that this web development team brought to the table. They listened to my ideas and provided valuable input to ensure that the website was optimized for SEO and user engagement. I would definitely work with them again in the future."
                  </p>
                </div>
              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
      </section>
    );
  }
}

export default FullTestimonials;
