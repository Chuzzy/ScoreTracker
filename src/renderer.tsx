import * as React from "react";
import * as ReactDOM from "react-dom";
import ScoreCard from "./components/Scorecard";
import "./styles/main.scss";

ReactDOM.render(
  <ScoreCard name="Jeff" score={35} />,
  document.getElementById("app")
);
