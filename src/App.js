import React, { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";

function App() {
  const [rickAndMorty, setRickAndMorty] = useState([]);
  const [info, setInfo] = useState({});

  const url = "https://rickandmortyapi.com/api/character";

  const consultarApi = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRickAndMorty(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    consultarApi(info.prev);
  };

  const onNext = () => {
    consultarApi(info.next);
  };

  useEffect(() => {
    consultarApi(url);
  }, []);

  return (
    <>
      <Navbar brand="rick and morty app" />
      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Card rickAndMorty={rickAndMorty} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </>
  );
}

export default App;
