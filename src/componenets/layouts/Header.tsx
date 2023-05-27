import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import iconSearch from "../../assets/images/icons/icon-search.svg";
import iconAccount from "../../assets/images/icons/icon-account.svg";
import iconCart from "../../assets/images/icons/icon-cart.svg";
import MenuHeader from "../cores/MenuHeader";
import axios from "axios";
import { DEV_URL } from "../../@type/api.type";
import { getAllCategories } from "../../services/header";
import { Loader } from "../cores";
import { Link, useNavigate } from "react-router-dom";
function Header() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState<category[]>();
    const [loading, setLoading] = useState<boolean>(false);
    const [search, setSearch] = useState<string>();
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };
    const handleNavigate = () => {
        navigate({
            pathname: "/search",
            search: `?keyword=${search}&page=${1}`,
        });
    };
    useEffect(() => {
        getAllCategories().then((data) => {
            setCategories(data);
        });
        setLoading(true);
    }, []);

    return (
        <>
            <div className="flex justify-between items-center w-full border-b-2 border-grayText h-16 pl-4 pr-4 mb-10">
                {/* logo */}
                <div className="">
                    <Link to="">
                        <img className="w-1/2" src={logo} alt="" />
                    </Link>
                </div>
                <div className="">
                    {loading ? (
                        categories ? (
                            <MenuHeader categories={categories} />
                        ) : (
                            ""
                        )
                    ) : (
                        <Loader />
                    )}
                    {}
                </div>
                {/* search menu */}
                <div className="relative flex justify-start">
                    {/* search */}
                    {search ? (
                        // <Link to={`search/keyword=${search}&page=${1}`}>
                        // </Link>
                        <button
                            onClick={handleNavigate}
                            className="absolute top-1/4 left-2 "
                        >
                            <img src={iconSearch} alt="" />
                        </button>
                    ) : (
                        ""
                    )}

                    <input
                        type="text"
                        placeholder="Tên sản phẩm cần tìm"
                        name="search"
                        onChange={changeHandler}
                        className="bg-white border-solid border-2 rounded-2xl h-10 w-full py-1 pl-10"
                    />
                </div>

                {/* account and cart */}
                <div className="flex ">
                    {/* account */}
                    <div className="w-10 h-10 flex justify-center items-center">
                        <img src={iconAccount} alt="" />
                    </div>
                    {/* cart */}
                    <div className="w-10 h-10">
                        <Link to="cart">
                            {" "}
                            <img src={iconCart} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
