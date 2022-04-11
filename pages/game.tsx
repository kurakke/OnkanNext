import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../components/button";

const all = css`
  margin: 0px;
  padding: 0px;
  background-image: linear-gradient(to bottom, #5c1ea6 0%, #c8435e 100%);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;
`;
const glass = css`
  width: 70vw;
  height: 28vh;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 auto;
  top: 80px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  filter: drop-shadow(3px 3px 3px 0 rgba(0, 0, 0, 0.8));
  border-radius: 25px;
`;
const slider = css`
  text-align: center;
`;
const image = css`
  margin: 0 auto;
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
const buttons = css``;
const Game = () => {

  const [MikuA] = useState(typeof Audio !== "undefined" && new Audio("MikuA.mp3"));
  const [MikuB] = useState(typeof Audio !== "undefined" && new Audio("MikuB.mp3"));
  const [MikuC] = useState(typeof Audio !== "undefined" && new Audio("MikuC.mp3"));
  const [MikuD] = useState(typeof Audio !== "undefined" && new Audio("MikuD.mp3"));
  const [MikuE] = useState(typeof Audio !== "undefined" && new Audio("MikuE.mp3"));
  const [MikuF] = useState(typeof Audio !== "undefined" && new Audio("MikuF.mp3"));
  const [MikuG] = useState(typeof Audio !== "undefined" && new Audio("MikuG.mp3"));
  const [MikuHc] = useState(typeof Audio !== "undefined" && new Audio("MikuHc.mp3"));

  let QArray = [];
  for (let i = 0; i < 8; i++) {
    QArray.push(Math.floor(Math.random() * 8));
  }
  const QuestionArray = QArray;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    autoplay: false,
  };

  const answer = [
    { file: MikuC, ans: "c" },
    { file: MikuD, ans: "d" },
    { file: MikuE, ans: "e" },
    { file: MikuF, ans: "f" },
    { file: MikuG, ans: "g" },
    { file: MikuA, ans: "a" },
    { file: MikuB, ans: "b" },
    { file: MikuHc, ans: "hc" },
  ];
  return (
    <div css={all}>
      <div css={glass}>
        <Slider {...settings}>
          {QuestionArray.map((item) => {
            return (
              <div css="slider">
                <button
                  css={startButton}
                  onClick={() => {
                    console.log(QuestionArray[item]);
                    console.log(answer[5].file);
                    console.log(answer[QuestionArray[item]].file);
                    answer[QuestionArray[item]].file.play();
                  }}
                >
                  <p css={start}>音を再生</p>
                </button>
              </div>
            );
          })}
        </Slider>
      </div>
      <Button text="c"></Button>
    </div>
  );
};

export default Game;
