import { useState, Fragment, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Footer from "./componenets/layouts/Footer";
import Diary from "./modules/Home/Diary";
import Services from "./modules/Home/Services";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HashTag from "./modules/Home/HashTag";
import { ScrollToTop } from "./componenets/cores";
import CareAndShare from "./modules/Home/CareAndShare";
import Brands from "./modules/Home/Brands";
import Basic from "./modules/Home/Basic";
import Product from "./componenets/layouts/Product";
import ListOfProducts from "./modules/Products/ListOfProducts";
import MainCart from "./modules/Cart/Main";
import Header from "./componenets/layouts/Header";
import MainProductDetail from "./modules/ProductDetail/Main";
import "./sass/App.scss";
import { handelRecursion } from "./router/HandleRenderRouter";
import { Loader } from "./componenets/cores";
import RouterView from "./router/router";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Suspense fallback={<Loader />}>
                <Routes>
                    {RouterView.map((router, index) => {
                        return (
                            <Route
                                key={index}
                                path={router.path}
                                element={<router.element />}
                            >
                                {handelRecursion(router)}
                            </Route>
                        );
                    })}
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
