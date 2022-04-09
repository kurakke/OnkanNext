import React from "react";

type Props = {
  text: string;
};

const Button = (props: Props) => {
  return (
    <div>
      <button>{props.text}</button>
    </div>
  );
};

export default Button;
