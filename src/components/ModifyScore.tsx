import * as React from "react";
import ModifyScoreModal from "./ModifyScoreModal";

const ModifyScore = () => {
  const [modifyScoreShown, setModifyScoreShown] = React.useState(false);
  return (
    <div className="modify-score">
      {modifyScoreShown ? (
        <ModifyScoreModal />
      ) : (
        <button onClick={() => setModifyScoreShown(!modifyScoreShown)}>
          +
        </button>
      )}
    </div>
  );
};

export default ModifyScore;
