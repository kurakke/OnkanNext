import { css } from "@emotion/react";
export const all = css`
  margin: 0px;
  padding: 0px;
  background-image: linear-gradient(to bottom, #5c1ea6 0%, #c8435e 100%);
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
`;
export const glass = css`
  width: 300px;
  height: 30%;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 20px auto;
  top: 80px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  filter: drop-shadow(3px 3px 3px 0 rgba(0, 0, 0, 0.8));
  border-radius: 25px;
`;
export const slider = css`
  text-align: center;
`;
export const startButton = css`
  background-color: white;
  width: 180px;
  height: 60px;
  border-radius: 15px;
  box-shadow: 0px 7px 0px 0px rgba(0, 0, 0, 0.6);
  margin: 25px auto;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;
export const nextButton = css`
  background-color: white;
  width: 180px;
  height: 60px;
  border-radius: 15px;
  box-shadow: 0px 7px 0px 0px rgba(0, 0, 0, 0.6);
  margin: 0px auto;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;
export const start = css`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;
export const answerButton = css`
  margin: 5px auto;
  height: 30px;
`;
export const answerPlace = css`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 55%;
  @media (max-width: 475px) {
    justify-content: flex-end;
    padding-right: 16px;
  } ;
`;
export const answerButtons = css`
  margin: 10px 0;
  display: flex;
`;
export const answerNormalButtons = css`
  margin: 30px 0px;
`;
export const answerSharpButtons = css`
  margin: 53px 0px;
`;
export const grandPiano = css`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
`;
export const pianoBoard = css`
  width: 30%;
  background-color: black;
`;
export const piano = css`
  margin: 20px 0px;
`;
export const whiteKey = css`
  width: 90px;
  height: 35px;
  background-color: white;
  border-bottom: 1px solid #000;
  border-radius: 0px 2px 2px 0px;
`;
export const blackKey = css`
  width: 65px;
  height: 26px;
  background-color: black;
  margin: -13px 0px;
  border-radius: 0px 2px 2px 0px;
  z-index: 2;
  position: relative;
`;
export const pianoSideTop = css`
  width: 120px;
  height: 35px;
  background-color: #000000;
  border-radius: 0px 20px 0px 0px;
`;
export const pianoSideBottom = css`
  width: 120px;
  height: 35px;
  background-color: #000000;
  border-radius: 0px 0px 20px 0px;
`;
export const ulButton = css`
  padding-inline-start: 5px;
`;
export const unknownButton = css`
  visibility: hidden;
  width: 80px;
  height: 28px;
`;
