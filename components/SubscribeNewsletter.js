import React, { useState } from 'react'

export default function SubscribeNewsletter() {

    
  const [sub, setSub] = useState("");

  const subscribe = () => {
    setSub("Thank you for subscription");
  };

  return (
    <>
      <section className="subscribe-area pt-145 pb-50 pt-md-90 pt-xs-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="subscribe-wrapper text-center mb-30">
                <h2>Subscribe our Newsletter &amp; Get every updates.</h2>
                <div className="subscribe-form-box pos-rel">
                  <form className="subscribe-form">
                    <input type="text" placeholder="Write Your E-mail" />
                  </form>
                  <button onClick={subscribe} className="sub_btn">
                    Subscribe Now
                  </button>
                  <p className="mt-25">
                    <em>{sub}</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
