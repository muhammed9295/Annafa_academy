import React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import Head from "next/head";

export default function EnrollForm() {
  const { register, handleSubmit, reset } = useForm();

  const sendEmail = (data) => {
    emailjs
      .send("service_q5i787a", "template_9wdjf1t", data, "saQe3cIEPP9Vsx7gY")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Application Submitted");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Something went wrong, please try again");
        }
      );

    reset();
  };

  return (
    <>
      <Head>
      <title>Enroll form</title>
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
      <main className="pt-100 pb-100 pb-xs-50">
        <section className="contact-form-area pt-150 pb-120 pt-md-100 pt-xs-100 pb-md-70 pb-xs-70">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="contact-form-wrapper mb-30">
                  <h2 className="mb-45">Enrollment Form</h2>
                  <form
                    onSubmit={handleSubmit(sendEmail)}
                    className="row gx-3 comments-form contact-form"
                  >
                    <div className="col-lg-6 col-md-6 mb-30">
                      <input
                        type="text"
                        placeholder="Child's Full Name"
                        {...register("name")}
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 mb-30">
                      <input
                        {...register("age")}
                        type="text"
                        placeholder="Child's Age"
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 mb-30">
                      <input
                        type="text"
                        placeholder="Father's Name"
                        {...register("father")}
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 mb-30">
                      <input
                        type="text"
                        placeholder="Nationality"
                        {...register("nationality")}
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 mb-30">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        {...register("contact")}
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 mb-30">
                      <input
                        {...register("email")}
                        type="text"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 mb-30">
                      <input
                        type="select"
                        placeholder="Mention the grade your child is studying in"
                        {...register("grade")}
                      />
                    </div>
                    <div className="col-lg-12 mb-30 radio_section">
                      <p>Is your child a complete beginner?</p>

                      <div className="radio_btn">
                        <input
                          {...register("beginner")}
                          type="radio"
                          id="html"
                          name="beginner"
                          value="Yes"
                        />
                        <label className="black-color" htmlFor="html">Yes</label>
                        <br />
                      </div>
                      <div className="radio_btn">
                        <input
                          {...register("beginner")}
                          type="radio"
                          id="css"
                          name="beginner"
                          value="No"
                        />
                        <label className="black-color" htmlFor="css">No</label>
                      </div>
                    </div>
                    <input
                      type="submit"
                      className="theme_btn message_btn mt-20"
                      name=""
                      id=""
                    />
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-img contact-img-02 mb-30">
                <picture>
                  <img
                    className="img-fluid"
                    src="img/contact/form.png"
                    alt="enroll-form"
                  /></picture>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
