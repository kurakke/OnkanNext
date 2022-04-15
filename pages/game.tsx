import React, { useState } from "react";
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
  width: 80vw;
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
const answerButton = css`
  margin: 20px 0;
`;

const Game = () => {
  const [MusicA3] = useState(
    typeof Audio !== "undefined" && new Audio("MikuA.mp3")
  );
  const [MusicB3] = useState(
    typeof Audio !== "undefined" && new Audio("MikuB.mp3")
  );
  const [MusicC3] = useState(
    typeof Audio !== "undefined" && new Audio("MikuC.mp3")
  );
  const [MusicD3] = useState(
    typeof Audio !== "undefined" && new Audio("MikuD.mp3")
  );
  const [MusicE3] = useState(
    typeof Audio !== "undefined" && new Audio("MikuE.mp3")
  );
  const [MusicF3] = useState(
    typeof Audio !== "undefined" && new Audio("MikuF.mp3")
  );
  const [MusicG3] = useState(
    typeof Audio !== "undefined" && new Audio("MikuG.mp3")
  );
  const [MusicC2] = useState(
    typeof Audio !== "undefined" && new Audio("MikuHc.mp3")
  );

  const AnswerCheck = (text: string) => {
    console.log("true!!!!!!");
    console.log({ text });
  };
  const [answerLog, setAnswerLog] = useState([]);
  const handleAnwerButton = (answer: string) => {
    AnswerCheck(answer);
    // setAnswerLog([...answerLog, answer]);
    console.log("yahharo");
  };

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

  const Sounds = [
    { file: MusicC3, ans: "c3" },
    { file: MusicD3, ans: "d3" },
    { file: MusicE3, ans: "e3" },
    { file: MusicF3, ans: "f3" },
    { file: MusicG3, ans: "g3" },
    { file: MusicA3, ans: "a3" },
    { file: MusicB3, ans: "b3" },
    { file: MusicC2, ans: "c2" },
  ];
  const Choices = [
    { label: "c", value: "c3" },
    { label: "d", value: "d3" },
    { label: "e", value: "e3" },
    { label: "f", value: "f3" },
    { label: "g", value: "g3" },
    { label: "a", value: "a3" },
    { label: "b", value: "b3" },
    { label: "c", value: "c2" },
  ];
  const b = true;
  const a = "a";
  return (
    <div css={all}>
      <div css={glass}>
        <Slider {...settings}>
          {QuestionArray.map((item) => {
            return (
              <div css={slider}>
                <button
                  css={startButton}
                  onClick={() => {
                    Sounds[QuestionArray[item]].file.play();
                    console.log(QuestionArray);
                  }}
                >
                  <p css={start}>音を再生</p>
                </button>
              </div>
            );
          })}
        </Slider>
      </div>
      <div css={buttons}>
        {Choices.map((item) => (
          <div>
            <Button
              disable={answerLog.includes(item.value)}
              label={item.label}
              onClick={handleAnwerButton(item.value)}
            ></Button>
          </div>
        ))}
      </div>
      <button>
        
      </button>
    </div>
  );
};

export default Game;
let a  = 1;