import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer-area footer-area-2 gradient-bg  pt-md-100 pt-xs-100">
        <div className="footer-blur-bg" />
        <div className="top-footer border-bot-2 pb-20 mb-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="footer__widget">
                  <div className="footer-log mb-30 d-flex ">
                    <Link href="/" >
                    <a className="logo">
                    <picture>
                      <img src="img/logo/logo.png" alt="logo" />
                      </picture> 
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 text-md-end d-flex flex-row-reverse align-items-center">
                <div className="footer__widget__two mb-30">
                  <div className="social-media footer__social">
                    <a href="https://www.facebook.com/An-Nafa-Academy-109756168473751">
                      <i className="fab fa-facebook-f" />
                    </a>

                    <a href="https://www.instagram.com/an.nafa.academy/">
                      <i className="fab fa-instagram"></i>
                    </a>

                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pb-15">
            <div
              className="col-xl-3 col-lg-4 col-md-6  wow fadeInUp2 animated"
              data-wow-delay=".1s"
            >
              <div className="footer__widget footer__widget__two mb-30">
                <h4 className="sub-title mb-10 text-center">About Us</h4>
                <p className="text-justify">
                  An-Nafa Academy is an online learning hub for people of all
                  age groups who wish to seek authentic knowledge of the Deen
                  from the comfort of their homes.
                </p>
                <h5 className="mail-to mt-25 text-center">info@annafa.in</h5>
                <p className="phone-num mt-15 text-center">+91 93807 82258</p>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp2 animated"
              data-wow-delay=".3s"
            >
              <div className="footer__widget mb-30 pl-40 pl-md-0 pl-xs-0 text-center">
                <h6 className="widget-title mb-35">Contact us</h6>
                <ul className="fot-list">
                  <li>
                    <Link href="#">info@annafa.in</Link>
                  </li>
                  <li>
                    <Link href="#">+91 93807 82258</Link>
                  </li>
                  <li><Link href="/terms-and-conditions"><a>Terms &amp; Conditions</a></Link></li>
                  <li><Link href="/privacy-policy"><a>Privacy Policy</a></Link></li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6  wow fadeInUp2 animated"
              data-wow-delay=".5s"
            >
              <div className="footer__widget mb-25 pl-65 pl-md-0 pl-xs-0 text-center">
                <h6 className="widget-title mb-35">Quick Links</h6>
                <ul className="fot-list">
                  <li><Link href="/about-us"><a>About Us</a></Link></li>
                  <li><Link href="/all-courses"><a>All Courses</a></Link></li>
                  <li><Link href="/blog"><a>Blogs</a></Link></li>
                  <li><Link href="/enroll-form"><a>Enroll Now</a></Link></li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6  wow fadeInUp2 animated"
              data-wow-delay=".7s"
            >
              <div className="footer__widget footer__widget__two mb-30 text-center">
                <h6 className="widget-title mb-35">Subscribe Now</h6>
                <div className="subscribe-form-box pos-rel">
                  <form className="subscribe-form mb-15">
                    <input type="text" placeholder="Email Here" />
                  </form>
                  <button className="sub_btn">Subscribe Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right-area border-bot-top pt-45">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 mb-20">
                <div className="copyright">
                  <p>
                    Copyright@ 2022 <a href="https://annafa.in/">An-Nafa Academy</a>. All Rights
                    Reserved
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mb-20">
                <div className="copyright text-lg-end">
                  <ul className="fot-list">
                    <li><Link href="/contact"><a>Help</a></Link></li>
                    <li><Link href="/privacy-policy"><a>Privacy Policy</a></Link></li>
                    <li><Link href="/terms-and-conditions"><a>Terms &amp; Conditions</a></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
