import React, { useState } from "react";
import Link from "next/link";
import Script from "next/script";

export default function Header() {
  return (
    <>
      <header>
        <div
          id="theme-menu-two"
          className="main-header-area pl-100 pr-100 pt-20 pb-15"
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-5">
                <div className="logo">
                  <Link href="/">
                    <a>
                    <picture>
                      <img src="img/logo/logo.png" alt="logo" />
                      </picture>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-8 d-none d-lg-block">
                <nav className="main-menu navbar navbar-expand-lg justify-content-center">
                  <div className="nav-container">
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link href="/" role="button" aria-expanded="false">
                            <a className="nav-link">Home</a>
                          </Link>
                        </li>
                        <li className="nav-item dropdown mega-menu">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            All Categories
                          </a>
                          <ul
                            className="dropdown-menu submenu mega-menu__sub-menu-box"
                            aria-labelledby="navbarDropdown"
                          >
                            <li>
                              <Link href="/qaida">
                                <a>
                                  <span>
                                  <picture>
                                    <img
                                      className="categories-icon"
                                      src="img/icon/arabic.png"
                                      alt="qaida"
                                    />
                                    </picture>
                                  </span>
                                  Qaida
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/arabic">
                                <a>
                                  <span>
                                  <picture>
                                    <img
                                      className="categories-icon"
                                      src="img/icon/arabic.png"
                                      alt="arabic"
                                    />
                                    </picture>
                                  </span>
                                  Arabic
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/hifdh">
                                <a>
                                  <span>
                                  <picture>
                                    <img
                                      className="categories-icon"
                                      src="img/icon/quran.png"
                                      alt="quran"
                                    />
                                    </picture>
                                  </span>{" "}
                                  Hifdh
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/tawheed">
                                <a>
                                  <span>
                                  <picture>
                                    <img
                                      className="categories-icon-1"
                                      src="img/icon/tawheed.png"
                                      alt="tawheed"
                                    />
                                    </picture>
                                  </span>{" "}
                                  Tawheed
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/quranic-stories">
                                <a>
                                  <span>
                                  <picture>
                                    <img
                                      className="categories-icon"
                                      src="img/icon/quran-stories.png"
                                      alt="quranic-stories"
                                    />
                                    </picture>
                                  </span>{" "}
                                  Quranic Stories
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/dhikrs">
                                <a>
                                  <span>
                                  <picture>
                                    <img
                                      className="categories-icon"
                                      src="img/icon/counting.png"
                                      alt="dhikrs"
                                    />
                                    </picture>
                                  </span>{" "}
                                  Dhikrs
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item ">
                          <Link
                            href="/about-us"
                            id="navbarDropdown3"
                            role="button"
                            aria-expanded="false"
                          >
                            <a className="nav-link">About Us</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/blog"
                            id="navbarDropdown4"
                            role="button"
                            aria-expanded="false"
                          >
                            <a className="nav-link">Blog</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/contact"
                            id="navbarDropdown5"
                            role="button"
                            aria-expanded="false"
                          >
                            <a className="nav-link">Contact</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="col-xl-3 col-lg-2 col-7">
                <div className="right-nav d-flex align-items-center justify-content-end">
                  <div className="right-btn mr-25 mr-xs-15">
                    <ul className="d-flex align-items-center">
                      <li>
                        <Link href="/enroll-form">
                          <a className="theme_btn free_btn">Enroll Now</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="hamburger-menu d-md-inline-block d-lg-none text-right">
                    <a href="javascript:void(0);">
                      <i className="far fa-bars" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* /.theme-main-menu */}
      </header>

      {/* slide-bar start */}
      <aside className="slide-bar">
        <div className="close-mobile-menu">
          <a href="javascript:void(0);">
            <i className="fas fa-times" />
          </a>
        </div>
        {/* offset-sidebar start */}
        {/* <div className="offset-sidebar">
          <div className="offset-widget offset-logo mb-30">
            <a href="index.html">
              <img src="assets/img/logo/header_logo_one.svg" alt="logo" />
            </a>
          </div>
          <div className="offset-widget mb-40">
            <div className="info-widget">
              <h4 className="offset-title mb-20">About Us</h4>
              <p className="mb-30">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and will give you
                a complete account of the system and expound the actual
                teachings of the great explore
              </p>
              <a className="theme_btn theme_btn_bg" href="contact.html">
                Contact Us
              </a>
            </div>
          </div>
          <div className="offset-widget mb-30 pr-10">
            <div className="info-widget info-widget2">
              <h4 className="offset-title mb-20">Contact Info</h4>
              <p>
                {" "}
                <i className="fal fa-address-book" /> 23/A, Miranda City Likaoli
                Prikano, Dope
              </p>
              <p>
                {" "}
                <i className="fal fa-phone" /> +0989 7876 9865 9{" "}
              </p>
              <p>
                {" "}
                <i className="fal fa-envelope-open" /> info@example.com{" "}
              </p>
            </div>
          </div>
        </div> */}
        {/* offset-sidebar end */}

        {/* side-mobile-menu start */}
        <nav className="side-mobile-menu">
          <ul id="mobile-menu-active">
            <li className="has-dropdown">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                <a>About</a>
              </Link>
            </li>
            <li className="has-dropdown">
              <Link href="#">
                <a className="has-dropdown">All Courses</a>
              </Link>
              <ul>
                <li>
                  <Link href="/qaida">
                    <a>Qaida</a>
                  </Link>
                </li>
                <li>
                  <Link href="/arabic">
                    <a>Arabic</a>
                  </Link>
                </li>
                <li>
                  <Link href="/hifdh">
                    <a>Hifdh</a>
                  </Link>
                </li>
                <li>
                  <Link href="/tawheed">
                    <a>Tawheed</a>
                  </Link>
                </li>
                <li>
                  <Link href="/quranic-stories">
                    <a>Quran Stories</a>
                  </Link>
                </li>
                <li>
                  <Link href="/dhikrs">
                    <a>Dhikrs</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/blog">
                <a>Blogs</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contacts Us</a>
              </Link>
            </li>
          </ul>
        </nav>
        {/* side-mobile-menu end */}
        {/* side-mobile-menu end */}
      </aside>
      <div className="body-overlay" />
      {/* slide-bar end */}

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
