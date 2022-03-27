import React from "react";
import { css } from "@emotion/react";

const aaa = css`
  color: #ff0000;
`;

const Main = () => {
  const a = 1;
  return (
    <div css={aaa}>
      <p>a</p>
    </div>
  );
};
export default Main;
