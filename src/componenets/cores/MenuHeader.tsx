import React, { useState } from "react";
import { SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
    {
        label: "Áo Nam",
        key: "1",
        icon: <SettingOutlined />,
        children: [
            {
                label: "Option 1",
                key: "setting:1",
            },
            {
                label: "Option 2",
                key: "setting:2",
            },
        ],
    },
];

const MenuHeader: React.FC = () => {
    const [current, setCurrent] = useState("mail");

    const onClick: MenuProps["onClick"] = (e) => {
        // console.log("click ", e);
        setCurrent(e.key);
    };

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />
    );
};

export default MenuHeader;
