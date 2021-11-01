import { useState } from "react";
import Content from "./Content";
function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="App">
      <button onClick={handleShow}>Show</button>
      {show && <Content />}
    </div>
  );
}

export default App;
