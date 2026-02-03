import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  // function that details the information of each episode

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Choose an Episode to learn more.</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2>Episode {selectedEpisode.id}</h2>
        <h3>{selectedEpisode.title}</h3>
        <p>{selectedEpisode.description}</p>
        <button>Click Here to Watch</button>
      </section>
    );
  }

  // List of Episodes that the user can choose

  function EpisodeList() {
    return (
      <section className="episodes">
        <h2>Episodes</h2>
        <ol>
          {episodes.map((episode) => (
            <li
              key={episode.id}
              onClick={() => setSelectedEpisode(episode)}
              className={selectedEpisode?.id === episode.id ? "selected" : ""}
            >
              {episode.title}
            </li>
          ))}
        </ol>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <EpisodeList />
        <EpisodeDetails />
      </main>
    </>
  );
}
