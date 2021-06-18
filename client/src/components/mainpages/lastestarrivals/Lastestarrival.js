import React, { Component } from 'react'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lastestproduct from './Lastestproduct';


export default class Lastestarrival extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,

        };

        return (

            <Slider {...settings}>
                <h1>Lastest Arrivals:</h1>
                <Lastestproduct />

            </Slider>

        )
    }

}
