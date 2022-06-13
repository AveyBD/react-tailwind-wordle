import { useState } from "react";
import toast from "react-hot-toast";

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
  const handleKey = ({ key }) => {
    if (key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key);
      }
      console.log(key);
    } else {
      toast.error("Only character input allowed!");
    }
  };

  return { turn, currentGuess, guesses, isCorrent, handleKey };
};

export default useWordle;
