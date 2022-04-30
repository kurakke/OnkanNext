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

const Result = () => {
  const router = useRouter();
  return (
    <div css={all}>
      <div css={glass}>
        {router.query.hoge}
        {router.query.selectedAnswer}
      </div>
    </div>
  );
};

export default Result;
