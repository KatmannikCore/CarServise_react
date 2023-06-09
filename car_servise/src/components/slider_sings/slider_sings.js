import React, {useEffect } from 'react';
import $ from 'jquery';

import "./slider_sings.css"
import audi from "../../access/images/slider/audi.png"
import bentley  from "../../access/images/slider/bentley.png"
import land_rover from "../../access/images/slider/land-rover.png"
import mercedes from "../../access/images/slider/mercedes.png"
import porsche from "../../access/images/slider/porsche.png"
import bmw from "../../access/images/slider/bmw.png"
import volkswagen from "../../access/images/slider/volkswagen.png"
import aston from "../../access/images/slider/aston.png"
import mazda from "../../access/images/slider/mazda.png"
import opel from "../../access/images/slider/opel.png"
import chevrolet from "../../access/images/slider/chevrolet.png"
import honda from "../../access/images/slider/honda.png"
export default function Slider_sings() {
        console.log(12314321)
        $(document).ready(function() {
            $('.slider').slick({
                slidesToShow: 6,
                slidesToScroll: 4,
                //autoplay: true,
                autoplaySpeed: 2000,
            });
        })
        $(document).ready(function() {
            $('.sliderReviews').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                //autoplay: false,
                autoplaySpeed: 4000,
                arrows: false,
                centerMode: true,
                autoplay: true,
            });
        })
  

    return (
        <nav className="sliderHead">
            <div className="slider">
                <img src={audi} alt=""/>
                <img src={bentley} alt=""/>
                <img src={land_rover} alt=""/>
                <img src={mercedes} alt=""/>
                <img src={porsche} alt=""/>
                <img src={bmw} alt=""/>
                <img src={volkswagen} alt=""/>
                <img src={aston} alt=""/>
                <img src={mazda} alt=""/>
                <img src={opel} alt=""/>
                <img src={chevrolet} alt=""/>
                <img src={honda} alt=""/>
            </div>
        </nav>
    )
}
