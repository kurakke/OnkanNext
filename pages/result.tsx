import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  DoughnutControllerChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
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
const Result = () => {
  const router = useRouter();
  ChartJS.register(ArcElement, Tooltip, Legend);
  const MaxQuestionNumber1 = Number(router.query.MaxQuestionNumber);
  const correctAnswerNum1 = +router.query.correctAnswerNum;
  const correctAnswerPercent = (correctAnswerNum1 / MaxQuestionNumber1) * 100;
  const [hoge, setHoge] = useState("");

  const [aaa, setAaa] = useState<string>("");
  const [bbb, setBbb] = useState<string>("");
  const [dataSelectAnswer, setDataSelectAnswer] = useState<string>("");
  const [MaxQuestionNumber, setMaxQuestionNumber] = useState<string>("");
  const [correctAnswerNum, setCorrectAnswerNum] = useState<string>("")
  const [correctAnswerValue, setCorrectAnswerValue] = useState<string>("");

  const getLocalStorage = async (key: string): Promise<string> => {
    const a = await localStorage.getItem(key);
    return a;
  };

  // localStorage.setItem("hoge", hoge);
  // localStorage.setItem("selectAnswer", String(selectAnswer));
  // localStorage.setItem("MaxQuestionNumber", String(MaxQuestionNumber));
  // localStorage.setItem("correctAnswerNum", String(correctAnswerNum));
  // localStorage.setItem("correctAnswerValue", String(correctAnswerValue));

  useEffect(() => {
    const f = async () => {
      const getDataSelectAnswer = await getLocalStorage("selectAnswer");
      const getDataMaxQuestionNumber = await getLocalStorage("MaxQuestionNumber");
      const getDataCorrectAnswerNum = await getLocalStorage("correctAnswerNum");
      const getDataCorrectAnswerValue = await getLocalStorage("correctAnswerValue");


      const fetchAaaData = await getLocalStorage("hoge");
      const fetchBbbData = await getLocalStorage("bbb");
      setAaa(fetchAaaData);
      setBbb(fetchBbbData);
      setDataSelectAnswer(getDataSelectAnswer);
      setMaxQuestionNumber(getDataMaxQuestionNumber);
      setCorrectAnswerNum(getDataCorrectAnswerNum);
      setCorrectAnswerValue(getDataCorrectAnswerValue);
    };
    f();
  }, []);

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
        {router.query.hoge}
        {router.query.selectedAnswer}
        <p>hhhh</p>
        <div>{aaa}</div>
        <p>a</p>
        {MaxQuestionNumber1}
        <p>a</p>
        {correctAnswerNum1}
        <p>a</p>
        {correctAnswerPercent}
        <div css={doughnut}>
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Result;
