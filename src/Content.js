import { useState, useRef, useEffect } from "react";
function Content() {
  const [timer, setTimer] = useState(60);
  const timerDown = useRef();
  const preTimer = useRef();
  useEffect(() => {
    preTimer.current = timer;
  }, [timer]);
  function handleStart() {
    timerDown.current = setInterval(() => {
      setTimer((pre) => pre - 1);
    }, 1000);
  }
  function handleStop() {
    clearInterval(timerDown.current);
  }
  console.log(timer, preTimer.current);
  return (
    <div>
      <h1>{timer}</h1>
      <button onClick={() => handleStart()}>Start</button>
      <button onClick={() => handleStop()}>Stop</button>
    </div>
  );
}
export default Content;
