import * as React from "react";
import * as ReactDOM from "react-dom";
import ScoreBoard from "./components/ScoreBoard";
import ScoreCard from "./components/Scorecard";
import "./styles/main.scss";

ReactDOM.render(
  <ScoreBoard
    scores={[
      {
        name: "Jeff",
        score: 21,
      },
      {
        name: "Steve",
        score: 405,
      },
    ]}
  />,
  document.getElementById("app")
);
