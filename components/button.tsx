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
  color: #ffffff;
`;

type Props = {
  label: string;
  disable: boolean;
  onClick: void;
};

const Button: React.VFC<Props> = ({ label, disable, onClick }) => {
  return (
    <div>
      <button css={button}>{label}</button>
    </div>
  );
};

export default Button;
