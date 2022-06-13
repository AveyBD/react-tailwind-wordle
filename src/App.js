import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Wordle from "./components/Wordle";

function App() {
  const [ans, setAns] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/solutions")
      .then((res) => res.json())
      .then((data) => {
        const sol = Math.floor(Math.random() * data.length);
        setAns(data[sol]);
      });
  }, [setAns]);
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <nav className="border border-t-1 mt-2 border-b-1 border-gray-200">
        <h2 className="text-3xl font-bold text-center">ReactTail Wordle!</h2>
      </nav>
      {ans && <Wordle ans={ans}></Wordle>}
    </div>
  );
}

export default App;
