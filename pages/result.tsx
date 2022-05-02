import React from "react";
import { css } from "@emotion/react";
import { useRouter } from "next/router";

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
const circle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  width: 300px;
  height: 300px;
  font-size: 26px;
  font-weight: 700;
  background-image: radial-gradient(#f2f2f2 60%, transparent 61%),
    conic-gradient(#d5525f 0% 90%, #d9d9d9 90% 100%);
  border-radius: 50%;
`;

const Result = () => {
  const router = useRouter();
  return (
    <div css={all}>
      <div css={glass}>
        {router.query.hoge}
        {router.query.selectedAnswer}
        <div css={circle}></div>
      </div>
    </div>
  );
};

export default Result;
