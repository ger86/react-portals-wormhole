import { useState, useRef } from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import overlaps from "utils/overlaps";
import Starship from "./components/Starship";
import "./App.css";

const spaceB = document.querySelector("#spaceB");

function App() {
  const [isInSpaceA, setIsInSpaceA] = useState(true);
  const wormholeARef = useRef();
  const wormholeBRef = useRef();

  function checkInsideWorkmholeA(event) {
    if (
      overlaps(
        event.target.getBoundingClientRect(),
        wormholeARef.current.getBoundingClientRect()
      )
    ) {
      setIsInSpaceA(false);
    }
  }

  function checkInsideWorkmholeB(event) {
    if (
      overlaps(
        event.target.getBoundingClientRect(),
        wormholeBRef.current.getBoundingClientRect()
      )
    ) {
      setIsInSpaceA(true);
    }
  }

  return (
    <div className="App">
      {isInSpaceA && (
        <Draggable axis="both" bounds="parent" onStop={checkInsideWorkmholeA}>
          <Starship />
        </Draggable>
      )}
      <div className="wormhole-a" ref={wormholeARef} />
      {!isInSpaceA &&
        ReactDOM.createPortal(
          <Draggable axis="both" bounds="parent" onStop={checkInsideWorkmholeB}>
            <Starship />
          </Draggable>,
          spaceB
        )}
      {ReactDOM.createPortal(
        <div className="wormhole-b" ref={wormholeBRef}></div>,
        spaceB
      )}
    </div>
  );
}

export default App;
