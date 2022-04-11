import React, { useState } from "react";
import { css } from "@emotion/react";
const button = css`
  width: 80px;
  height: 28px;
  margin: 0 auto;
  top: 80px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  filter: drop-shadow(3px 3px 3px 0 rgba(0, 0, 0, 0.8));
  border-radius: 25px;
`;
const text = css`
  color: #ffffff;
  margin: 0 auto;
`;

type Props = {
  text: string;
};

const Button = (props: Props) => {
  const [chosenButton, setChosenButton] = useState("0");
  return (
    <div>
      <button
        css={button}
        onClick={() => {
          if (chosenButton === "0") {
            setChosenButton("1");
          } else {
            setChosenButton("0");
          }
        }}
        style={{
          backgroundColor:
            chosenButton === "0"
              ? "rgba(255, 255, 255, 0.2)"
              : "rgba(255, 255, 255, 0.4)",
        }}
      >
        <p css={text}>{props.text}</p>
      </button>
    </div>
  );
};

export default Button;
