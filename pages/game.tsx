import React, { useEffect, useState, useMemo } from "react";
import { css } from "@emotion/react";
import Button from "../components/button";
import Link from "next/link";
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
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;
const start = css`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;
const answerButton = css`
  margin: 5px auto;
`;
const answerPlace = css`
  display: flex;
  width: 100%;
`;
const buttons = css`
  margin: 10px auto;
`;
const pianoButtons = css``;
const piano = css`
  margin: 20px 0px;
`;
const whiteKey = css`
  width: 25vw;
  height: 30px;
  background-color: white;
  border-bottom: 1px solid #000;
  border-radius: 0px 2px 2px 0px;
`;
const blackKey = css`
  width: 17vw;
  height: 26px;
  background-color: black;
  margin: -13px 0px;
  border-radius: 0px 2px 2px 0px;
  z-index: 2;
  position: relative;
`;
const pianoSideTop = css`
  width: 30vw;
  height: 35px;
  background-color: #000000;
  border-radius: 0px 20px 0px 0px;
`;
const pianoSideBottom = css`
  width: 30vw;
  height: 35px;
  background-color: #000000;
  border-radius: 0px 0px 20px 0px;
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
  const MaxQuestionNumber = 8;
  const randomNum = (max: number) => {
    let QArray = [];
    for (let i = 0; i < MaxQuestionNumber; i++) {
      QArray.push(Math.floor(Math.random() * max));
    }
    return QArray;
  };
  const [selectAnswer, setSelectAnswer] = useState([]);

  const QuestionArray = useMemo(() => randomNum(8), []);
  const [questionNum, setQuestionNum] = useState(0);

  const [showButton, setShowButton] = useState(false);
  const AnswerCheck = (text: string) => {
    if (Sounds[QuestionArray[questionNum]].ans === text) {
      setShowButton(true);
    }
  };
  const [correctAnswerNum, setCorrectAnswerNum] = useState(0);
  const [clicked, setClicked] = useState(true);
  const clear = () => {
    setClicked(true);
  };

  const firstOnClick = (selectedAnswer: string) => {
    setSelectAnswer([...selectAnswer, selectedAnswer]);
    if (Sounds[QuestionArray[questionNum]].ans === selectedAnswer) {
      setCorrectAnswerNum((prev) => prev + 1);
    }
  };
  const handleAnwerButton = (answer: string) => {
    AnswerCheck(answer);
    if (clicked) {
      firstOnClick(answer);
      setClicked(false);
    }
  };
  const [hoge, setHoge] = useState("yahharo-");

  const MakeSendValue = () => {
    const answers = QuestionArray.map((question) => Sounds[question].ans);
    localStorage.setItem("hoge", hoge);
    localStorage.setItem("selectAnswer", JSON.stringify(selectAnswer));
    localStorage.setItem(
      "MaxQuestionNumber",
      JSON.stringify(MaxQuestionNumber)
    );
    localStorage.setItem("correctAnswerNum", JSON.stringify(correctAnswerNum));
    localStorage.setItem("correctAnswerValue", JSON.stringify(answers));
  };

  const Sounds = [
    { id: 1, file: MusicC3, ans: "c3" },
    { id: 2, file: MusicD3, ans: "d3" },
    { id: 3, file: MusicE3, ans: "e3" },
    { id: 4, file: MusicF3, ans: "f3" },
    { id: 5, file: MusicG3, ans: "g3" },
    { id: 6, file: MusicA3, ans: "a3" },
    { id: 7, file: MusicB3, ans: "b3" },
    { id: 8, file: MusicC2, ans: "c2" },
  ];
  const Choices = [
    { id: 1, label: "c", value: "c3" },
    { id: 2, label: "d", value: "d3" },
    { id: 3, label: "e", value: "e3" },
    { id: 4, label: "f", value: "f3" },
    { id: 5, label: "g", value: "g3" },
    { id: 6, label: "a", value: "a3" },
    { id: 7, label: "b", value: "b3" },
    { id: 8, label: "c", value: "c2" },
  ];
  const b = true;
  const a = "a";
  return (
    <div css={all}>
      <div css={glass}>
        <div css={slider}>
          <div>
            <p>{questionNum + 1}問目</p>
          </div>
          <button
            css={startButton}
            onClick={() => {
              Sounds[QuestionArray[questionNum]].file.play();
              console.log(QuestionArray);
            }}
          >
            <p css={start}>音を再生</p>
          </button>
        </div>
      </div>
      <div css={answerPlace}>
        <div css={piano}>
          <div css={pianoSideTop}></div>
          <div css={whiteKey}></div>
          <div css={whiteKey}></div>
          <div css={blackKey}></div>
          <div css={whiteKey}></div>
          <div css={blackKey}></div>
          <div css={whiteKey}></div>
          <div css={blackKey}></div>
          <div css={whiteKey}></div>
          <div css={whiteKey}></div>
          <div css={blackKey}></div>
          <div css={whiteKey}></div>
          <div css={blackKey}></div>
          <div css={whiteKey}></div>
          <div css={pianoSideBottom}></div>
        </div>
        <div css={buttons}>
          <ul>
            {Choices.map((item, index) => (
              <div css={answerButton} key={item.id}>
                <Button
                  label={item.label}
                  handleAnswer={handleAnwerButton}
                  handleAnswerArg={item.value}
                  Answer={
                    Sounds[QuestionArray[questionNum]].ans === item.value
                      ? true
                      : false
                  }
                  questionNum={questionNum}
                  musicFile={Sounds[index].file}
                ></Button>
              </div>
            ))}
          </ul>
        </div>
      </div>

      {(() => {
        if (showButton) {
          if (questionNum < MaxQuestionNumber - 1) {
            return (
              <button
                css={startButton}
                onClick={() => {
                  setQuestionNum(questionNum + 1);
                  setShowButton(false);
                  clear();
                }}
              >
                次へ
              </button>
            );
          } else {
            return (
              <button
                css={startButton}
                onClick={() => {
                  MakeSendValue();
                }}
              >
                <Link href={"/result"}>結果を見る</Link>
              </button>
            );
          }
        } else {
          return <div></div>;
        }
      })()}
    </div>
  );
};
export default Game;
