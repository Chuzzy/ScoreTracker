import * as React from "react";

export type ScoreCardPropTypes = {
  name: string;
  score: number;
};

const ScoreCard = ({ name, score }: ScoreCardPropTypes) => {
  return (
    <div className="score-card">
      <h1 className="score-number">{score}</h1>
      <h2 className="score-name">{name}</h2>
    </div>
  );
};

export default ScoreCard;
