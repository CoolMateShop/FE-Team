import React, { useState } from "react";
import Carousel from "../../componenets/cores/Carousel";
import ProductSummary from "./ProductSummary";
import ProductDescription from "./ProductDescription";
import Reviews from "./Reviews";
import CustomPaging from "../../componenets/cores/CustomPaging";
import img4 from "../../assets/images/home/mceclip5_81.jpg";
import img5 from "../../assets/images/home/mceclip6_43.jpg";
import img6 from "../../assets/images/home/mceclip7_13.jpg";
const GalleryPopup = () => {
    const [imgState, setImgState] = useState<string[]>([img4, img5, img6]);

    const settingCarousel: carouselSetting = {
        slidesToShow: 1,
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };
    return (
        <>
            <div className="ml:flex px-3 ml:px-10 ">
                {/* galleryPopup */}
                <div className="ml:w-3/5 ml:pr-16 pb-24">
                    <CustomPaging />
                </div>
                {/* summary */}
                <div className="ml:w-2/5 ml:pl-1">
                    <ProductSummary />
                </div>
                {/* description */}
            </div>
            {/* description */}
            <div className="px-3">
                <ProductDescription />
            </div>
            {/* review */}
            <div className="px-3">
                <Reviews />
            </div>
        </>
    );
};

export default GalleryPopup;
