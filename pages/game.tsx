import React, { useEffect, useState, useMemo } from "react";
import { css } from "@emotion/react";
import Button from "../components/button";
import Link from "next/link";
const all = css`
  margin: 0px;
  padding: 0px;
  background-image: linear-gradient(to bottom, #5c1ea6 0%, #c8435e 100%);
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
`;
const glass = css`
  width: 300px;
  height: 30%;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 20px auto;
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
  margin: 25px auto;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;

const nextButton = css`
  background-color: white;
  width: 180px;
  height: 60px;
  border-radius: 15px;
  box-shadow: 0px 7px 0px 0px rgba(0, 0, 0, 0.6);
  margin: 0px auto;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;
const darkStartButton = css`
  background-color: rgba()
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
  height: 30px;
`;
const answerPlace = css`
  display: flex;
  width: 100%;
  height: 55%;
`;
const answerButtons = css`
  margin: 10px auto;
  display: flex;
`;
const answerNormalButtons = css`
  margin: 30px 0px;
`;
const answerSharpButtons = css`
  margin: 53px 0px;
`;
const pianoButtons = css``;
const piano = css`
  margin: 20px 0px;
`;
const whiteKey = css`
  width: 90px;
  height: 35px;
  background-color: white;
  border-bottom: 1px solid #000;
  border-radius: 0px 2px 2px 0px;
`;

const blackKey = css`
  width: 65px;
  height: 26px;
  background-color: black;
  margin: -13px 0px;
  border-radius: 0px 2px 2px 0px;
  z-index: 2;
  position: relative;
`;
const pianoSideTop = css`
  width: 120px;
  height: 35px;
  background-color: #000000;
  border-radius: 0px 20px 0px 0px;
`;
const pianoSideBottom = css`
  width: 120px;
  height: 35px;
  background-color: #000000;
  border-radius: 0px 0px 20px 0px;
`;

const ulButton = css`
  padding-inline-start: 5px;
`;

const Game = () => {
  const [aaaa, setA] = useState<HTMLAudioElement>(null);

  useEffect(() => {
    setA(new Audio("MikuC.mp3"));
    setPianoA3(new Audio("PianoA3.mp3"));
    setPianoB3(new Audio("PianoB3.mp3"));
    setPianoC3(new Audio("PianoC3.mp3"));
    setPianoD3(new Audio("PianoD3.mp3"));
    setPianoE3(new Audio("PianoE3.mp3"));
    setPianoF3(new Audio("PianoF3.mp3"));
    setPianoG3(new Audio("PianoG3.mp3"));
    setPianoC4(new Audio("PianoC4.mp3"));
    setPianoASharp3(new Audio("PianoASharp3.mp3"));
    setPianoCSharp3(new Audio("PianoCSharp3.mp3"));
    setPianoDSharp3(new Audio("PianoDSharp3.mp3"));
    setPianoFSharp3(new Audio("PianoFSharp3.mp3"));
    setPianoGSharp3(new Audio("PianoGSharp3.mp3"));
  }, []);

  const [pianoASharp3, setPianoASharp3] = useState<HTMLAudioElement>(null);
  const [pianoA3, setPianoA3] = useState<HTMLAudioElement>(null);
  const [pianoB3, setPianoB3] = useState<HTMLAudioElement>(null);
  const [pianoCSharp3, setPianoCSharp3] = useState<HTMLAudioElement>(null);
  const [pianoC3, setPianoC3] = useState<HTMLAudioElement>(null);
  const [pianoC4, setPianoC4] = useState<HTMLAudioElement>(null);
  const [pianoDSharp3, setPianoDSharp3] = useState<HTMLAudioElement>(null);
  const [pianoD3, setPianoD3] = useState<HTMLAudioElement>(null);
  const [pianoE3, setPianoE3] = useState<HTMLAudioElement>(null);
  const [pianoFSharp3, setPianoFSharp3] = useState<HTMLAudioElement>(null);
  const [pianoF3, setPianoF3] = useState<HTMLAudioElement>(null);
  const [pianoGSharp3, setPianoGSharp3] = useState<HTMLAudioElement>(null);
  const [pianoG3, setPianoG3] = useState<HTMLAudioElement>(null);
  const MaxQuestionNumber = 8;
  const [boolJudgedAnswer, setBoolJudgedAnswer] = useState([]);
  // const [boolJudgedAnswer, setBoolJudgedAnswer] = useState<boolean[]>(null);

  const [selectAnswer, setSelectAnswer] = useState([]);
  const randomNum = (max: number) => {
    let QArray = [];
    for (let i = 0; i < MaxQuestionNumber; i++) {
      QArray.push(Math.floor(Math.random() * max));
    }
    return QArray;
  };

  const QuestionArray = useMemo(() => randomNum(13), []);
  const [questionNum, setQuestionNum] = useState(0);

  const [showButton, setShowButton] = useState(false);
  const AnswerCheck = (text: string) => {
    if (Sounds[QuestionArray[questionNum]].value === text) {
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
    if (Sounds[QuestionArray[questionNum]].value === selectedAnswer) {
      setCorrectAnswerNum((prev) => prev + 1);
    }
    if (Sounds[QuestionArray[questionNum]].value === selectedAnswer) {
      setBoolJudgedAnswer([...boolJudgedAnswer, true]);
    } else {
      setBoolJudgedAnswer([...boolJudgedAnswer, false]);
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
    const answers = QuestionArray.map((question) => Sounds[question].value);
    localStorage.setItem("hoge", hoge);
    localStorage.setItem("selectAnswer", JSON.stringify(selectAnswer));
    localStorage.setItem(
      "MaxQuestionNumber",
      JSON.stringify(MaxQuestionNumber)
    );
    localStorage.setItem("correctAnswerNum", JSON.stringify(correctAnswerNum));
    localStorage.setItem("correctAnswerValue", JSON.stringify(answers));
    localStorage.setItem("boolJudgedAnswer", JSON.stringify(boolJudgedAnswer));
  };

  const Sounds = [
    {
      id: 1,
      label: "C",
      file: pianoC4,
      value: "c4",
      isSharp: false,
      isExist: true,
    },
    {
      id: 2,
      label: "B#",
      file: null,
      value: "bs3",
      isSharp: true,
      isExist: false,
    },
    {
      id: 3,
      label: "B",
      file: pianoB3,
      value: "b3",
      isSharp: false,
      isExist: true,
    },
    {
      id: 4,
      label: "A#",
      file: pianoASharp3,
      value: "as3",
      isSharp: true,
      isExist: true,
    },
    {
      id: 5,
      label: "A",
      file: pianoA3,
      value: "a3",
      isSharp: false,
      isExist: true,
    },
    {
      id: 6,
      label: "G#",
      file: pianoGSharp3,
      value: "gs3",
      isSharp: true,
      isExist: true,
    },
    {
      id: 7,
      label: "G",
      file: pianoG3,
      value: "g3",
      isSharp: false,
      isExist: true,
    },
    {
      id: 8,
      label: "F#",
      file: pianoFSharp3,
      value: "fs3",
      isSharp: true,
      isExist: true,
    },
    {
      id: 9,
      label: "F",
      file: pianoF3,
      value: "f3",
      isSharp: false,
      isExist: true,
    },
    {
      id: 10,
      label: "E#",
      file: null,
      value: "es3",
      isSharp: true,
      isExist: false,
    },
    {
      id: 11,
      label: "E",
      file: pianoE3,
      value: "e3",
      isSharp: false,
      isExist: true,
    },
    {
      id: 12,
      label: "D#",
      file: pianoDSharp3,
      value: "ds3",
      isSharp: true,
      isExist: true,
    },
    {
      id: 13,
      label: "D",
      file: pianoD3,
      value: "d3",
      isSharp: false,
      isExist: true,
    },
    {
      id: 14,
      label: "C#",
      file: pianoCSharp3,
      value: "cs3",
      isSharp: true,
      isExist: true,
    },
    {
      id: 15,
      label: "C",
      file: pianoC3,
      value: "c3",
      isSharp: false,
      isExist: true,
    },
  ];

  const a = "a";
  const b = Sounds.filter((item) => {
    if (item.isSharp === false) {
      return item;
    }
  });
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
          {Sounds.map((item) => (
            <div key={item.id}>
              {!item.isSharp && <div css={whiteKey}></div>}
              {item.isSharp && item.isExist && <div css={blackKey}></div>}
              {item.isSharp && !item.isExist && <div></div>}
            </div>
          ))}
          <div css={pianoSideBottom}></div>
        </div>
        <div css={answerButtons}>
          <div css={answerNormalButtons}>
            <ul css={ulButton}>
              {Sounds.filter((item) => !item.isSharp).map((item, index) => (
                <div css={answerButton} key={item.id}>
                  <Button
                    label={item.label}
                    handleAnswer={handleAnwerButton}
                    handleAnswerArg={item.value}
                    Answer={
                      Sounds[QuestionArray[questionNum]].value === item.value
                        ? true
                        : false
                    }
                    questionNum={questionNum}
                    musicFile={item.file}
                    isExist={item.isExist}
                    id={item.id}
                  ></Button>
                </div>
              ))}
            </ul>
          </div>
          <div css={answerSharpButtons}>
            <ul css={ulButton}>
              {Sounds.filter((item) => item.isSharp).map((item, index) => (
                <div css={answerButton} key={item.id}>
                  <Button
                    label={item.label}
                    handleAnswer={handleAnwerButton}
                    handleAnswerArg={item.value}
                    Answer={
                      Sounds[QuestionArray[questionNum]].value === item.value
                        ? true
                        : false
                    }
                    questionNum={questionNum}
                    musicFile={item.file}
                    isExist={item.isExist}
                    id={item.id}
                  ></Button>
                </div>
              ))}
            </ul>
          </div>
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
                css={nextButton}
                onClick={() => {
                  MakeSendValue();
                  console.log(boolJudgedAnswer);
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
