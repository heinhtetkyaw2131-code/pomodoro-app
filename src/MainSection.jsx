import Header from "./Header";
import Label from "./Label";
import Buttons from "./Buttons";
import Timer from "./Timer";

function MainSection({
  startTimer,
  pauseTimer,
  resetTimer,
  reset,
  nextPhase,
  phase,
  cycle,
  time,
  counter,
}) {
  return (
    <div className="main-page">
      <Header reset={reset} nextPhase={nextPhase} phase={phase} cycle={cycle} />
      <h1>Pomodoro</h1>
      <Timer time={time} />
      <Label phase={phase} cycle={cycle} counter={counter} />
      <Buttons
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        resetTimer={resetTimer}
      />
    </div>
  );
}

export default MainSection;
