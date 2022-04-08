import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  width: 50vw;
  height: 60vh;
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

const Game = () => {
  let MikuA: HTMLAudioElement;
  let MikuB: HTMLAudioElement;
  let MikuC: HTMLAudioElement;
  let MikuD: HTMLAudioElement;
  let MikuE: HTMLAudioElement;
  let MikuF: HTMLAudioElement;
  let MikuG: HTMLAudioElement;
  let MikuHc: HTMLAudioElement;

  useEffect(() => {
    MikuA = new Audio("./MikuA.mp3");
    MikuB = new Audio("./MikuB.mp3");
    MikuC = new Audio("./MikuC.mp3");
    MikuD = new Audio("./MikuD.mp3");
    MikuE = new Audio("./MikuE.mp3");
    MikuF = new Audio("./MikuF.mp3");
    MikuG = new Audio("./MikuG.mp3");
    MikuHc = new Audio("./MikuHc.mp3");
  }, []);
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
    { key: 1, file: MikuC, ans: "c" },
    { key: 2, file: MikuD, ans: "d" },
    { key: 3, file: MikuE, ans: "e" },
    { key: 4, file: MikuF, ans: "f" },
    { key: 5, file: MikuG, ans: "g" },
    { key: 6, file: MikuA, ans: "a" },
    { key: 7, file: MikuB, ans: "b" },
    { key: 8, file: MikuHc, ans: "hc" },
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
                    answer[QuestionArray[item]].file.play;
                  }}
                >
                  <p css={start}>音を再生</p>
                </button>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Game;
