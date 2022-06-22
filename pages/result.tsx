import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  DoughnutControllerChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Link from "next/link";

const all = css`
  margin: 0px;
  padding: 0px;
  background-image: linear-gradient(to bottom, #5c1ea6 0%, #c8435e 100%);
  width: 100vw;
  height: 100vh;
`;
const glass = css`
  width: 80vw;
  height: 90vh;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 auto;
  top: 80px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  filter: drop-shadow(3px 3px 3px 0 rgba(0, 0, 0, 0.8));
  border-radius: 25px;
`;
const doughnut = css`
  margin: 0 auto;
  width: 60vw;
  height: 60vw;
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
const a = css``;
const result = css`
  color: white;
`;

const Result = () => {
  const [selectAnswer, setSelectAnswer] = useState<string[]>(null);
  const [MaxQuestionNumber, setMaxQuestionNumber] = useState<Number>(null);
  const [correctAnswerNum, setCorrectAnswerNum] = useState<Number>(null);
  const [correctAnswerValue, setCorrectAnswerValue] = useState<string[]>(null);
  ChartJS.register(ArcElement, Tooltip, Legend);
  const [A, setA] = useState<boolean[]>(null);
  const correctAnswerPercent =
    (Number(correctAnswerNum) / Number(MaxQuestionNumber)) * 100;
  const getLocalStorage = async (key: string): Promise<string> => {
    const a = await localStorage.getItem(key);
    return a;
  };

  const judge = (
    answers: string[] | null,
    corrects: string[] | null
  ): boolean[] => {
    console.log(answers);
    console.log(corrects);

    if (answers != null) {
      const makedArray = answers.map((answer, i) => {
        if (answer === corrects[i]) {
          return true;
        } else {
          return false;
        }
      });
      console.log("if");
      return makedArray;
    }
    console.log("else ");
    return [];
  };

  useEffect(() => {
    const getLocalStorageData = async () => {
      const getDataSelectAnswer = await getLocalStorage("selectAnswer");
      const getDataMaxQuestionNumber = await getLocalStorage(
        "MaxQuestionNumber"
      );
      const getDataCorrectAnswerNum = await getLocalStorage("correctAnswerNum");
      const getDataCorrectAnswerValue = await getLocalStorage(
        "correctAnswerValue"
      );
      setSelectAnswer(JSON.parse(getDataSelectAnswer));
      setMaxQuestionNumber(JSON.parse(getDataMaxQuestionNumber));
      setCorrectAnswerNum(JSON.parse(getDataCorrectAnswerNum));
      setCorrectAnswerValue(JSON.parse(getDataCorrectAnswerValue));
    };
    getLocalStorageData();
    setA(judge(selectAnswer, correctAnswerValue));
  }, []);
  console.log(A);
  const data = {
    datasets: [
      {
        data: [correctAnswerPercent, 100 - correctAnswerPercent],
        backgroundColor: ["rgba(67, 218, 163, 1)", "rgba(0, 0, 0, 0)"],
        borderWidth: 0,
      },
    ],
  };
  const options: DoughnutControllerChartOptions = {
    circumference: 360,
    cutout: 99.9,
    animation: { animateRotate: true, animateScale: false },
    offset: 0,
    radius: "100%",
    rotation: 0,
    spacing: 0,
  };
  return (
    <div css={all}>
      <div css={glass}>
        <div css={doughnut}>
          <Doughnut data={data} options={options} />
        </div>
        <div>
          <ul>
            {correctAnswerValue &&
              correctAnswerValue.map((item, index) => (
                <div key={index} css={result}>
                  <p>
                    {index + 1}問目:{a[index] ? "o" : "x"} (
                    {selectAnswer[index]}→{item})
                  </p>
                </div>
              ))}
          </ul>
        </div>
        {/* <button css={startButton}>
          <Link href={"/game"}></Link>
        </button> */}
      </div>
    </div>
  );
};

export default Result;
