import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://raw.githubusercontent.com/masudpatoary/lucky-1/main-1/Images-for-rolls-royce-spare-parts/banner/banner-1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://raw.githubusercontent.com/masudpatoary/lucky-1/main-1/Images-for-rolls-royce-spare-parts/banner/banner-2.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://raw.githubusercontent.com/masudpatoary/lucky-1/main-1/Images-for-rolls-royce-spare-parts/banner/banner-4.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;