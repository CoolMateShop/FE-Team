import React from "react";
import imgStar from "../../assets/images/icons/star.svg";
import ColorOption from "../../componenets/cores/ColorOption";
import SizeOption from "../../componenets/cores/SizeOption";
const ProductSummary = () => {
    return (
        <>
            <form action="">
                <div className="relative">
                    {/* name */}
                    <div className="text-2xl pr-20 font-bold mb-5">
                        {"Áo Polo nam co giãn công nghệ Graphene"}
                    </div>
                    {/* review  */}
                    <div className="absolute top-[6px] right-0 ml:relative ml:flex ml:flex-row ">
                        <div className="mb-5 tracking-wider ml:mb-0">
                            {"4.5/5"}{" "}
                            <img
                                className="inline-block w-4"
                                src={imgStar}
                                alt=""
                            />
                        </div>
                        {/* sold */}
                        <div className="text-xs tracking-wider italic  ml:ml-2 ml:flex ml:items-center">
                            {"Đã bán: 20"}
                        </div>
                    </div>
                    {/* price */}
                    <div className="mb-4">{"25.000đ"}</div>

                    {/* colors */}
                    <div>
                        <div className="mb-1">
                            <span>
                                {"Màu sắc: "} <span>{"Màu xám  "}</span>
                            </span>
                        </div>
                        <div className="mb-3">
                            <div className="flex flex-wrap ">
                                <div className="relative mr-4 before:transition-all  before:rounded-xl before:border-2 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-solid before:border-black">
                                    <div className="w-20 h-5 rounded-lg ml:rounded-xl mx-1 my-1 bg-slate-500"></div>
                                </div>
                                <div className="relative before:transition-all  before:rounded-xl before:border-2 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-solid before:border-black">
                                    <div className="w-20 h-5 rounded-lg ml:rounded-xl mx-1 my-1 bg-slate-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* size */}
                    <div>
                        <div className="mb-1">
                            <span>
                                {"Kích thước: "} <span>{"XL"}</span>
                            </span>
                        </div>
                        <div className="mb-3">
                            <div className="flex flex-wrap ">
                                <SizeOption />
                                <SizeOption />
                            </div>
                        </div>
                    </div>
                    {/* quantily and addCart */}
                    <div className="flex items-center py-4">
                        {/* quantily */}
                        <div className=" flex h-8 w-[100px] rounded-2xl border-2 border-solid border-black font-medium text-lg leading-6">
                            <div className="flex justify-center items-center w-8 h-full">
                                -
                            </div>
                            <input
                                type="number"
                                name=""
                                id=""
                                className="text-center max-w-[40px]"
                                value="1"
                            />
                            <div className="flex justify-center items-center w-8 h-full">
                                +
                            </div>
                        </div>
                        {/* add */}
                        <div className="w-full ml-5  ">
                            <button
                                type="submit"
                                className="h-10 w-full rounded-2xl transition-all text-white bg-black"
                            >
                                {"Thêm vào giỏ hàng"}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ProductSummary;
