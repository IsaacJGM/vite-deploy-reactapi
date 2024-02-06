import { useState } from "react";
import "./App.css";
import axios from "axios";
import Anime from "./components/Anime";

function App() {
  const [animes, setAnimes] = useState(null);

  const HandleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    if (name === "") return setAnimes(null);
    axios
      .get(`https://api.jikan.moe/v4/anime?q=${name}`)
      .then((res) => setAnimes(res.data.data))
      .catch((err) => console.log(err));
  };

  return (
    <main className="bg-black min-h-screen text-white font-['Roboto']">
      <h2 className="text-center py-4 font-bold text-3xl">Search anime</h2>
      <form onSubmit={HandleSubmit} className="max-w-max mx-auto">
        <div className="flex rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search your anime..."
            className="text-black outline-none px-2"
            id="name"
          />
          <button className="bg-red-500 p-2">Search</button>
        </div>
      </form>
      <section className="p-4 py-6 flex items-center justify-center gap-4 flex-wrap max-w-[1000px] mx-auto">
        {animes?.[0] && <Anime animeInfo={animes[0]} />}
        {animes?.[1] && <Anime animeInfo={animes[1]} />}
        {animes?.[2] && <Anime animeInfo={animes[2]} />}
        {animes?.[4] && <Anime animeInfo={animes[4]} />}
      </section>
    </main>
  );
}

export default App;
