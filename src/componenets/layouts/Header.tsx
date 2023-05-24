import React from "react";
import logo from "../../assets/images/logonhom.png";
import iconSearch from "../../assets/images/icons/icon-search.svg";
import iconAccount from "../../assets/images/icons/icon-account.svg";
import iconCart from "../../assets/images/icons/icon-cart.svg";
import MenuHeader from "../cores/MenuHeader";
function Header() {
    return (
        <>
            <div className="flex justify-between items-center w-full border-b-2 border-grayText h-16 pl-4 pr-4">
                {/* logo */}
                <div className="">
                    <img className="w-10/12" src={logo} alt="" />
                </div>
                <div className="">
                    <MenuHeader />
                </div>
                {/* search menu */}
                <div className="relative flex justify-start">
                    {/* menu */}
                    {/* search */}
                    <form action="" className="relative">
                        <button
                            type="submit"
                            className="absolute top-1/4 left-2 "
                        >
                            <img src={iconSearch} alt="" />
                        </button>
                        <input
                            type="text"
                            placeholder="Tên sản phẩm cần tìm"
                            name="search"
                            className="bg-white border-solid border-2 rounded-2xl h-10 w-full py-1 pl-10"
                        />
                    </form>
                </div>

                {/* account and cart */}
                <div className="flex ">
                    {/* account */}
                    <div className="w-10 h-10 flex justify-center items-center">
                        <img src={iconAccount} alt="" />
                    </div>
                    {/* cart */}
                    <div className="w-10 h-10">
                        <img src={iconCart} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
