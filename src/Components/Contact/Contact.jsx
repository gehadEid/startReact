import React from "react";
import style from "./Contact.module.css";

export default function Contact() {
  return (
    <div>
      <section id="contact">
        <div className={`container py-5 ${style.contact}`}>
          <div className="text-center fw-bold pt-5">
            <h2>CONTACT ME</h2>
          </div>
          <div className={`text-center mb-5 ${style.icon}`}>
            <i className="fas fa-star fs-2"></i>
          </div>


          <form action="" className="col-md-9 m-auto py-3">
            <label htmlFor="" className="d-none">Name</label>
            <input
              type="text"
              className={`${style.contactName} form-control py-3 `}
              placeholder="Name"
            />
            <ul className="text-danger ms-3 d-none">
              <li>Please enter your name.</li>
            </ul>
            <div className={`${style.contactLine} py-1 `}></div>



            <label htmlFor="" className="pt-3 d-none">
              Email Address
            </label>
            <input
              type="text"
              className={`${style.contactName} form-control py-3`}
              placeholder="Email Address"
            />
            <ul className="text-danger ms-3 d-none">
              <li>Please enter your name.</li>
            </ul>
            <div className={` ${style.contactLine} py-1`}></div>




            <label htmlFor="" className="pt-3 d-none">
              phone Number
            </label>
            <input
              type="text"
              className={`${style.contactName} form-control py-3 `}
              placeholder="phone Number"
            />
            <ul className="text-danger ms-3 d-none">
              <li>Please enter your name.</li>
            </ul>
            <div className={` ${style.contactLine} py-1`}></div>




            <label htmlFor="" className="pt-3 d-none">
              Message
            </label>
            <textarea
              type="text"
              className={`${style.contactName} form-control py-3 `}
              placeholder="Message"
            ></textarea>
            <ul className="text-danger ms-3 d-none">
              <li>Please enter your name.</li>
            </ul>
            <div className={`${style.contactLine} py-1`}></div>


            <button className="btn py-2 px-5 mt-4 ">Send</button>


          </form>
        </div>
      </section>
    </div>
  );
}
