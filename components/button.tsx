import React from "react";
import { css, keyframes } from "@emotion/react";
import { NodeNextRequest } from "next/dist/server/base-http/node";
const button = css`
  width: 80px;
  height: 28px;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
`;

const disable = keyframes`
  0% {
  }
  10% {
    -webkit-transform: translateX(-4px);
            transform: translateX(-4px);
  }
  20% {
    -webkit-transform: translateX(4px);
            transform: translateX(4px);
  }
  30% {
    -webkit-transform: translateX(-4px);
            transform: translateX(-4px);
  }
  40% {
    -webkit-transform: translateX(4px);
            transform: translateX(4px);
  }
  50% {
    -webkit-transform: translateX(-4px);
            transform: translateX(-4px);
  }
  60% {
    -webkit-transform: translateX(4px);
            transform: translateX(4px);
  }
  70% {
    -webkit-transform: translateX(-4px);
            transform: translateX(-4px);
  }
  80% {
    -webkit-transform: translateX(4px);
            transform: translateX(4px);
  }
  90% {
    -webkit-transform: translateX(-4px);
            transform: translateX(-4px);
  }
  100% {
    -webkit-transform: translateX(4px);
            transform: translateX(4px);
  }
`;

const disableButton = css`
  ${button}
  box-shadow: 2px 2px 9px -1px rgba(0, 0, 0, 0.25);
  :active {
    @keyframe {
      ${disable}
    }
    -webkit-animation: ${disable} 0.4s ease;
    animation: ${disable} 0.4s ease;
  }
`;

const AbleButton = css`
  ${button}
`;

type Props = {
  label: string;
  handleAnswer: React.Dispatch<React.SetStateAction<string>>;
  handleAnswerArg: string;
  Answer: boolean;
};

const Button = ({ label, handleAnswer, handleAnswerArg, Answer }: Props) => {
  return (
    <div>
      <button
        css={Answer === false ? disableButton : AbleButton}
        onClick={() => {
          handleAnswer(handleAnswerArg);
        }}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
