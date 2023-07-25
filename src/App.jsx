import "./App.css";
import Comics from "./Comics";
import { useEffect, useState } from "react";
import Form from "./Form";

function App() {
  const comicsAPI = `http://localhost:3500/marvel`;

  const [comics, setComics] = useState([]);
  const [allComics, setAllComics] = useState("");
  const [typedHero, setTypedHero] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        let response = await fetch(comicsAPI);
        let data = await response.json();
        setComics(data);
        setAllComics(data);
      } catch(err) {
        throw new Error(err);
      }
    }

    setTimeout(() => {
      fetchAPI();
    }, 1500);
  }, [])

  const handleTyping = (e) => {
    let inp = e.target.value;
    setTypedHero(inp);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setComics(allComics);
    const filteredComics = comics.filter((item) => item["character"].toLowerCase() === typedHero.toLowerCase());
    setComics(filteredComics);
    setTypedHero("");
  }

  return (
    <div className="App">
      <Form handleTyping={handleTyping} handleSubmit={handleSubmit} typedHero={typedHero} />
      <Comics comics={comics} />
    </div>
  );
}

export default App;
