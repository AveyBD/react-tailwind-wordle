import { useEffect, useState } from "react";

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
      <nav className="border border-t-1 mt-2 border-b-1 border-gray-200">
        <h2 className="text-3xl font-bold text-center">ReactTail Wordle!</h2>
        <h2>ans: {ans?.word}</h2>
      </nav>
    </div>
  );
}

export default App;
