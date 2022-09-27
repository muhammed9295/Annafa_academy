import Head from "next/head";
import Link from "next/link";
import SubscribeNewsletter from "../components/SubscribeNewsletter";
import styles from "../styles/Home.module.css";
import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* hero-section-starts */}
      <section className="slider-area slider-gradient-bg pt-180 pb-100 pb-xs-50">
        <picture>
          <img
            className="sl-shape shape_01"
            src="img/icon/01.svg"
            alt="shape-01"
          />
        </picture>
        <picture>
          <img
            className="sl-shape shape_02"
            src="img/icon/02.svg"
            alt="shape-02"
          />
        </picture>
        <picture>
          <img
            className="sl-shape shape_03"
            src="img/icon/03.svg"
            alt="shape-03"
          />
        </picture>
        <picture>
          <img
            className="sl-shape shape_04"
            src="img/icon/04.svg"
            alt="shape-04"
          />
        </picture>
        <picture>
          <img
            className="sl-shape shape_05"
            src="img/icon/05.svg"
            alt="shape-05"
          />
        </picture>
        <picture>
          <img
            className="sl-shape shape_06"
            src="img/icon/06.svg"
            alt="shape-06"
          />
        </picture>
        <div className="main-slider">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="slider__content slider__content__02 pt-120 text-center">
                  <h1
                    className="main-title mb-40 wow fadeInUp2 animated"
                    data-wow-delay=".2s"
                  >
                    Welcome, Seeker of Knowledge
                  </h1>
                  <h5
                    className="mb-35 wow fadeInUp2 animated"
                    data-wow-delay=".3s"
                  >
                    The Messenger of Allah ﷺ said:
                    <br />{" "}
                    <strong>
                    &quot;Whoever travels a path in search of knowledge, Allah will
                      make easy for him a path to Paradise……&quot;
                    </strong>
                    <br />
                    <i className="hadith">- Sahih Muslim 2699</i>
                  </h5>
                  {/* <ul className="search__area d-md-inline-flex align-items-center justify-content-between mb-30 wow fadeInUp animated" data-delay="1.5s">
              <li>
                <div className="widget__search">
                  <form className="input-form" action="#">
                    <input type="text" placeholder="Find Courses" />
                  </form>
                  <button className="search-icon"><i className="far fa-search" /></button>
                </div>
              </li>
              <li>
                <div className="widget__select">
                  <select name="select-cat" id="select">
                    <option value>Categories</option>
                    <option value>Class One</option>
                    <option value>Class Two</option>
                    <option value>Class Three</option>
                    <option value>Class Four</option>
                    <option value>Class Five</option>
                  </select>
                </div>
              </li>
              <li>
                <button className="theme_btn search_btn ml-35">Search Now</button>
              </li>
            </ul> */}
                  <p className="highlight-text">
                    {" "}
                    Online learning platform for Young &amp; Old
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="slider-img-box-two">
                  <div className="chose-img-wrapper mb-50 pos-rel d-flex justify-content-center align-items-center">
                    {/* <img className="shape-avatar-bg" src="img/slider/avatar-bg.png" alt="avatar-bg" /> */}
                    {/* <div className="coures-member">
                <h5>Total Students</h5>
                <img className="choses chose_01" src="img/chose/01.png" alt="Chose-img" />
                <img className="choses chose_02" src="img/chose/02.png" alt="Chose-img" />
                <img className="choses chose_03" src="img/chose/03.png" alt="Chose-img" />
                <img className="choses chose_04" src="img/chose/04.png" alt="Chose-img" />
                <span>25k+</span>
              </div> */}
                    {/* <div className="feature tag_01"><span><img src="img/icon/shield-check.svg" alt="sheild-check" /></span> Safe &amp; Secured</div> */}
                    {/* <div className="feature tag_02"><span><img src="img/icon/catalog.svg" alt="catalog" /></span> 120+ Catalog</div> */}
                    {/* <div className="feature tag_03"><span><i className="fal fa-check" /></span> Quality Education</div> */}
                    {/* <div className="video-wrapper">
                <a href="https://www.youtube.com/watch?v=7omGYwdcS04" className="popup-video"><i className="fas fa-play" /></a>
              </div> */}
                    <picture>
                      <img
                        className="chose_05 wow fadeInRight animated hero-img "
                        data-delay="1.5s"
                        src="img/slider/hero.png"
                        alt="Chose-img"
                      />
                    </picture>
                    <picture>
                      <img
                        className="chose_06 wow fadeInRight animated"
                        data-delay="1.5s"
                        src="img/icon/dot-plane.svg"
                        alt="Chose-img"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero-section-ends */}

      {/* categories-section-starts */}
      <section className="course-categories pt-150 pb-140 pt-md-95 pb-md-90 pt-xs-95 pb-xs-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title section-title-2 text-center mb-50">
                <h5 className="bottom-line left-line mb-25 pl-40 pr-40">
                  Browse Categories
                </h5>
                <h2 className="mb-20">Explore our Curriculum</h2>
                <p>
                  Currently, An-Nafa Academy runs an online evening madrasah for
                  school going kids aged 4 - 10 years.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <ul className="submenu mega-menu__sub-menu-box course__cat__list">
                <li>
                  <Link href="/qaida">
                    <a>
                      <span>
                        <picture>
                          <img
                            className="icon-01"
                            src="img/icon/arabic.png"
                            alt="arabic"
                          />
                        </picture>
                        <picture>
                          <img
                            className="icon-02"
                            src="img/icon/arabic-white.png"
                            alt="arabic"
                          />
                        </picture>
                      </span>{" "}
                      Qaida
                      <span className="arrow-box">
                        <picture>
                          <img
                            className="arrows-icon"
                            src="img/icon/arrow-right.svg"
                            alt="arrow-right"
                          />
                        </picture>
                        <picture>
                          <img
                            className="arrows-icon-white"
                            src="img/icon/arrow-right-white.svg"
                            alt="arrow-right"
                          />
                        </picture>
                      </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/arabic">
                    <a>
                      <span>
                        <picture>
                          <img
                            className="icon-01"
                            src="img/icon/arabic.png"
                            alt="arabic"
                          />
                        </picture>
                        <picture>
                          <img
                            className="icon-02"
                            src="img/icon/arabic-white.png"
                            alt="arabic"
                          />
                        </picture>
                      </span>{" "}
                      Arabic{" "}
                      <span className="arrow-box">
                        <picture>
                          <img
                            className="arrows-icon"
                            src="img/icon/arrow-right.svg"
                            alt="arrow-right"
                          />
                        </picture>
                        <picture>
                          <img
                            className="arrows-icon-white"
                            src="img/icon/arrow-right-white.svg"
                            alt="arrow-right"
                          />
                        </picture>
                      </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/hifdh">
                    <a>
                      <span>
                        <picture>
                          <img
                            className="icon-01"
                            src="img/icon/quran.png"
                            alt="hifdh"
                          />
                        </picture>
                        <picture>
                          <img
                            className="icon-02"
                            src="img/icon/quran-white.png"
                            alt="hifdh"
                          />
                        </picture>
                      </span>{" "}
                      Hifdh{" "}
                      <span className="arrow-box">
                        <picture>
                          <img
                            className="arrows-icon"
                            src="img/icon/arrow-right.svg"
                            alt="arrow-right"
                          />
                        </picture>
                        <picture>
                          <img
                            className="arrows-icon-white"
                            src="img/icon/arrow-right-white.svg"
                            alt="arrow-right"
                          />
                        </picture>
                      </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/tawheed">
                    <a>
                      <span>
                        <picture>
                          <img
                            className="icon-01"
                            src="img/icon/tawheed.png"
                            alt="tawheed"
                          />
                        </picture>
                        <picture>
                          <img
                            className="icon-02"
                            src="img/icon/tawheed-white.png"
                            alt="tawheed"
                          />
                        </picture>
                      </span>{" "}
                      Tawheed{" "}
                      <span className="arrow-box">
                        <picture>
                          <img
                            className="arrows-icon"
                            src="img/icon/arrow-right.svg"
                            alt="arrow-right"
                          />
                        </picture>
                        <picture>
                          <img
                            className="arrows-icon-white"
                            src="img/icon/arrow-right-white.svg"
                            alt="arrow-right"
                          />
                        </picture>
                      </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/quranic-stories">
                    <a>
                      <span>
                        <picture>
                          <img
                            className="icon-01"
                            src="img/icon/quran-stories.png"
                            alt="quran-stories"
                          />
                        </picture>
                        <picture>
                          <img
                            className="icon-02"
                            src="img/icon/quran-stories-white.png"
                            alt="quran-stories"
                          />
                        </picture>
                      </span>{" "}
                      Quranic Stories{" "}
                      <span className="arrow-box">
                        <picture>
                          <img
                            className="arrows-icon"
                            src="img/icon/arrow-right.svg"
                            alt="arrow-right"
                          />
                        </picture>
                        <picture>
                          <img
                            className="arrows-icon-white"
                            src="img/icon/arrow-right-white.svg"
                            alt="arrow-right"
                          />
                        </picture>
                      </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/dhikrs">
                    <a>
                      <span>
                        <picture>
                          <img
                            className="icon-01"
                            src="img/icon/counting.png"
                            alt="dhikrs"
                          />
                        </picture>
                        <picture>
                          <img
                            className="icon-02"
                            src="img/icon/counting-white.png"
                            alt="dhikrs"
                          />
                        </picture>
                      </span>{" "}
                      Dhikrs{" "}
                      <span className="arrow-box">
                        <picture>
                          <img
                            className="arrows-icon"
                            src="img/icon/arrow-right.svg"
                            alt="arrow-right"
                          />
                        </picture>
                        <picture>
                          <img
                            className="arrows-icon-white"
                            src="img/icon/arrow-right-white.svg"
                            alt="arrow-right"
                          />
                        </picture>
                      </span>
                    </a>
                  </Link>
                </li>
                {/* <li><a href="courses.html">
              <span>
                <img className="icon-01" src="img/icon/ambulance.svg" alt />
                <img className="icon-02" src="img/icon/ambulance-02.svg" alt />
              </span> MBBS <span className="arrow-box">
                <img className="arrows-icon" src="img/icon/arrow-right.svg" alt="arrow-right" />
                <img className="arrows-icon-white" src="img/icon/arrow-right-white.svg" alt="arrow-right" />
              </span></a></li>
          <li><a href="courses.html">
              <span>
                <img className="icon-01" src="img/icon/3d.svg" alt />
                <img className="icon-02" src="img/icon/3d-02.svg" alt />
              </span> Technological <span className="arrow-box">
                <img className="arrows-icon" src="img/icon/arrow-right.svg" alt="arrow-right" />
                <img className="arrows-icon-white" src="img/icon/arrow-right-white.svg" alt="arrow-right" />
              </span></a></li> */}
              </ul>
            </div>
            <div className="col-xxl-12 text-center mt-40">
              <Link href="/all-courses">
                <a className="theme_btn">All Categories</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* categories-section-ends */}

      {/* FAQ-section-starts */}
      <section className="faq-area pos-rel gradient-bg pt-150 pb-120 pt-md-95 pb-md-90 pt-xs-95 pb-xs-90">
        <div className="faq-blur-bg" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-img-wrapper pos-rel mb-30">
                <picture>
                  <img className="faq_01" src="img/faq/faq.png" alt="faq" />
                </picture>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-que-list pl-75 mb-30">
                <div className="section-title section-title-2 mb-45">
                  <h5 className="bottom-line left-line mb-25 pl-40">
                    Frequently Ask Questions
                  </h5>
                  <h2 className="mb-25">Do you have questions?</h2>
                  <p>Find answers to your Frequently Asked Questions.</p>
                </div>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item mb-20">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What is your Manhaj or Methodology?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body black-color">
                        Alhamdulillah, We at An Nafa Academy tread the path of
                        Salaf-us-saliheen and are based on authentic Manhaj of
                        the Ahle Sunnah wa Jama&apos;a while imparting knowledge
                        through Qura&apos;n and authentic books of hadiths and
                        teachings of the Salaf-us-saliheen
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-20">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        How is this Course conducted?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body black-color">
                        Our courses are completely online through live
                        interactive classes on Zoom application. The links for
                        the classes are sent to the respective groups before
                        every class.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-20">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How much is your monthly fees?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body black-color">
                        Our monthly fees is INR 1000 only, and one time
                        registration fees of INR 100 only to be paid at the time
                        of enrollment.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-20">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        What are the class timings?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body black-color">
                        There will be two batches. First batch is from 4:30pm to
                        5:30pm IST and the Second batch is from 5:30pm to 6:30pm
                        IST.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq-btn pl-75 mt-50">
                <Link href="/contact">
                  <a className="theme_btn">Ask Question</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ-section-ends */}

      {/* blog-list-section-starts */}
      <section className="blog-area">
        <div className="blog-bg pl-100 pr-100 pt-150  pt-md-95 pb-md-70 pt-xs-95 pb-xs-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-6 col-xl-7 col-lg-8">
                <div className="section-title section-title-2 text-center mb-65">
                  <h5 className="bottom-line left-line mb-25 pl-40 pr-40">
                    Latest Blogs
                  </h5>
                  <h2 className="mb-25">Popular Articles and Blogs</h2>
                  <p>
                    To help you learn more about Islam, check out our popular
                    blogs.
                  </p>
                </div>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-lg-4 col-md-6">
                <div
                  className="z-blogs mb-30 wow fadeInUp2 animated"
                  data-wow-delay=".1s"
                >
                  <div className="z-blogs__thumb mb-25">
                    <Link href="/what-job-should-i-do">
                      <a>
                        <picture>
                          <img
                            src="img/blog/blog-1.png"
                            className="blog-main-img"
                            alt="what-job-should-i-do"
                          />
                        </picture>
                      </a>
                    </Link>
                  </div>
                  <div className="z-blogs__content z-blogs__content-02">
                    <h4 className="sub-title mb-15">
                      <Link href="/what-job-should-i-do">
                        <a>What job should I do?</a>
                      </Link>
                    </h4>
                    <p className="mb-20">
                      Seeking a sound career opportunity seems to be a nightmare
                      in today&apos;s era.The current scenario depicts job to be
                      merely...
                    </p>
                    <Link href="/what-job-should-i-do">
                      <a className="blog_btn">Read More</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="z-blogs mb-30 wow fadeInUp2 animated"
                  data-wow-delay=".2s"
                >
                  <div className="z-blogs__thumb mb-25">
                    <Link href="/are-my-sins-greater-than-allah's-mercy">
                      <a>
                        <picture>
                          <img
                            className="blog-main-img"
                            src="img/blog/praying.png"
                            alt="blog-img"
                          />
                        </picture>
                      </a>
                    </Link>
                  </div>
                  <div className="z-blogs__content z-blogs__content-02">
                    <h4 className="sub-title mb-15">
                      <Link href="/are-my-sins-greater-than-allah's-mercy">
                        <a>Are My Sins Greater Than Allah’s Mercy?</a>
                      </Link>
                    </h4>
                    <p className="mb-20">
                      Sinning is a natural attribute of man dating back to Adam
                      (AS), the first man created by Allah...
                    </p>

                    <Link href="/are-my-sins-greater-than-allah's-mercy">
                      <a className="blog_btn">Read More</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="z-blogs mb-30 wow fadeInUp2 animated"
                  data-wow-delay=".1s"
                >
                  <div className="z-blogs__thumb mb-25">
                    <Link href="/discovering-positivity">
                      <a>
                        <picture>
                          <img
                            className="blog-main-img"
                            src="img/blog/positivity.png"
                            alt="positivity"
                          />
                        </picture>
                      </a>
                    </Link>
                  </div>
                  <div className="z-blogs__content z-blogs__content-02">
                    <h4 className="sub-title mb-15">
                      <Link href="/discovering-positivity">
                        <a>Discovering positivity</a>
                      </Link>
                    </h4>
                    <p className="mb-20">
                      In the pursuit of knowledge, she walked in one day,
                      Burying her old practices far away. Veiling modestly from
                      head to toe...
                    </p>

                    <Link href="/discovering-positivity">
                      <a className="blog_btn">Read More</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-12 text-center mt-20 mb-30 wow fadeInUp2 animated"
                data-wow-delay=".1s"
              >
                <Link href="/blog">
                  <a className="theme_btn">Load More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blog-list-section-ends */}

      {/* subscribe-area start */}
      <SubscribeNewsletter />
      {/* subscribe-area end */}

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
