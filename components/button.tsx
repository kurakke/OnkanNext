import React from "react";
import { css, keyframes } from "@emotion/react";
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
  width: 80px;
  height: 28px;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  :active {
    @keyframe {
      ${disable}
    }
    -webkit-animation: ${disable} 0.4s ease;
    animation: ${disable} 0.4s ease;
  }
`;
type Props = {
  label: string;
  disable: boolean;
  onClick: void;
};

const Button: React.VFC<Props> = ({ label, disable, onClick }) => {
  return (
    <div>
      <button css={disableButton}>{label}</button>
    </div>
  );
};

export default Button;
