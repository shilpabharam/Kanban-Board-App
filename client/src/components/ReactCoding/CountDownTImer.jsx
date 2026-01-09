const { useState, useEffect } = React;

function App() {
  const [inputMinutes, setInputMinutes] = useState(1);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
   if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    if (timeLeft === 0) {
    setTimeLeft(inputMinutes * 60);
  }
    setIsRunning(true);
    // TODO: Start the timer
  };

  const handlePause = () => {
    setIsRunning(false);
    // TODO: Pause the timer
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(inputMinutes * 60);
    // TODO: Reset timer to initial value
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    // TODO: Convert seconds to MM:SS format
    // return '00:00';
  };

  return (
    <div className="container">
      <h1>Countdown Timer</h1>
      
      <div className="input-group">
        <label>Minutes:</label>
        <input
          type="number"
          min="1"
          max="60"
          value={inputMinutes}
          onChange={(e) => setInputMinutes(Number(e.target.value))}
          disabled={isRunning}
        />
      </div>

      <div className="display">
        {timeLeft === 0 ? "Time's up!" : formatTime(timeLeft)}
      </div>

      <div className="buttons">
        <button onClick={handleStart} disabled={isRunning}>Start</button>
        <button onClick={handlePause} disabled={!isRunning}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

/*
.container {
  font-family: 'Segoe UI', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  color: white;
  padding: 2rem;
}

h1 {
  font-weight: 300;
  margin-bottom: 2rem;
}

.input-group {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.input-group input {
  padding: 0.75rem 1rem;
  font-size: 1.2rem;
  border: 2px solid #444;
  border-radius: 8px;
  background: #1a1a2e;
  color: white;
  width: 80px;
  text-align: center;
}

.display {
  font-size: 5rem;
  font-weight: 200;
  font-family: 'Courier New', monospace;
  background: rgba(255,255,255,0.05);
  padding: 2rem 4rem;
  border-radius: 20px;
  margin-bottom: 2rem;
  min-width: 300px;
  text-align: center;
}

.buttons {
  display: flex;
  gap: 1rem;
}

button {
  padding: 1rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.1s, opacity 0.2s;
}

button:first-child {
  background: linear-gradient(135deg, #00b09b, #96c93d);
  color: white;
}

button:nth-child(2) {
  background: linear-gradient(135deg, #f7971e, #ffd200);
  color: #333;
}

button:last-child {
  background: linear-gradient(135deg, #cb2d3e, #ef473a);
  color: white;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

button:not(:disabled):hover {
  transform: scale(1.05);
}
*/