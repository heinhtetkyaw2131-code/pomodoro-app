function Settings({ settings, setSettings, toggle, autoStarted, remTime }) {
  const saveSettings = () => {
    localStorage.setItem("settings", JSON.stringify(settings));
  };

  return (
    <div className="settings">
      Durations
      <div className="input-name">Work:</div>
      <input
        onChange={(e) => {
          remTime();
          setSettings({
            ...settings,
            work: Number(e.target.value) * 60,
          });
        }}
        placeholder="work"
        type="number"
        step="5"
        defaultValue={settings.work / 60}
      />
      <div className="input-name">Short Break:</div>
      <input
        onChange={(e) => {
          remTime();
          setSettings({
            ...settings,
            shortBreak: Number(e.target.value) * 60,
          });
        }}
        placeholder="short break"
        type="number"
        defaultValue={settings.shortBreak / 60}
      />
      <div className="input-name">Long Break:</div>
      <input
        onChange={(e) => {
          remTime();
          setSettings({
            ...settings,
            longBreak: Number(e.target.value) * 60,
          });
        }}
        placeholder="long break"
        type="number"
        step="5"
        defaultValue={settings.longBreak / 60}
      />
      <div className="input-name">Work Cycles:</div>
      <input
        onChange={(e) => {
          setSettings({
            ...settings,
            workCycles: Number(e.target.value),
          });
        }}
        placeholder="Work Cycle"
        type="number"
        step="1"
        defaultValue={settings.workCycles}
      />
      <div className="input-name">Auto Start:</div>
      <button onClick={toggle}>{autoStarted ? "On" : "Off"}</button>
      <button onClick={saveSettings}>Set</button>
    </div>
  );
}

export default Settings;
