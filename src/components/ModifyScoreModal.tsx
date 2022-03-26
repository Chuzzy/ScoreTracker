import * as React from "react";

const ModifyScoreModal = () => {
  const [inputNumber, setInputNumber] = React.useState(0);

  const buttons = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["C", 0, "<"],
  ];

  const deleteDigit = () => {
    const stringifiedNumber = inputNumber.toString();
    setInputNumber(
      parseInt(stringifiedNumber.slice(0, stringifiedNumber.length)) || 0
    );
  };

  const buttonElems = buttons.map((button) => {
    const clickHandler = 1;
    return <button className="modify-score-modal-button">{button}</button>;
  });

  return <div className="modify-score-modal"></div>;
};

export default ModifyScoreModal;
