import React, { Component } from "react";
import style from "./Portfolio.module.css";
import Images from './Images/Images.js';

export default class Portfolio extends Component {
  componentDidMount()
  {
    display();
    function display()
    {
      let row = document.querySelector(`.row`);
      let cartona = ``;
      Images.map((img) => (
        cartona +=`
        <div class="col-md-4">
        <div class="${style.imgContainer} position-relative">
          <div class="${style.imgLayer} position-absolute w-100 h-100 opacity-75 rounded-3"
          id="${img.name}"  target="${img.src}" title="${img.description}">
            <i class="fas fa-plus text-white m-auto"></i>
          </div>

          <img src="${img.src}" alt="${img.name}"  class="w-100 rounded-3"/>
        </div>
      </div>`
      ))
      row.innerHTML=cartona
    }
  };

  
  render() {
    return (
      <div>
        <section className={`${style.Portfolio}`}>
          <div className="py-5 container text-center">
            <div>
              <div className=" fw-bold">
                <h2>PORTFOLIO</h2>
              </div>
              <div className={`text-center mb-5 ${style.icon}`}>
                <i className="fas fa-star fs-2"></i>
              </div>
            </div>

            <div className="row">

            </div>
            <div id="porModel"></div>
          </div>
        </section>
      </div>
    );
  }
}
