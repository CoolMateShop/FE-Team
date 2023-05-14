import React from "react";

const Button = ({ title }: { title: string }) => {
    return (
        <div className="bg-blueBtn inline-flex justify-center items-center">
            {" "}
            {title}
        </div>
    );
};

export default Button;
