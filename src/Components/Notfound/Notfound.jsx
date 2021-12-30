import React from 'react';
import img from './img/NotFound.jpg';
import style from './NotFound.module.css'


export default function Notfound() {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <img src={img} className={`${style.img404}`}/>
            </div>
        </div>
    )
}
