import React from "react";
import { css } from "@emotion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import SampleNextArrow from "../components/nextArrow";
const all = css`
  margin: 0px;
  padding: 0px;
  background-image: linear-gradient(to bottom, #5c1ea6 0%, #c8435e 100%);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;
  text-align: center;
`;
const glass = css`
  width: 70%;
  height: 60%;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 auto;
  top: 80px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  padding: 0 30px;
`;
const startButton = css`
  background-color: white;
  width: 180px;
  height: 60px;
  border-radius: 15px;
  box-shadow: 0px 7px 0px 0px rgba(0, 0, 0, 0.6);
  margin: 40px auto;
`;
const start = css`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;
const slider = css`
  text-align: center;
  margin: 50px auto;
  width: 100%;
`;
const image = css`
  margin: 0 auto;
  max-width: 100%;
`;

const title = css``;
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrow: true,
  autoplay: false,
  nextArrow: <SampleNextArrow></SampleNextArrow>,
};
const items = [
  { id: 1, title: "name1", img: "./favicon.ico" },
  { id: 2, title: "name2", img: "./favicon.ico" },
  { id: 3, title: "name3", img: "./favicon.ico" },
  { id: 4, title: "name4", img: "./favicon.ico" },
  { id: 5, title: "name5", img: "./favicon.ico" },
  { id: 6, title: "name6", img: "./favicon.ico" },
];
const Main = () => {
  return (
    <div css={all}>
      <div>
        <h1 css={title}>onkan</h1>
      </div>
      <div css={glass}>
        <Slider {...settings}>
          {items.map((item) => {
            return (
              <div css={slider} key={item.id}>
                <img src={item.img} css={image} />
                <h3>{item.title}</h3>
              </div>
            );
          })}
        </Slider>
      </div>
      <button css={startButton}>
        <Link href={"/game"}>
          <p css={start}>開始</p>
        </Link>
      </button>
    </div>
  );
};
export default Main;
