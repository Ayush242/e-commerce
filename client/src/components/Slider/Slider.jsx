import React, { useState } from "react";
import "./Slider.scss";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';

function Slider() {
    const [currSlide, setCurrSlide] = useState(0);

    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];

    const prevSlide = () => {
        setCurrSlide(currSlide === 0 ? data.length - 1 : (prev) => prev - 1);
    };
    const nextSlide = () => {
        setCurrSlide(currSlide === data.length - 1 ? 0 : (prev) => prev + 1);
    };

    return (
        <div className="slider">
            <div
                className="container"
                style={{ transform: `translateX(-${currSlide * 100}vw)` }}
            >
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <ChevronLeftOutlinedIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <ChevronRightOutlinedIcon />
                </div>
            </div>
        </div>
    );
}

export default Slider;
