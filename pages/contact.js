import React from "react";
import PageHeader from "../components/PageHeader";
import SubscribeNewsletter from "../components/SubscribeNewsletter";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
      <title>Contact</title>
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
        <PageHeader title="Contact Us" />
        {/*page-title-area end*/}

        {/*contact-us-area start*/}
        <section className="contact-us-area pt-150 pb-120 pt-md-100 pt-xs-100 pb-md-70 pb-xs-70">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className=" mb-30">
                <picture><img
                    className="img-fluid"
                    src="img/contact/contact-us.png"
                    alt="contact"
                  /></picture>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="contact-wrapper pl-75 mb-30">
                  <div className="section-title mb-30">
                    <h2 className="text-center">Get In Touch With Us</h2>
                  </div>

                  <div className="single-contact-box cb-2 mb-30">
                    <div className="contact__iocn">
                    <picture><img src="img/icon/phone-alt.svg" alt="svg" /></picture>
                    </div>
                    <div className="contact__text">
                      <h5>+91 93807 82258</h5>
                    </div>
                  </div>
                  <div className="single-contact-box cb-3 mb-30">
                    <div className="contact__iocn">
                    <picture><img src="img/icon/feather-mail.svg" alt="svg" /></picture>
                    </div>
                    <div className="contact__text">
                      <h5>info@annafa.in</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*contact-us-area end*/}

        {/*contact-map-area start*/}
        <section className="contact-map-area">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              <div className="col-lg-12">
                <div className="conatct-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61941.84518440033!2d74.50472580907422!3d13.99633943843465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc431e28dabfab%3A0x7060a42cfeac9a4!2sBhatkal%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1659545658995!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*contact-map-area end*/}

        {/* subscribe-area start */}
        <SubscribeNewsletter />
        {/* subscribe-area end */}
      </main>
    </>
  );
}
