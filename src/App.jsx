import { useState, useRef, useEffect } from "react";
import beep from "../public/censor-beep-1-372459.mp3";
import MainSection from "./MainSection";
import Settings from "./Settings";
import "./App.css";

function App() {
  const [settings, setSettings] = useState(
    JSON.parse(localStorage.getItem("settings")) || {
      work: 1500,
      shortBreak: 300,
      longBreak: 900,
      workCycles: 4,
    }
  );
  const [counter, setCounter] = useState(1);
  const [phase, setPhase] = useState(localStorage.getItem("phase") || "work");
  const [time, setTime] = useState(
    JSON.parse(localStorage.getItem("timeLeft") || settings[phase])
  );
  const [cycle, setCycle] = useState(1);
  const [autoStarted, setautoStarted] = useState(true);

  const intervalRef = useRef(null);

  const audioRef = useRef(null);

  const playSound = () => {
    audioRef.current.play();
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("timeLeft"))) {
      return;
    } else {
      setTime(settings[phase]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings]);

  useEffect(() => {
    if (time <= 0) {
      nextPhase();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  function autoStart() {
    if (!autoStarted) {
      pauseTimer();
    }
  }

  function nextPhase() {
    remTime();
    autoStart();
    playSound();

    setPhase((prev) => {
      if (prev === "work") {
        setTime(settings.shortBreak);
        localStorage.setItem("phase", "shortBreak");
        return "shortBreak";
      }

      if (prev === "shortBreak" && counter === settings.workCycles) {
        setCounter(() => {
          return 0;
        });
        setTime(settings.longBreak);
        localStorage.setItem("phase", "longBreak");
        return "longBreak";
      }

      if (prev === "shortBreak" && counter !== settings.workCycles) {
        setCounter((c) => {
          return c + 1;
        });
        setTime(settings.work);
        localStorage.setItem("phase", "work");
        return "work";
      }

      if (prev === "longBreak") {
        setCounter(1);
        setCycle((c) => {
          return c + 1;
        });
        setTime(settings.work);
        localStorage.setItem("phase", "work");
        return "work";
      }
    });
  }

  const startTimer = () => {
    if (intervalRef.current) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        localStorage.setItem("timeLeft", JSON.stringify(prev));
        return prev - 1;
      });
    }, 10);
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    pauseTimer();
    setTime(settings[phase]);
  };

  const toggle = () => {
    if (autoStarted) {
      setautoStarted(false);
    } else if (!autoStarted) {
      setautoStarted(true);
    }
  };

  const reset = () => {
    localStorage.removeItem("phase");
    localStorage.removeItem("settings");
    localStorage.removeItem("timeLeft");
    localStorage.removeItem("counter");
    localStorage.removeItem("cycle");
  };

  const remTime = () => {
    localStorage.removeItem("timeLeft");
  };

  return (
    <div className="main-container">
      <audio ref={audioRef} src={beep} />
      <MainSection
        {...{
          startTimer,
          pauseTimer,
          resetTimer,
          reset,
          nextPhase,
          phase,
          cycle,
          time,
          counter,
        }}
        // nextPhase={nextPhase}
        // startTimer={startTimer}
        // pauseTimer={pauseTimer}
        // resetTimer={resetTimer}
        // reset={reset}
        // phase={phase}
        // cycle={cycle}
        // time={time}
        // counter={counter}
      />
      <Settings
        {...{ settings, setSettings, toggle, autoStarted, remTime }}
        // settings={settings}
        // setSettings={setSettings}
        // remTime={remTime}
        // toggle={toggle}
        // autoStarted={autoStarted}
      />
    </div>
  );
}

export default App;
