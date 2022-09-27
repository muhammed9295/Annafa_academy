import React from "react";
import PageHeader from "../components/PageHeader";
import SubscribeNewsletter from "../components/SubscribeNewsletter";
import Link from "next/link";
import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
      <title>Blogs</title>
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
        <PageHeader title="Blogs" />
        {/*page-title-area end*/}
        {/* blog-area start */}
        <section className="blog-area">
          <div className="blog-bg pt-150 pb-120 pt-md-100 pb-md-70 pt-xs-100 pb-xs-70">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="section-title text-center mb-60">
                    <h2 className="mb-25">All Blogs &amp; News</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="z-blogs mb-30">
                    <div className="z-blogs__thumb mb-30">
                      <Link href="/what-job-should-i-do">
                        <a><picture>
                          <img
                            className="blog-title-pic"
                            src="img/blog/blog-1.png"
                            alt="blog-img"
                          /></picture>
                        </a>
                      </Link>
                    </div>
                    <div className="z-blogs__content">
                      <h4 className="sub-title mb-15">
                        <Link href="/what-job-should-i-do">
                          <a>What job should I do?</a>
                        </Link>
                      </h4>
                      <p className="mb-10">
                        Seeking a sound career opportunity seems to be a
                        nightmare in today&apos;s era.The current scenario depicts
                        job to be merely...
                      </p>
                      <div className="z-blogs__meta d-sm-flex justify-content-between pt-20">
                        <span>Date : June 15 , 2021</span>
                        <span>By Umm-Umar</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="z-blogs mb-30">
                    <div className="z-blogs__thumb mb-30">
                      <Link href="/are-my-sins-greater-than-allas-mercy">
                        <a><picture>
                          <img
                            className="blog-title-pic"
                            src="img/blog/praying.png"
                            alt="blog-img"
                          /></picture>
                        </a>
                      </Link>
                    </div>
                    <div className="z-blogs__content">
                      <h4 className="sub-title mb-15">
                        <Link href="/are-my-sins-greater-than-allah-mercy">
                          <a>Are My Sins Greater Than Allah&apos;s Mercy?</a>
                        </Link>
                      </h4>
                      <p className="mb-10">
                        Sinning is a natural attribute of man dating back to
                        Adam (AS), the first man created by Allah...
                      </p>
                      <div className="z-blogs__meta d-sm-flex justify-content-between pt-20">
                        <span>Date : June 15 , 2021</span>
                        <span>By Nafiya Sheikh</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="z-blogs mb-30">
                    <div className="z-blogs__thumb mb-30">
                      <Link href="/discovering-positivity">
                        <a><picture>
                          <img
                            className="blog-title-pic"
                            src="img/blog/positivity.png"
                            alt="blog-img"
                          /></picture>
                        </a>
                      </Link>
                    </div>
                    <div className="z-blogs__content">
                      <h4 className="sub-title mb-15">
                        <Link href="/discovering-positivity">
                          <a>Discovering positivity</a>
                        </Link>
                      </h4>
                      <p className="mb-10">
                        In the pursuit of knowledge, she walked in one day,
                        Burying her old practices far away. Veiling modestly
                        from head to toe...
                      </p>
                      <div className="z-blogs__meta d-sm-flex justify-content-between pt-20">
                        <span>Date : June 15 , 2021</span>
                        <span>By Nafiya Sheikh</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="row">
          <div className="col-lg-12 text-center mt-20 mb-30">
            <a href="blog-details.html" className="theme_btn">Load More</a>
          </div>
        </div> */}
            </div>
          </div>
        </section>
        {/* blog-area end */}
        {/* subscribe-area start */}
        <SubscribeNewsletter />
        {/* subscribe-area end */}
      </main>
    </>
  );
}
