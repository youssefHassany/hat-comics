import "./App.css";
import Comics from "./Comics";
import { useEffect, useState } from "react";
import Form from "./Form";

function App() {
  const comicsAPI = `http://localhost:3500/marvel`;

  const [comics, setComics] = useState([]);
  // const [allComics, setAllComics] = useState("");
  const [typedHero, setTypedHero] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        let response = await fetch(comicsAPI);
        let data = await response.json();
        setComics(data);
        // setAllComics(data);
      } catch(err) {
        throw new Error(err);
      }
    }

    setTimeout(() => {
      fetchAPI();
    }, 1500);
  }, [])

  const handleTyping = (e) => {
    setTypedHero(e.target.value);

  }

  return (
    <div className="App">
      <Form handleTyping={handleTyping} typedHero={typedHero} />
      <Comics typedHero={typedHero} comics={comics} />
    </div>
  );
}

export default App;
