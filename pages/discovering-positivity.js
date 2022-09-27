import React from "react";
import PageHeader from "../components/PageHeader";
import SubscribeNewsletter from "../components/SubscribeNewsletter";
import Link from "next/link";
import Head from "next/head";

export default function DiscoveringPositivity() {
  return (
    <>
      <Head>
      <title>Discovering positivity</title>
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
        <PageHeader title="Discovering positivity" />
        {/*page-title-area end*/}
        {/* blog-details-area start */}
        <section className="blog-details-area pt-150 pb-105 pt-md-100 pb-md-55 pt-xs-100 pb-xs-55">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="blog-details-box mb-45">
                  <h2>Discovering positivity</h2>
                  <ul className="blogs__meta mb-30">
                    <li>
                      <span className="blog-author">By Umm Umar</span>
                    </li>
                    <li>
                      <span>
                      <picture>
                        <img
                          src="img/icon/material-date-range.svg"
                          alt="mate-date"
                        /></picture>
                        April 21 , 2021
                      </span>
                    </li>
                    <li>
                      <div className="social-media blog-details-social">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>

                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>

                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </div>
                    </li>
                  </ul>
                  <picture>
                  <img
                    className="img-fluid blog-details-img mb-35"
                    src="img/blog/positivity.png"
                    alt="blog-details-img"
                  /></picture>
                </div>

                <div className="blog-details-text mb-30">
                  <p>
                    In the pursuit of knowledge, she walked in one day, <br />
                    Burying her old practices far away. <br />
                    Veiling modestly from head to toe, <br />
                    Only to Allah now she chose to bow!
                  </p>
                  <br />

                  <p>
                    With serenity in her heart she smiled,
                    <br />
                    Finding her to be a Muslim was a pride. <br />
                    From polytheism did she set herself free, <br />
                    Verily, she was a blessed revertee!
                  </p>
                  <br />
                  <p>
                    Cherishing the privilege of her affable company, <br />
                    Fortunate I was to witness her journey. <br />
                    Stunned by her utmost courage and bravery, <br />
                    My so-called faith shrunk into misery!
                  </p>
                  <br />
                  <p>
                    Shunning away the wrong for the right, <br />
                    From darkness she stepped into light. <br />
                    Knowledge of this Deen she sustained, <br />
                    Hidayah was a bounty she gained!
                  </p>
                  <br />
                  <p>
                    The desires of this world she put apart,
                    <br />
                    Hoping with Allah for the ultimate reward. <br />
                    Mocks and taunts she boldly overlooked,
                    <br />
                    Her bond with Allah she now unhooked!
                  </p>
                  <br />
                  <p>
                    Guilt touched me for not being strong, <br />
                    Islam was taken for granted so long. <br />
                    Adhering to the teachings of The Quran and Sunnah, <br />
                    She constantly hoped for the eternal Jannah!
                  </p>
                  <br />
                  <p>
                    Dedicating her soul to the Almighty Allah, <br />
                    She tread the path of Al Falah. <br />
                    Unwavering tawakkul on Allah is her beauty, <br />
                    Grateful she remains for perceiving positivity!!
                  </p>
                </div>

                {/* <div class="blog-details-author row gx-2 align-items-center mb-45">
                      <div class="col-lg-6">
                          <div class="author__box mb-30">
                              <img class="author-img" src="img/blog/23.jpg" alt="">
                              <div class="author__box-text">
                                  <h4 class="sub-tilte">Jason Momoa</h4>
                                  <p>Admin</p>
                              </div>
                          </div>
                      </div>
                     <div class="col-lg-6">
                          <div class="social-media blog-details-social mb-30">
                              <a href="#"><i class="fab fa-facebook-f"></i></a>
                              <a href="#"><i class="fas fa-basketball-ball"></i></a>
                              <a href="#"><i class="fab fa-youtube"></i></a>
                              <a href="#"><i class="fab fa-pinterest-p"></i></a>
                          </div>
                     </div>
                  </div> */}
                {/* <div className="row">
                  <div className="col-lg-12 text-center mb-40">
                    <button className="theme_btn comment_btn">
                      View Comments
                    </button>
                  </div>
                </div> */}
                {/* <div className="comments-area">
                  <ul className="latest-commmnet">
                    <li>
                      <div className="single-comments mb-30">
                        <div className="comments__author">
                          <img src="img/blog/comment/01.jpg" alt />
                        </div>
                        <div className="comments__text">
                          <h4 className="sub-title mb-10">
                            Kavin Petersen{" "}
                            <span className="float-end date-text">
                              21 July , 2021
                            </span>
                          </h4>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to.
                          </p>
                          <a href="#" className="reply mt-10">
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-comments">
                        <div className="comments__author">
                          <img src="img/blog/comment/02.jpg" alt />
                        </div>
                        <div className="comments__text">
                          <h4 className="sub-title mb-10">
                            Lebron James{" "}
                            <span className="float-end date-text">
                              21 July , 2021
                            </span>
                          </h4>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to.
                          </p>
                          <a href="#" className="reply mt-10">
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-comments mb-30">
                        <div className="comments__author ml-90 ml-md-0 ml-xs-0">
                          <img src="img/blog/comment/03.jpg" alt />
                        </div>
                        <div className="comments__text">
                          <h4 className="sub-title mb-10">
                            Jason Momoa{" "}
                            <span className="float-end date-text">
                              21 July , 2021
                            </span>
                          </h4>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to.
                          </p>
                          <a href="#" className="reply mt-10">
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div> */}
                {/* <div className="comments-form-area">
                  <h2>Leave a comment</h2>
                  <form action="#" className="row comments-form">
                    <div className="col-lg-6 mb-20">
                      <input type="text" placeholder="Full Name" />
                    </div>
                    <div className="col-lg-6 mb-20">
                      <input type="text" placeholder="Email Name" />
                    </div>
                    <div className="col-lg-12 mb-20">
                      <textarea
                        name="commnent"
                        id="commnent"
                        cols={30}
                        rows={10}
                        placeholder="Write Your Comments"
                        defaultValue={""}
                      />
                    </div>
                  </form>
                  <button className="theme_btn comment_btn">
                    Submit Comment
                  </button>
                </div> */}
              </div>
              <div className="col-lg-4">
                <div className="blog-widget-area">
                  <div className="widget mb-50">
                    <div className="blog-categories-widget">
                      <h4 className="sub-title pb-20 mb-25 pt-25 text-center">
                        Recent Post
                      </h4>
                      <ul className="blog-recent-post">
                        <li>
                          <div className="posts mb-20">
                          <picture>
                            <img
                              src="img/blog/praying.png"
                              alt="are-my-sins-greater-than-Allah's-mercy"
                              className="posts__thumb mb-15 post-thumb-pic"
                            /></picture>
                            <p>1st July , 2021</p>
                            <h6>
                              <Link href="/are-my-sins-greater-than-allah's-mercy">
                                <a>Are My Sins Greater Than Allah’s Mercy?</a>
                              </Link>
                            </h6>
                          </div>
                        </li>
                        <li>
                          <div className="posts mb-20">
                          <picture>
                            <img
                              src="img/blog/positivity.png"
                              alt="discovering-positivity"
                              className="posts__thumb mb-15 post-thumb-pic"
                            /></picture>
                            <p>1st July , 2021</p>
                            <h6>
                              <Link href="/discovering-positivity">
                                <a>Discovering positivity</a>
                              </Link>
                            </h6>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="widget mb-50">
                    <h4 className="sub-title pb-20 mb-25 pt-25 text-center">
                      Social Media
                    </h4>
                    <div className="blog-social-widget">
                      <div className="social-media mb-30 course-description">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>

                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>

                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="widget mb-50">
                    <div className="blog-categories-widget">
                      <h4 className="sub-title pb-20 mb-25 pt-25 text-center">
                        Popular Post
                      </h4>
                      <ul className="blog-recent-post">
                        <li>
                          <div className="posts mb-20">
                          <picture>
                            <img
                              src="img/blog/blog-1.png"
                              alt="what-job-should-i-do"
                              className="posts__thumb mb-15 post-thumb-pic"
                            /></picture>
                            <p>1st July , 2021</p>
                            <h6>
                              <Link href="/what-job-should-i-do">
                                <a>What job should I do?</a>
                              </Link>
                            </h6>
                          </div>
                        </li>
                        <li>
                          <div className="posts mb-20">
                          <picture>
                            <img
                              src="img/blog/praying.png"
                              alt="are-my-sins-greater-than-Allah's-mercy"
                              className="posts__thumb mb-15 post-thumb-pic"
                            /></picture>
                            <p>1st July , 2021</p>
                            <h6>
                              <Link href="/are-my-sins-greater-than-allah's-mercy">
                                <a>Are My Sins Greater Than Allah’s Mercy?</a>
                              </Link>
                            </h6>
                          </div>
                        </li>
                        <li>
                          <div className="posts mb-20">
                          <picture>
                            <img
                              src="img/blog/positivity.png"
                              alt="discovering-positivity"
                              className="posts__thumb mb-15 post-thumb-pic"
                            /></picture>
                            <p>1st July , 2021</p>
                            <h6>
                              <Link href="/discovering-positivity">
                                <a>Discovering positivity</a>
                              </Link>
                            </h6>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="widget mb-50">
                    <div className="blog-categories-widget">
                      <h4 className="sub-title pb-20 mb-25 pt-25">Tags</h4>
                      <div className="courses-tag-btn cat-btn tag-btn">
                        <a href="#">Online Class</a>
                        <a href="#">Skill Share</a>
                        <a href="#">Web Learn</a>
                        <a href="#">Development</a>
                        <a href="#">Direction</a>
                        <a href="#">Certificate</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* blog-details-area end */}
        {/* subscribe-area start */}
        <SubscribeNewsletter />
        {/* subscribe-area end */}
      </main>
    </>
  );
}
