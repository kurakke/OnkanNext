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
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 55%;
  @media (max-width: 475px) {
    justify-content: flex-end;
    padding-right: 16px;
  } ;
`;
const answerButtons = css`
  margin: 10px 0;
  display: flex;
`;
const answerNormalButtons = css`
  margin: 30px 0px;
`;
const answerSharpButtons = css`
  margin: 53px 0px;
`;
const grandPiano = css`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
`;
const pianoBoard = css`
  width: 30%;
  background-color: black;
`;
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
const unknownButton = css`
  visibility: hidden;
  width: 80px;
  height: 28px;
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
  const [boolJudgedAnswer, setBoolJudgedAnswer] = useState<boolean[]>([]);

  const [selectAnswer, setSelectAnswer] = useState([]);
  const randomNum = (max: number) => {
    let QArray = [];
    for (let i = 0; i < MaxQuestionNumber; i++) {
      QArray.push(Math.floor(Math.random() * max));
    }
    return QArray;
  };

  const QuestionArray = useMemo(() => randomNum(12), []);
  const [questionNum, setQuestionNum] = useState(0);

  const [showButton, setShowButton] = useState(false);
  const AnswerCheck = (answer: number) => {
    if (Sounds[QuestionArray[questionNum]].value === Sounds[answer].value) {
      setShowButton(true);
    }
  };
  const [correctAnswerNum, setCorrectAnswerNum] = useState<number>(0);
  const [clicked, setClicked] = useState(true);
  const clear = () => {
    setClicked(true);
  };

  const firstOnClick = (selectIndex: number) => {
    setSelectAnswer([...selectAnswer, Sounds[selectIndex].label]);
    if (
      Sounds[QuestionArray[questionNum]].value === Sounds[selectIndex].value
    ) {
      setCorrectAnswerNum((prev) => prev + 1);
    }
    if (
      Sounds[QuestionArray[questionNum]].value === Sounds[selectIndex].value
    ) {
      setBoolJudgedAnswer([...boolJudgedAnswer, true]);
    } else {
      setBoolJudgedAnswer([...boolJudgedAnswer, false]);
    }
  };
  const handleAnwerButton = (answer: number) => {
    AnswerCheck(answer);
    if (clicked) {
      firstOnClick(answer);
      setClicked(false);
    }
  };

  const MakeSendValue = () => {
    const answers = QuestionArray.map((question) => Sounds[question].label);
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
      id: 0,
      label: "C",
      file: pianoC4,
      value: "c4",
      isSharp: false,
    },

    {
      id: 1,
      label: "B",
      file: pianoB3,
      value: "b3",
      isSharp: false,
    },
    {
      id: 2,
      label: "A#",
      file: pianoASharp3,
      value: "as3",
      isSharp: true,
    },
    {
      id: 3,
      label: "A",
      file: pianoA3,
      value: "a3",
      isSharp: false,
    },
    {
      id: 4,
      label: "G#",
      file: pianoGSharp3,
      value: "gs3",
      isSharp: true,
    },
    {
      id: 5,
      label: "G",
      file: pianoG3,
      value: "g3",
      isSharp: false,
    },
    {
      id: 6,
      label: "F#",
      file: pianoFSharp3,
      value: "fs3",
      isSharp: true,
    },
    {
      id: 7,
      label: "F",
      file: pianoF3,
      value: "f3",
      isSharp: false,
    },

    {
      id: 8,
      label: "E",
      file: pianoE3,
      value: "e3",
      isSharp: false,
    },
    {
      id: 9,
      label: "D#",
      file: pianoDSharp3,
      value: "ds3",
      isSharp: true,
    },
    {
      id: 10,
      label: "D",
      file: pianoD3,
      value: "d3",
      isSharp: false,
    },
    {
      id: 11,
      label: "C#",
      file: pianoCSharp3,
      value: "cs3",
      isSharp: true,
    },
    {
      id: 12,
      label: "C",
      file: pianoC3,
      value: "c3",
      isSharp: false,
    },
  ];
  const Key = [
    Sounds[0],
    null,
    Sounds[1],
    Sounds[2],
    Sounds[3],
    Sounds[4],
    Sounds[5],
    Sounds[6],
    Sounds[7],
    null,
    Sounds[8],
    Sounds[9],
    Sounds[10],
    Sounds[11],
    Sounds[12],
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
            <p>{questionNum + 1}??????</p>
          </div>
          <button
            css={startButton}
            onClick={() => {
              Sounds[QuestionArray[questionNum]].file.play();
              console.log(QuestionArray);
            }}
          >
            <p css={start}>????????????</p>
          </button>
        </div>
      </div>

      <div css={answerPlace}>
        <div css={grandPiano}>
          <div css={pianoBoard}></div>
          <div css={piano}>
            <div css={pianoSideTop}></div>
            {Key.map((item) =>
              item ? (
                <div key={item.id}>
                  {!item.isSharp && <div css={whiteKey}></div>}
                  {item.isSharp && <div css={blackKey}></div>}
                </div>
              ) : (
                <div />
              )
            )}
            <div css={pianoSideBottom}></div>
          </div>
        </div>
        <div css={answerButtons}>
          <div css={answerNormalButtons}>
            <ul css={ulButton}>
              {Key.filter((item) => item && !item.isSharp).map(
                (item, index) => (
                  <div css={answerButton} key={item.id}>
                    <Button
                      label={item.label}
                      handleAnswer={handleAnwerButton}
                      handleAnswerArg={item.id}
                      Answer={
                        Sounds[QuestionArray[questionNum]].value === item.value
                          ? true
                          : false
                      }
                      questionNum={questionNum}
                      musicFile={item.file}
                      id={item.id}
                    ></Button>
                  </div>
                )
              )}
            </ul>
          </div>
          <div css={answerSharpButtons}>
            <ul css={ulButton}>
              {Key.filter((item) => !item || item.isSharp).map((item, index) =>
                item ? (
                  <div css={answerButton} key={item.id}>
                    <Button
                      label={item.label}
                      handleAnswer={handleAnwerButton}
                      handleAnswerArg={item.id}
                      Answer={
                        Sounds[QuestionArray[questionNum]].value === item.value
                          ? true
                          : false
                      }
                      questionNum={questionNum}
                      musicFile={item.file}
                      id={item.id}
                    ></Button>
                  </div>
                ) : (
                  <div css={unknownButton} />
                )
              )}
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
                ??????
              </button>
            );
          } else {
            return (
              <button
                css={nextButton}
                onClick={() => {
                  MakeSendValue();
                }}
              >
                <Link href={"/result"}>???????????????</Link>
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
