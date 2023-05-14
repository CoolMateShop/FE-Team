import { useState, Fragment } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Footer from "./componenets/layouts/Footer";
import Diary from "./modules/Home/Diary";
import Services from "./modules/Home/Services";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Services />
            <Diary />
            <Footer />;
        </>
    );
}

export default App;
