import React, { Component } from 'react'
import './styles/aboutUs.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const photos = [
    {
        name: 'DV',
        url: "https://i.imgur.com/OnOzx9z.png"
    },
    {
        name: 'JM',
        url: "https://i.imgur.com/ENgRoWA.png"
    },
    {
        name: 'DB',
        url: "https://i.imgur.com/fHh8H81.png"
    },
    {
        name: 'JQ',
        url: "https://i.imgur.com/74fHYOV.png"
    }
]
export default class App extends Component {
    render() {
        const settings = {
            className: "slides",
            centerMode: true,
            infinite: true,
            centerPadding: "10px",
            slidesToShow: 2.9,
            speed: 1000,
            slidesToScroll: 1,
            swipeToSlide: true,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true,
            dots: false,
        }

        return (
            <div className='App' style={{ padding: 50 }}>
                <h3 className='about-us-title'>About Us</h3>
                {/* nice spread syntax! */}
                <Slider className='carousel-img' {...settings}>
                    {photos.map(photo => {
                        return (
                            <div>
                                <img className='about-us-img' width="auto" src={photo.url} alt='MTG Cards' />
                            </div>
                        )
                    })}
                </Slider>
                {/* would have liked to see you store this data in json, then map over it like you did with the photos */}
                {
                    aboutData.map(person => 
                    <div className='about-us-list-container'>
                    <div className='about-us-names about-us-title'>{person.title}
                        <a className='about-us-links' href={person.linkedin} target="blank">LinkedIn</a>
                        <a className='about-us-links' href={person.github} target="blank">Github</a>
                    </div>
                 </div>)
                }
  

            </div>
        );
    }
}
