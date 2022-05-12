import React from "react";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
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
  const MaxQuestionNumber = +router.query.MaxQuestionNumber;
  const correctAnswerNum = +router.query.correctAnswerNum;
  const correctAnswerPercent = (correctAnswerNum / MaxQuestionNumber) * 100;
  const data = {
    datasets: [
      {
        data: [correctAnswerPercent, 100 - correctAnswerPercent],
        backgroundColor: ["rgba(67, 218, 163, 1)", "rgba(0, 0, 0, 0)"],
        borderWidth: 0,
      },
    ],
  };
  return (
    <div css={all}>
      <div css={glass}>
        {router.query.hoge}
        {router.query.selectedAnswer}
        <p>a</p>
        {MaxQuestionNumber}
        <p>a</p>
        {correctAnswerNum}
        <p>a</p>
        {correctAnswerPercent}
        <div css={doughnut}>
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
};

export default Result;
