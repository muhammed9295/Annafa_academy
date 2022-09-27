import React from "react";
import PageHeader from "../components/PageHeader";
import SubscribeNewsletter from "../components/SubscribeNewsletter";
import KeyFeatures from "../components/KeyFeatures";
import Link from "next/link";
import Head from "next/head";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta
          name="keywords"
          content="islamic online course, e-learning, islamic education, hifdh course, tajweed course, madrasah, online arabic course"
        />                
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
        <PageHeader title="About Us" />
        {/*about-us-area start*/}
        <section className="about-us-area pt-150 pb-120 pt-md-100 pb-md-70 pt-xs-100 pb-xs-70">
          <div className="container">
            <div className="row align-items-center mb-120">
              <div className="col-lg-7">
                <div className="about__img__box mb-60">
                <picture>
                  <img
                    className="about-main-thumb about-img-1 ml-120"
                    src="img/about/about-01.png"
                    alt="about-img"
                  /></picture>
                  <picture>
                  <img
                    className="about-img about-img-2 about_01"
                    src="img/about/about-02.png"
                    alt="about-img"
                  /></picture>
                  <picture>
                  <img
                    className="about-img about-img-2 about_02"
                    src="img/about/about-03.png"
                    alt="about-img"
                  /></picture>
                  <picture>
                  <img
                    className="about-img about_03"
                    src="img/slider/earth-bg.svg"
                    alt="about-img"
                  /></picture>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about-wrapper">
                  <div className="section-title section-title-4 mb-60">
                    <h3 className=" mb-25 text-center">About Us</h3>

                    <p className="mb-20 text-justify">
                      An-Nafa Academy is an online learning hub for people of
                      all age groups who wish to seek authentic knowledge of the
                      Deen from the comfort of their homes.
                    </p>
                    <p className="text-justify">
                      In order to make this obligation easy and accessible to
                      our brothers & sisters around the globe this Academy has
                      been formed. Alhamdulillah, We at An Nafa Academy tread
                      the path of salaf us saliheen and are based on authentic
                      Manhaj of the Ahle Sunnah wa Jama-a while imparting
                      knowledge through Quran and authentic books of hadiths
                      and teachings of the first three best generations as
                      mentioned in the hadith
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*about-us-area end*/}

        {/*key-features start*/}
        <KeyFeatures />
        {/*key-features end*/}

        {/*about-section-wrapper start*/}
        <div className="about-section-wrapper pos-rel gradient-bg">
          <div className="what-blur-shape-one" />
          <div className="what-blur-shape-two" />
          {/*Our aim and vision start*/}
          <section className="what-looking-for pt-145 pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="section-title section-title-4 mb-60">
                    <h2 className="mb-25">Our Aim & Motto</h2>

                    <p className="text-justify">
                      Calling the ummah towards Tawheed is our priority. With
                      our motto of <strong>Nourishing the Souls</strong>, we aim to convey true
                      message of Allah that nourishes the souls of the believer
                      just as the food nourishes the body. Its our sincere
                      efforts and aim to nurture the minds of little ones
                      through the best of islamic knowledge that will make them
                      kno their Rabb and help them inculcate good islamic
                      morals.
                    </p>
                  </div>
                  <div className="section-title section-title-4 text-center mb-55">
                    <h2 className=" mb-25">Our Vision</h2>
                    <p className="mb-60 text-justify">
                      We at An-Nafa strongly believe in achieving our aims &
                      motto and working towards the betterment of our brothers &
                      sisters in Deen. To fulfill this, the academy has lined up
                      various courses for the kids, youths and adults in the
                      upcoming months ان شاء الله which includes Arabic,
                      Aqeedah, Tajweed, Hifdh and similar courses. As more and
                      more Muslims today seek online learning opportunities,
                      its our sincere efforts to bring the best of authentic
                      knowledge at your fingertips. Seekers of knowledge can now
                      learn from homes at their own Convenience and benefit from
                      our available courses.
                    </p>
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
                    <h3>Do you want to learn here?</h3>
                    <p>
                      We believe that every child must learn about Allah & his
                      deen right from his childhood, so that he grows to be a
                      good practicing muslim. To make this possible An-nafa
                      Academy presents you our Online Evening Madrasah for kids.
                      Stop thinking! Start learning.
                    </p>
                    <Link href="/enroll-form">
                      <a className="theme_btn border_btn active">
                        Register Now
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*our aim and visions end*/}
        </div>
        {/*about-section-wrapper start*/}
        <SubscribeNewsletter />
      </main>
    </>
  );
}
