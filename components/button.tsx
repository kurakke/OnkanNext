import React from "react";
import { css } from "@emotion/react";
const button = css`
  width: 28vw;
  height: 7vh;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 auto;
  top: 80px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  filter: drop-shadow(3px 3px 3px 0 rgba(0, 0, 0, 0.8));
  border-radius: 25px;
`;
const text = css`
  color: #ffffff;
`;

type Props = {
  text: string;
};

const Button = (props: Props) => {
  return (
    <div>
      <button css={button}>
        <p css={text}>{props.text}</p>
      </button>
    </div>
  );
};

export default Button;
