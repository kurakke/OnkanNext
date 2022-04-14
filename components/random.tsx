import React from "react";

const Random = () => {
  let QArray = [];
  for (let i = 0; i < 8; i++) {
    QArray.push(Math.floor(Math.random() * 8));
  }
  return QArray;
};

export default Random;
