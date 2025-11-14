function Header({reset, nextPhase, phase, cycle}) {
  return (
    <div className="header">
      <h2>Pmomodoro</h2>
      <div className="right-section">
        <button onClick={reset}>Reset</button>
        <div onClick={nextPhase}>{phase}</div>
        <div>{cycle}</div>
      </div>
    </div>
  );
}

export default Header;
