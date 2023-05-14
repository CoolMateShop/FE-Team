import { useState, Fragment } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Footer from "./componenets/cores/layouts/footer/Footer";
import Loader from "./componenets/cores/Loader";
// import AdminLogin from "./pages/admin/Login/AdminLogin";
import AdminLayout from "./componenets/cores/layouts/AdminLayout";
// import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return <AdminLayout />;
}

export default App;
