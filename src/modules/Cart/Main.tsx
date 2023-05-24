import React from "react";

import CartProduct from "./CartProduct";
import PricingInfo from "./PricingInfo";
import ShippingInformation from "./ShippingInformation";
const Main = () => {
    return (
        <>
            <div className="px-1 md:flex md:px-2 ">
                <div className="w-full md:w-5/12 md:order-1 px-2">
                    <div className="mb-8 mt-2 text-3xl font-bold ">
                        {"Giỏ Hàng"}
                    </div>
                    <div>
                        <CartProduct />
                        <CartProduct />
                    </div>
                    <PricingInfo />
                </div>
                <div className="md:w-7/12 px-1 ">
                    <ShippingInformation />
                </div>
            </div>
        </>
    );
};

export default Main;
