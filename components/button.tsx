import React, { useEffect, useState } from "react";
import { css, keyframes } from "@emotion/react";
import toast, { Toaster } from "react-hot-toast";

const button = css`
  width: 80px;
  height: 28px;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
`;
const unknownButton = css`
  visibility: hidden;
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
  width: 80px;
  height: 28px;
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.1);
  color: #ffffff;
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
  handleAnswer: (number) => void;
  handleAnswerArg: number;
  Answer: boolean;
  questionNum: number;
  musicFile: HTMLAudioElement;
  isExist: boolean;
  id: number;
};

const Button = ({
  label,
  handleAnswer,
  handleAnswerArg,
  Answer,
  questionNum,
  musicFile,
  isExist,
  id,
}: Props) => {
  const [ButtonCss, setButtonCss] = useState(button);
  useEffect(() => {
    setButtonCss(button);
  }, [questionNum]);
  return (
    <div>
      {(() => {
        if (isExist) {
          return (
            <button
              css={ButtonCss}
              onClick={() => {
                handleAnswer(handleAnswerArg);
                setButtonCss(Answer ? AbleButton : disableButton);
                musicFile.play();
                console.log(id);
              }}
            >
              {label}
            </button>
          );
        } else {
          <button css={unknownButton}></button>;
        }
      })()}
    </div>
  );
};

export default Button;
