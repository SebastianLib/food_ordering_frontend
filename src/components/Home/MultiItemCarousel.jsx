import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { topMeals } from '../../constants/topMeals';
import CarouselItem from './CarouselItem';

const MultiItemCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Default for larger screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024, // Screens smaller than 1024px
                settings: {
                    slidesToShow: 3, // Show 3 items
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // Screens smaller than 768px
                settings: {
                    slidesToShow: 2, // Show 2 items
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // Screens smaller than 480px
                settings: {
                    slidesToShow: 1, // Show 1 item
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='overflow-hidden'>
            <Slider {...settings}>
                {topMeals.map((item, index) => (
                    <CarouselItem key={index} image={item.image} title={item.title} />
                ))}
            </Slider>
        </div>
    );
};

export default MultiItemCarousel;
