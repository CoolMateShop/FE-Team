import React from "react";

import imgStar from "../../assets/images/icons/star.svg";
const ReviewItem = () => {
    return (
        <>
            <div className="p-4 border-b-2 border-grayText md:w-1/2">
                <div className="flex flex-col ml:flex-row">
                    {/* star */}
                    <div className="flex mb-5 w-1/3">
                        <span className="mr-[6px]">
                            <img className="w-4" src={imgStar} alt="" />
                        </span>
                        <span className="mr-[6px]">
                            <img className="w-4" src={imgStar} alt="" />
                        </span>
                        <span className="mr-[6px]">
                            <img className="w-4" src={imgStar} alt="" />
                        </span>
                        <span className="mr-[6px]">
                            <img className="w-4" src={imgStar} alt="" />
                        </span>
                        <span className="mr-[6px]">
                            <img className="w-4" src={imgStar} alt="" />
                        </span>
                    </div>
                    {/* content */}
                    <div className="w-2/3">
                        {/* author */}
                        <div className="mb-8">
                            <div className="font-bold">{"author"}</div>
                            <div className="text-gray-500 italic text-sm">
                                {"màu/sizer"}
                            </div>
                        </div>
                        <div>
                            <div className="mb-3">
                                {
                                    "nội dungnội dungnội dungnội dungnội dungnội dungnội dungnội dungnội dung"
                                }
                            </div>
                            <div className="text-gray-500 italic text-sm">
                                {"ngày đăng"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewItem;
