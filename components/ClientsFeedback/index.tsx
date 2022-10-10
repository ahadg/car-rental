import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ClientFeedback = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    var offersSetting = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const sliderData = [
        { name: 'Muddasir', designation: 'Developer' },
        { name: 'Zeez Soft', designation: 'Software Agency' },
        { name: 'Carl Stevens', designation: 'Artist' },
        { name: 'Muddasir', designation: 'UI/UX' },
        { name: 'Muddasir', designation: 'Deringer' },
        { name: 'Muddasir', designation: 'Tester' },
    ];
    return (
        <div className="client-feedback flex aic jc">
            <div className="offers  flex aic aic jc">
                <div className="block wrapper flex aic jc">
                    <Slider {...settings}>
                        {sliderData.map((item, index) => (
                            <div>
                                <div className="card flex flex-col">
                                    <div className="img flex aic jc">
                                        <img src="./user-img.webp" className="user-img" />
                                    </div>
                                    <div className="quotation-sign flex aic jc">
                                        <img src="./quote.png" className="quote-img" />
                                    </div>
                                    <div className="desc flex aic">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt modi fuga placeat
                                            tenetur numquam natus unde iusto voluptatibus itaque, distinctio eius sequi dolorum
                                            praesentium ratione necessitatibus. Doloribus quas numquam atque!
                                        </p>
                                    </div>
                                    <div className="user-info flex flex-col aic jc">
                                        <div className="name">{item.name}</div>
                                        <div className="designation">{item.designation}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    {/* <sliderData {...offersSetting}>
                        {sliderData.map((item, index) => (
                            <div key={index}>
                                <div className="card flex aic">
                                    <div className="">{item.lbl}</div>
                                </div>
                            </div>
                        ))}
                    </sliderData> */}
                </div>
            </div>
        </div>
    );
};

export default ClientFeedback;
