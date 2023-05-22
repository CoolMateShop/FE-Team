import { Avatar, Dropdown, message, Space, MenuProps, Menu } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

export const handleClick = () => {
    console.log("logout");
};
export const items: MenuProps["items"] = [
    {
        label: <p onClick={handleClick}>Logout</p>,
        key: "1",
        icon: <LogoutOutlined />,
    },
];
