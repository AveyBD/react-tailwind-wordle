import { useState } from "react";

const useWordle = (ans) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGueses] = useState([]);
  const [history, setHistory] = useState([]);
  const [isCorrent, setIsCorrect] = useState(false);

  // formatting the guess
  const formateGuess = () => {};

  // add new guess to the state
  const addNewGuess = () => {};

  //   handle key event
  const handleKey = () => {
    console.log("Halum");
  };

  return { turn, currentGuess, guesses, isCorrent, handleKey };
};

export default useWordle;
