import React from "react";
import { css } from "@emotion/react";
const button = css`
  width: 80px;
  height: 28px;
  margin: 0 auto;
  top: 80px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.2);
`;
const text = css`
  color: #ffffff;
  margin: 0 auto;
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
