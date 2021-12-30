import React from "react";
import style from "./Home.module.css";
import img from "./img/avataaars.svg";

export default function Home() {
  return (
    <>
      <section className={`${style.home}`}>
        <div className="d-flex justify-content-center align-content-center text-center py-5">
          <div className="parent">
            <div className="img-Home">
              <img src={img} className={`mt-4 ${style.imgHome}`} alt='start' />
            </div>
            <div className="capHome text-white">
              <h1 className="fw-bold mt-4">START REACT</h1>
              <div className={`text-center mb-3 ${style.icon}`}>
              <i className="fas fa-star fs-2"></i>
              </div>
              <p className="my-3 fw-light">
                Graphic Artist - Web Designer - Illustrator
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
