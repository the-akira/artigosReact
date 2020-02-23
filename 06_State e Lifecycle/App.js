import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
        {seconds} segundos se passaram desde a montagem.
    </div>
  );
};

export default App;
