import React from "react";
import img from "../../assets/images/ao-the-thao.jpg";
import imgStar from "../../assets/images/star.svg";
import Product from "../../componenets/layouts/Product";

function ListOfProducts() {
    const products: product[] = [
        {
            id: 1,
            name: "Áo Polo nam co giãn công nghệ Graphene",
            category: {
                id: 1,
                name: "Polo Shirt",
            },
            product_details: [
                {
                    id: 1,
                    product_id: 1,
                    in_stock: 50,
                    price: 329,
                    size: "S",
                    sold: 200,
                    colorValue: "#4975a9",
                    colorName: "Xanh aqua",
                    update_at: null,
                    images: [
                        {
                            id: 1,
                            product_details_id: 1,
                            name: "poloaqua1.png",
                        },
                        {
                            id: 2,
                            product_details_id: 1,
                            name: "poloaqua2.png",
                        },
                    ],
                },

                {
                    id: 3,
                    product_id: 1,
                    in_stock: 50,
                    price: 329,
                    size: "XL",
                    sold: 0,
                    colorValue: "#223249",
                    colorName: "Xanh navy",
                    update_at: null,
                    images: [
                        {
                            id: 5,
                            product_details_id: 2,
                            name: "xanhbongdem1.png",
                        },
                        {
                            id: 6,
                            product_details_id: 2,
                            name: "xanhbongdem2.png",
                        },
                    ],
                },
                {
                    id: 2,
                    product_id: 1,
                    in_stock: 50,
                    price: 329,
                    size: "XL",
                    sold: 200,
                    colorValue: "#4975a9",
                    colorName: "Xanh aqua",
                    update_at: null,
                    images: [
                        {
                            id: 1,
                            product_details_id: 1,
                            name: "poloaqua1.png",
                        },
                        {
                            id: 2,
                            product_details_id: 1,
                            name: "poloaqua2.png",
                        },
                    ],
                },
            ],
        },
    ];
    return (
        <div className="py-5 px-2 ml:px-4 ml:py-7 max-w-full ">
            <div className="flex flex-wrap flex-row">
                <div className="relative w-1/2 px-1 py-1 md:w-1/3 ml:w-1/4 pb-3">
                    <img src={img} alt="" className="h-full rounded-3xl" />
                </div>
                {products.map((product, index) => {
                    return <Product key={index} product={product} />;
                })}
            </div>
        </div>
    );
}

export default ListOfProducts;
