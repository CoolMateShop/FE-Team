import React, { useState } from "react";
import ColorOption from "../cores/ColorOption";
import SizeOption from "../cores/SizeOption";
import img from "../../assets/images/home/xanhbongdem2.png";
import imgStar from "../../assets/images/star.svg";
const Product = ({ product }: { product: product }) => {
    let colorData: productDetail[] = [product.product_details[0]];

    product.product_details.map((productDetail) => {
        // colorData.map((color) => {
        //     if (color.colorName != productDetail.colorName) {
        //         colorData = [...colorData, productDetail];
        //         console.log(color.colorName);

        //     }
        // });
        // colorData.forEach((color) => {
        //     if (color.colorName != productDetail.colorName) {
        //         colorData.push(productDetail);
        //     } else {
        //         return;
        //     }
        // });
        for (let index = 0; index < colorData.length; index++) {
            if (colorData[index].colorName != productDetail.colorName) {
                colorData.push(productDetail);
                console.log(colorData[index].colorName);
                return;
            }
        }
    });

    const [colors, setColors] = useState<productDetail[]>(colorData);

    console.log(colors);
    // const [size, setSize] = useState<string[]>();
    const [border, setBorder] = useState<number>(colors[0].id);
    const handleChangeColor = (item: productDetail) => {
        setBorder(item.id);
    };
    return (
        <>
            <div className="relative w-1/2 px-1 py-1 md:w-1/3 ml:w-1/4">
                <div className="relative pb-3">
                    <div className="pb-4 rounded-lg relative transition-all">
                        {/* image */}
                        <div className="mb-3">
                            <div>
                                <img src={img} alt="" className="rounded-3xl" />
                            </div>
                            <span className="absolute h-5 flex justify-center items-center rounded-lg text-xs top-3 right-4 px-2 font-bold bg-[#f9f86c]">
                                Sắp hết
                            </span>
                            {/* <span className="absolute text-white h-5 flex justify-center items-center rounded-lg text-xs top-3 right-4 px-2 font-bold bg-[#ff3102]">
                                Sale
                            </span>
                            <span className="absolute text-white h-5 flex justify-center items-center rounded-lg text-xs top-3 right-4 px-2 font-bold bg-blueBtn">
                                NEW
                            </span> */}
                            <div className="absolute top-3 left-3 ">
                                <div className="flex items-center ">
                                    <div className="font-bold">{"4.9"}</div>
                                    <div className="mx-[2px] w-3">
                                        {" "}
                                        <img src={imgStar} alt="" />
                                    </div>
                                    <div className="text-blueBtn text-sm">
                                        {"(65)"}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* color */}
                        <div className="mb-3">
                            <div className="flex flex-wrap ">
                                {colors.map((color, index) => {
                                    return (
                                        <ColorOption
                                            key={index}
                                            active={
                                                border == color.id
                                                    ? true
                                                    : false
                                            }
                                            color={color}
                                            onclick={(item) =>
                                                handleChangeColor(item)
                                            }
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        {/* size */}
                        <div className="mb-3">
                            <div className="flex flex-wrap ">
                                <SizeOption />
                            </div>
                        </div>
                        {/* name */}
                        <h3 className=" text-sm mb-3 font-medium">
                            <a href="#">{product.name}</a>
                        </h3>
                        <div className="flex text-sm font-bold">
                            <div className="mr-3">149.000đ</div>

                            <del className="mr-3 text-[#c4c4c4] line-through">
                                289.000đ
                            </del>
                            <div className="mr-3 text-red-600">-48%</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
