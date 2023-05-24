import React, { useState } from "react";
import Slider from "react-slick";
import img1 from "../../assets/images/home/mceclip0_105.jpg";
import img2 from "../../assets/images/home/mceclip1_161.jpg";
import img3 from "../../assets/images/home/mceclip4_28.jpg";
import img4 from "../../assets/images/home/mceclip5_81.jpg";
const CustomPaging = () => {
    const [images, setImages] = useState<string[]>([img1, img2, img3, img4]);
    const settings = {
        customPaging: function (i: number) {
            return (
                <a>
                    <img className="rounded-xl" src={images[i]} />
                </a>
            );
        },
        fade: true,
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>
            <Slider {...settings}>
                {images.map((image, index) => {
                    return (
                        <div key={index} className="w-8  ">
                            <img className="w-full rounded-2xl" src={image} />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default CustomPaging;
