import React from "react";
import PageHeader from "../components/PageHeader";
import SubscribeNewsletter from "../components/SubscribeNewsletter";
import Link from "next/link";
import Head from "next/head";

export default function Arabic() {
  return (
    <>
      <Head>
      <title>Arabic</title>
        <script src="js/vendor/modernizr-3.5.0.min.js" async />
        <script src="js/vendor/jquery-2.2.4.min.js" async />
        <script src="js/popper.min.js" async />
        <script src="js/bootstrap.min.js" async />

        <script src="js/owl.carousel.min.js" async />
        <script src="js/isotope.pkgd.min.js" async />
        <script src="js/slick.min.js" async />
        <script src="js/metisMenu.min.js" async />
        <script src="js/jquery.nice-select.js" async />
        <script src="js/ajax-form.js" async />
        <script src="js/wow.min.js" async />
        <script src="js/jquery.counterup.min.js" async />
        <script src="js/waypoints.min.js" async />
        <script src="js/jquery.scrollUp.min.js" async />
        <script src="js/imagesloaded.pkgd.min.js" async />
        <script src="js/jquery.magnific-popup.min.js" async />
        <script src="js/jquery.easypiechart.js" async />
        <script src="js/plugins.js" async />
        <script src="js/main.js" async />
      </Head>
      <main className="pt-180 pb-100 pb-xs-50">
        {/*page-title-area start*/}
        <PageHeader title="Arabic" />
        {/*page-title-area end*/}
        {/*course-details-area start*/}
        <section className="course-details-area border-bot-2 pt-150 pb-50 pt-md-100 pb-md-50 pt-xs-100 pb-xs-50">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12 col-xl-12">
                <div className="courses-details-wrapper mb-30">
                  <div className="course-details-img mb-30">
                  <picture>
                    <img
                      className="course-img"
                      src="img/course/details/deen-book.png"
                      alt="arabic"
                    /></picture>
                  </div>
                </div>
              </div>
            </div>
            <div className="row course-description">
              <div className="col-xl-10 col-lg-10">
                <div className="project-details mb-65">
                  <h2 className="courses-title mb-30 text-center">Arabic</h2>
                  <p className="mb-45 text-justify">
                    Arabic is the language of the noble Quran, the language
                    which Allah favoured over all other languages and chose it
                    to convey His message to Prophet (ﷺ). In the beginning stage
                    the child will learn the Arabic Letters and Numbers. Arabic
                    writing will also be included for beginners. Arabic
                    vocabulary will be included in the next stages.
                  </p>

                  <h5 className="mb-25">
                    <span>Compiled by:</span> An-Nafa Academy
                  </h5>
                  <div className="date-lang">
                    <span>
                      <b>Language :</b> Arabic
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*course-details-area end*/}
        {/* feature-course start */}
        <section className="feature-course pb-130 pt-95 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80">
          <div className="container">
            <h2 className="courses-title mb-35">Recent Courses</h2>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="z-gallery mb-30">
                  <div className="z-gallery__thumb mb-20">
                    <Link href="/dhikrs">
                      <a><picture>
                        <img
                          className="img-fluid other-course-img"
                          src="img/course/details/deen-book.png"
                          alt="dhikrs"
                        /></picture>
                      </a>
                    </Link>
                  </div>
                  <div className="z-gallery__content">
                    <Link href="/dhikrs">
                      <a>
                        <h4 className="sub-title text-center mb-20">Dhikrs</h4>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="z-gallery mb-30">
                  <div className="z-gallery__thumb mb-20">
                    <Link href="/tawheed">
                      <a><picture>
                        <img
                          className="img-fluid other-course-img"
                          src="img/course/details/deen-book.png"
                          alt="tawheed"
                        /></picture>
                      </a>
                    </Link>
                  </div>
                  <div className="z-gallery__content">
                    <Link href="/tawheed">
                      <a>
                        <h4 className="sub-title text-center mb-20">Tawheed</h4>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="z-gallery mb-30">
                  <div className="z-gallery__thumb mb-20">
                    <Link href="/hifdh">
                      <a>
                      <picture>
                        <img
                          className="img-fluid other-course-img"
                          src="img/course/details/quran.png"
                          alt="hifdh"
                        /></picture>
                      </a>
                    </Link>
                  </div>
                  <div className="z-gallery__content">
                    <Link href="/hifdh">
                      <a>
                        <h4 className="sub-title text-center mb-20">Hifdh</h4>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
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
                  <h2>What you Looking For?</h2>
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
                  <Link href="/enroll-form">
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
