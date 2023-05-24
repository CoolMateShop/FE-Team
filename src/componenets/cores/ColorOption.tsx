import React, { useState } from "react";

const ColorOption = ({
    color,
    active,
    onclick,
}: {
    color: productDetail;
    active: boolean;
    onclick: (data: productDetail) => void;
}) => {
    const colorStyle = {
        backgroundColor: color.colorValue,
    };
    const borderStyle = {
        display: "block",
        before: {
            content: "",
            display: "inline-block",
            width: "400px",
            height: "560px",
            border: active ? "2px" : "0px",
        },
    };
    return (
        <>
            <div
                onClick={() => onclick(color)}
                style={borderStyle}
                className="relative before:transition-all  before:rounded-xl before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-solid before:border-black"
            >
                <div
                    className="w-9 h-5 rounded-lg ml:rounded-xl mx-1 my-1"
                    style={colorStyle}
                ></div>
            </div>
        </>
    );
};

export default ColorOption;
