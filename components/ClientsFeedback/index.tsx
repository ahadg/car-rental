import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ClientFeedback = () => {
    var settings = {
        dots: true,
        infinite: false,
        autoplay: true,
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
        { name: 'KweenzWorld', designation: 'Google', description:'My  rental experience was worth 5-stars! 1. Khalai was super helpful with the entire process. Very polite and knowledgeable on everything. 2. The quality of the car was outstanding! Clean, low mileage and newer. 3. Love that they drop off and pick up the rental at your location. Definitely would recommend their rental services. Thank you once again!', image:'./kw.jpg' },
        { name: 'Zarrin Ahmed', designation: 'Google', description:'I had a great experience with Agile Car Rental. The name says it all! I got a really good quote and hadd a brand new Corolla delivered right to me. The car was comfortable to drive, even on the hills of St. Thomas, and the service was exceptional. The owner, Mr. Vanterpool, gave some custom recommendations on places to got and it really helped me have a good vacation on island. It was my first time going around St. Thomas and now Agile Car Rental will be my go-to for anything i need. Would highly recommend to anyone!', image:'./za.jpg'},
        { name: 'Tyler', designation: 'Google', description:'My car rental experience with agile car rentals was fantastic. The agile car representative appeared at meeting place fast and on time. I got my new brand new rental 2022 toyota corolla within the hour at a competitive price. All Agile car rental employees were nice and friendly. 10 out of 10 would recommend to anyone looking to rent a car on the island of St.Thomas USVI!', image:'./tf.png' },
        

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
                                        <img src={item.image} className="user-img" />
                                    </div>
                                    <div className="quotation-sign flex aic jc">
                                        <img src="./quote.png" className="quote-img" />
                                    </div>
                                    <div className="desc flex aic">
                                        <p>
                                            {item.description}
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
