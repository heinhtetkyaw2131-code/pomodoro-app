import { countMinutes, countSeconds } from "./utils/timeCalculator";

function Timer({time}) {
    const minutes = countMinutes(time);
    const seconds = countSeconds(time);
  return (
    <div className="timer">
      <div className="minutes">{minutes < 10 ? "0" + minutes : minutes}</div>:
      <div className="seconds">{seconds < 10 ? "0" + seconds : seconds}</div>
    </div>
  );
}

export default Timer;
