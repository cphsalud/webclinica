'use client'

import { BrandsContainer } from "@/app/styles/Brands";
import { MyImages } from "../images/MyImages";
import Slider from "react-slick";
import one from '@/app/assets/logos-n/1.png';
import two from '@/app/assets/logos-n/2.png';
import three from '@/app/assets/logos-n/3.png';
import four from '@/app/assets/logos-n/4.png';
import five from '@/app/assets/logos-n/5.png';
import six from '@/app/assets/logos-n/6.png';
import seven from '@/app/assets/logos-n/denu.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Brands = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <BrandsContainer>
            <Slider {...settings}>
                <div>
                    <div className="img">
                        {MyImages(one)}
                    </div>
                </div>
                <div>
                    <div className="img">
                        {MyImages(two)}
                    </div>
                </div>
                <div>
                    <div className="img">
                        {MyImages(three)}
                    </div>
                </div>
                <div>
                    <div className="img">
                        {MyImages(four)}
                    </div>
                </div>
                <div>
                    <div className="img">
                        {MyImages(five)}
                    </div>
                </div>
                <div>
                    <div className="img">
                        {MyImages(six)}
                    </div>
                </div>
                <div>
                    <div className="img">
                        {MyImages(seven)}
                    </div>
                </div>
            </Slider>
        </BrandsContainer>
    )
}
