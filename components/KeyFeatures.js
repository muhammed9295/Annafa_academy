import React from "react";
import Script from "next/script";

export default function KeyFeatures() {
  return (
    <>
      <section className="great-deal-area  mt-60 ">
        <div className="container">
          <div className="row justify-content-lg-center justify-content-start">
            <div className="col-xl-3 col-lg-8">
              <div className="deal-box mb-30 text-center text-xl-start">
                <h2 className="mb-20">
                  <b>Key</b> Features
                </h2>
                <p>Here is why you decide to choose An-Nafa Academy.</p>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="deal-active owl-carousel mb-30">
                <div className="single-item">
                  <div className="single-box s-box3 mb-30">
                    <div className="single-box__icon mb-25">
                      <picture>
                        <img src="img/icon/puzzle.svg" alt="live-classes" />
                      </picture>
                    </div>
                    <h4 className="sub-title mb-20">Learn from home</h4>
                    <p>
                      Classes will be conducted LIVE on the Zoom Application.
                      There will be active interaction between the teachers &
                      students.
                    </p>
                  </div>
                </div>
                <div className="single-item">
                  <div className="single-box s-box2 mb-30">
                    <div className="single-box__icon mb-25">
                      <picture>
                        <img
                          src="img/icon/manager.svg"
                          alt="experience-teachers"
                        />
                      </picture>
                    </div>
                    <h4 className="sub-title mb-20">Experienced Teachers</h4>
                    <p>
                      An-Nafa Academy take cares in hiring faculties in regards
                      of Aqeedah and Manhaj.
                    </p>
                  </div>
                </div>
                <div className="single-item">
                  <div className="single-box s-box3 mb-30">
                    <div className="single-box__icon mb-25">
                      <picture>
                        <img
                          src="img/icon/notepad.svg"
                          alt="authentic-sources"
                        />
                      </picture>
                    </div>
                    <h4 className="sub-title mb-20">
                      Learn from authentic source
                    </h4>
                    <p>
                      An- Nafa treads the path of Salaf Us Saliheen and are
                      based on the authentic Manhaj of Ahle Sunnah wa Jama-a
                    </p>
                  </div>
                </div>
                <div className="single-item">
                  <div className="single-box s-box2 mb-30">
                    <div className="single-box__icon mb-25">
                      <picture>
                        <img
                          src="img/icon/puzzle.svg"
                          alt="good-student-teacher-ratio"
                        />
                      </picture>
                    </div>
                    <h4 className="sub-title mb-20">
                      Good Student-Teacher ratio
                    </h4>
                    <p>
                      The Academy strictly adheres to a good student - teacher
                      ratio so as to ensure equal attention to each child.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Script src="js/vendor/modernizr-3.5.0.min.js"></Script>
      <Script src="js/vendor/jquery-2.2.4.min.js"></Script>
      <Script src="js/popper.min.js"></Script>
      <Script src="js/bootstrap.min.js"></Script>
      <Script src="js/owl.carousel.min.js"></Script>
      <Script src="js/isotope.pkgd.min.js"></Script>
      <Script src="js/slick.min.js"></Script>
      <Script src="js/metisMenu.min.js"></Script>
      <Script src="js/jquery.nice-select.js"></Script>
      <Script src="js/ajax-form.js"></Script>
      <Script src="js/wow.min.js"></Script>
      <Script src="js/jquery.counterup.min.js"></Script>
      <Script src="js/waypoints.min.js"></Script>
      <Script src="js/jquery.scrollUp.min.js"></Script>
      <Script src="js/imagesloaded.pkgd.min.js"></Script>
      <Script src="js/jquery.magnific-popup.min.js"></Script>
      <Script src="js/jquery.easypiechart.js"></Script>
      <Script src="js/plugins.js"></Script>
      <Script src="js/main.js"></Script>
    </>
  );
}
