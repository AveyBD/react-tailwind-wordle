import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";

const Wordle = ({ ans }) => {
  const { currentGuess, handleKey } = useWordle(ans);
  useEffect(() => {
    window.addEventListener("keyup", handleKey);
    return () => window.removeEventListener("keyup", handleKey);
  }, [handleKey]);
  console.log(ans);
  return (
    <div>
      <h2>Hello Wordle!</h2>
      <h3>{currentGuess}</h3>
    </div>
  );
};

export default Wordle;
