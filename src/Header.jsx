function Header({ nextPhase, phase, cycle}) {
  return (
    <div className="header">
      <h2>Pmomodoro</h2>
      <div className="right-section">
        <div onClick={nextPhase}>{phase}</div>
        <div>{cycle}</div>
      </div>
    </div>
  );
}

export default Header;
