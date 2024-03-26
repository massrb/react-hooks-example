
import React, { useState, useEffect } from "react";

const Stopwatch = ({running, amount, cycle, showButtons}) => {
  // state to store time
  const [time, setTime] = useState(0);

  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(running || false);

  // If the appropriate property
  // has changed then we reset the timer.
  useEffect(() => {
    setTime(0)
  }, [amount, cycle])

  // This effect is constantly called if the timer is running
  // as setTime will change the time which it is observing
  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 miliseconds
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  // Method to start and stop timer
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  // Method to reset timer back to 0
  const reset = () => {
    setTime(0);
  };
  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
      { showButtons === true ?
        <div className="stopwatch-buttons">
          <button className="stopwatch-button" onClick={startAndStop}>
            {isRunning ? "Stop" : "Start"}
          </button>
          <button className="stopwatch-button" onClick={reset}>
            Reset
          </button>
        </div> : null
      }
    </div>
  );
};

export default Stopwatch;