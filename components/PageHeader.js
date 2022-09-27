import React from "react";
import Link from "next/link";

export default function PageHeader(props) {
  return (
    <>
      {/*page-title-area start*/}
      <section className="page-title-area d-flex align-items-end title-background-img">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-12">
              <div className="page-title-wrapper mb-50">
                <h1 className="page-title mb-25">{props.title}</h1>
                <div className="breadcrumb-list">
                  <ul className="breadcrumb">
                    <li>
                      <Link href="/">
                        <a>Home - Pages - </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>{props.title}</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*page-title-area end*/}
    </>
  );
}
