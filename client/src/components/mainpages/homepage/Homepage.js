import React, { useState, useRef, useEffect } from 'react';
import { SliderData } from './SliderData';
import './homepage.css';
import Footer from '../footer/Footer';
import Ownbrand from '../ownbrands/Ownbrand';
import Membership from '../membership/Membership';
import Lastestarrival from '../lastestarrivals/Lastestarrival';






const Homepage = () => {



    const [current, setCurrent] = useState(0)
    const length = SliderData.length
    const timeout = useRef(null)


    //for time picture change
    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current == length - 1 ? 0 : current + 1)
        }
        timeout.current = setTimeout(nextSlide, 9000)

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
        }

    }, [current, length])



    //for slider buttons to work

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)

        // console.log(current)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)

        //  console.log(current)
    };

    if (!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null
    }




    return (
        <>
            <div className="herosection">
                <div className="herowrapper">
                    {SliderData.map((SliderData, index) => {
                        return (
                            <div className="HeroSlide" key={index}>
                                {index === current && (
                                    <div className="HeroSlider">
                                        <img className="HeroImage" src={SliderData.images} alt={SliderData.alt} />
                                        <div className="HeroContent">
                                            <h1>{SliderData.title}</h1>
                                            <p>{SliderData.price}</p>
                                            < div className="Button" to={SliderData.path} primary='true' css={` max-width: 170px `}>
                                                {SliderData.label}
                                                < div className="Arrow" />
                                            </div>
                                        </div>
                                    </div>

                                )}

                            </div>
                        )
                    })}
                    <div className="SliderButton">
                        <div className="icon_left" onClick={prevSlide}><i class="fas fa-chevron-left"></i></div>
                        <div className="icon_right" onClick={nextSlide}><i class="fas fa-chevron-right"></i></div>
                    </div>

                </div>

            </div>
            <Ownbrand />
            

            <Membership />
            <Footer />
        </>

    )

}
export default Homepage
