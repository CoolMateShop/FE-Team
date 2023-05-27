import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../layouts";
import { ScrollToTop } from "../cores";
import { FULL_NAME } from "../../config/AppUI";

const Layout = () => {
    return (
        <>
            <Header fullName={FULL_NAME as string}/>
            {/* <Navigation /> */}
            <ScrollToTop />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
