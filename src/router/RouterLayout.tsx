import React from "react";
import { IRouter } from "../@type/router.type";
import { Footer } from "../componenets/layouts";

const RouterLayout: IRouter[] = [
    {
        name: "Homepage",
        path: "",
        index: true,
        public: true,
        children: [],
        element: () => <Footer />,
    },
];

export default RouterLayout;
