import * as React from "react";
import ScoreCard, { ScoreCardPropTypes } from "./Scorecard";

const ScoreBoard = ({ scores }: { scores: ScoreCardPropTypes[] }) => {
  return (
    <div className="score-board">
      {scores.map((s) => (
        <ScoreCard name={s.name} score={s.score} />
      ))}
    </div>
  );
};

export default ScoreBoard;
