import React, { useState, useEffect } from 'react';
import '../styles/App.css'

const App = () => {
  const [showBall, setShowBall] = useState(false);
  const [ballPosition, setBallPosition] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.keyCode === 39) {
        setBallPosition((prevPosition) => prevPosition + 5);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const buttonClickHandler = () => {
    setShowBall(true);
  };

  return (
    <div className="App">
      {showBall ? (
        <div className="ball" style={{ left: ballPosition + 'px' }}></div>
      ) : (
        <button className="start" onClick={buttonClickHandler}>Start</button>
      )}
    </div>
  );
};

export default App;
