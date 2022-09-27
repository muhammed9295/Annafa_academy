import React from "react";
import PageHeader from "../components/PageHeader";
import SubscribeNewsletter from "../components/SubscribeNewsletter";
import KeyFeatures from "../components/KeyFeatures";
import Link from "next/link";
import Head from "next/head";

export default function AllCourses() {
  return (
    <>
      <Head>
      <title>All courses</title>
      <script src="js/vendor/modernizr-3.5.0.min.js" async/>
        <script src="js/vendor/jquery-2.2.4.min.js" async/>
        <script src="js/popper.min.js" async/>
        <script src="js/bootstrap.min.js" async/>

        <script src="js/owl.carousel.min.js" async/>
        <script src="js/isotope.pkgd.min.js" async/>
        <script src="js/slick.min.js" async/>
        <script src="js/metisMenu.min.js" async/>
        <script src="js/jquery.nice-select.js" async/>
        <script src="js/ajax-form.js" async/>
        <script src="js/wow.min.js" async/>
        <script src="js/jquery.counterup.min.js" async/>
        <script src="js/waypoints.min.js" async/>
        <script src="js/jquery.scrollUp.min.js" async/>
        <script src="js/imagesloaded.pkgd.min.js" async/>
        <script src="js/jquery.magnific-popup.min.js" async/>
        <script src="js/jquery.easypiechart.js" async/>
        <script src="js/plugins.js" async/>
        <script src="js/main.js" async/>
      </Head>

      
      <main className="pt-180 pb-100 pb-xs-50">
        {/*page-title-area start*/}
        <PageHeader title="All Courses" />
        {/*page-title-area end*/}

        {/*key-features start*/}
        <KeyFeatures />
        {/*key-features end*/}

        {/* feature-course start */}
        <section className="feature-course pt-60 pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section-title text-center mb-30">
                  <h2>Our Courses</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-12 text-center">
                {/* <div className="portfolio-menu mb-60">
            <button className="gf_btn active" data-filter="*">All</button>
            <button className="gf_btn" data-filter=".cat1">Career</button>
            <button className="gf_btn" data-filter=".cat2">Development</button>
            <button className="gf_btn" data-filter=".cat3">Business</button>
            <button className="gf_btn" data-filter=".cat4">science</button>
            <button className="gf_btn" data-filter=".cat5">Design</button>
          </div> */}
              </div>
            </div>
            <div className="grid row">
              <div className="col-lg-4 col-md-6 grid-item cat2 cat3">
                <div className="z-gallery mb-30">
                  <div className="z-gallery__thumb mb-20">
                    <Link href="/qaida">
                      <a>
                      <picture>
                        <img
                          className="img-fluid"
                          src="img/course/arabic.png"
                          alt="qaida"
                        /></picture>
                      </a>
                    </Link>

                    {/* <div className="feedback-tag">4.8(256)</div> */}
                    {/* <div className="heart-icon"><i className="fas fa-heart" /></div> */}
                  </div>
                  <div className="z-gallery__content">
                    {/* <div className="course__tag mb-15">
                <span>Science</span>
                <span>Lab</span>
                <a className="f-right" href="instructor-details.html"><img src="img/course/in1.png" alt /></a>
              </div> */}
                    <h4 className="sub-title mb-20">
                      <Link href="/qaida">
                        <a>Qaida</a>
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 grid-item cat1 cat3 cat4">
                <div className="z-gallery mb-30">
                  <div className="z-gallery__thumb mb-20">
                    <Link href="/arabic">
                      <a>
                      <picture>
                        <img
                          className="img-fluid"
                          src="img/course/arabic-1.png"
                          alt="arabic"
                        /></picture>
                      </a>
                    </Link>
                    {/* <div className="heart-icon"><i className="fas fa-heart" /></div> */}
                  </div>
                  <div className="z-gallery__content">
                    {/* <div className="course__tag mb-15">
                <span>Science</span>
                <span>Lab</span>
                <a className="f-right" href="instructor-details.html"><img src="img/course/in2.png" alt /></a>
              </div> */}
                    <h4 className="sub-title mb-20">
                      <Link href="/arabic">
                        <a>Arabic</a>
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 grid-item cat2 cat1 cat5">
                <div className="z-gallery mb-30">
                  <div className="z-gallery__thumb mb-20">
                    <Link href="/hifdh">
                      <a>
                      <picture>
                        <img
                          className="img-fluid"
                          src="img/course/quran.png"
                          alt="hifdh"
                        /></picture>
                      </a>
                    </Link>

                    {/* <div className="heart-icon"><i className="fas fa-heart" /></div> */}
                  </div>
                  <div className="z-gallery__content">
                    {/* <div className="course__tag mb-15">
                <span>Science</span>
                <span>Lab</span>
                <a className="f-right" href="instructor-details.html"><img src="img/course/in3.png" alt /></a>
              </div> */}
                    <h4 className="sub-title mb-20">
                      <Link href="/hifdh">
                        <a>Hifdh</a>
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 grid-item cat2 cat3">
                <div className="z-gallery mb-30">
                  <div className="z-gallery__thumb mb-20">
                    <Link href="/tawheed">
                      <a>
                      <picture>
                        <img
                          className="img-fluid"
                          src="img/course/tawheed.png"
                          alt="tawheed"
                        /></picture>
                      </a>
                    </Link>

                    {/* <div className="heart-icon"><i className="fas fa-heart" /></div> */}
                  </div>
                  <div className="z-gallery__content">
                    {/* <div className="course__tag mb-15">
                <span>Science</span>
                <span>Lab</span>
                <a className="f-right" href="instructor-details.html"><img src="img/course/in4.png" alt /></a>
              </div> */}
                    <h4 className="sub-title mb-20">
                      <Link href="/tawheed">
                        <a>Tawheed</a>
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 grid-item cat5 cat4">
                <div className="z-gallery mb-30">
                  <div className="z-gallery__thumb mb-20">
                    <Link href="/quranic-stories">
                      <a>
                      <picture>
                        <img
                          className="img-fluid"
                          src="img/course/quranic-stories.png"
                          alt="quranic-stories"
                        /></picture>
                      </a>
                    </Link>

                    {/* <div className="heart-icon"><i className="fas fa-heart" /></div> */}
                  </div>
                  <div className="z-gallery__content">
                    {/* <div className="course__tag mb-15">
                <span>Science</span>
                <span>Lab</span>
                <a className="f-right" href="instructor-details.html"><img src="img/course/in5.png" alt /></a>
              </div> */}
                    <h4 className="sub-title mb-20">
                      <Link href="/quranic-stories">
                        <a>Quranic Stories</a>
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 grid-item cat3 cat1">
                <div className="z-gallery mb-30">
                  <div className="z-gallery__thumb mb-20">
                    <Link href="/dhikrs">
                      <a>
                      <picture>
                        <img
                          className="img-fluid"
                          src="img/course/dhikr.png"
                          alt="dhikr"
                        /></picture>
                      </a>
                    </Link>

                    {/* <div className="heart-icon"><i className="fas fa-heart" /></div> */}
                  </div>
                  <div className="z-gallery__content">
                    {/* <div className="course__tag mb-15">
                <span>Science</span>
                <span>Lab</span>
                <a className="f-right" href="instructor-details.html"><img src="img/course/in6.png" alt /></a>
              </div> */}
                    <h4 className="sub-title mb-20">
                      <Link href="/dhikrs">
                        <a>Dhikrs</a>
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row">
        <div className="col-xxl-12 mt-20 text-center mb-20">
          <a href="courses.html" className="theme_btn">Explore More</a>
        </div>
      </div> */}
          </div>
        </section>
        {/* feature-course end */}
        {/*what-loking-for start*/}
        <section className="what-looking-for pos-rel gradient-bg pt-145 pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80">
          <div className="what-blur-shape-one" />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center mb-55">
                  <h2>Learning made simple now</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="what-box text-center mb-3">
                  <div className="what-box__icon mb-30">
                  <picture>
                    <img src="img/icon/graduate.svg" alt="svg" /></picture>
                  </div>
                  <h3>Do you want to Enroll your child here?</h3>
                  <p>
                    We believe that every child must learn about Allah & his
                    deen right from his childhood, so that he grows to be a good
                    practicing muslim. To make this possible An-nafa Academy
                    presents you our Online Evening Madrasah for kids. Stop
                    thinking! Start learning.
                  </p>

                  <Link href="/enrollment-form">
                    <a className="theme_btn border_btn active">Register Now</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*what-loking-for end*/}
        {/* subscribe-area start */}
        <SubscribeNewsletter />
        {/* subscribe-area end */}
      </main>
    </>
  );
}
