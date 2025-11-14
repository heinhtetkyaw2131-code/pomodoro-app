function Buttons({ startTimer, pauseTimer, resetTimer}) {
  return (
    <div className="btn-container">
      <button onClick={startTimer} className="start-btn">
        Start
      </button>
      <button className="pause-btn" onClick={pauseTimer}>
        Pause
      </button>
      <button onClick={resetTimer} className="reset-btn">
        Reset
      </button>
    </div>
  );
}

export default Buttons;
