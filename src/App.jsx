import React, { useState, useEffect, useRef, useCallback } from "react";
import Ayah from "./Components/Ayah";
import surahName from "./data/surah.json";

function App() {
  const firstCall = useRef(true);
  const [ayah, setAyah] = useState([]);
  const [surah, setSurah] = useState("1");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioElem = useRef();

  const num = (arr) => arr.split(" ")[0];

  const main = useCallback(() => {
    fetch(`https://api.alquran.cloud/v1/surah/${surah}`)
      .then((res) => res.json())
      .then((data) => setAyah(data.data.ayahs));
  }, [surah]);
  // initial call
  useEffect(() => {
    firstCall.current && main();

    return () => {
      firstCall.current = false;
    };
  });
  // calls the surah selected
  useEffect(() => {
    main(); // fetches the surah
    setIsPlaying(false);
  }, [main]); // listens if surah is selected

  const playSurah = () => {
    if (!isPlaying) {
      audioElem.current.play(); // plays audio
      setIsPlaying(true);
    } else {
      audioElem.current.pause(); // pause audio
      setIsPlaying(false);
    }
  };

  return (
    <div className="App">
      <audio
        onEnded={() => setIsPlaying(false)}
        ref={audioElem}
        src={`https://cdn.islamic.network/quran/audio-surah/128/ar.saudalshuraim/${num(
          surah
        )}.mp3`}
      ></audio>
      <form action="">
        <label htmlFor="surah">Surah</label>
        <select
          id="surah"
          value={surah}
          onChange={(e) => setSurah(e.target.value)}
        >
          {surahName.map((x) => (
            <option>
              {x.number} - {x.name}
            </option>
          ))}
        </select>
      </form>
      <button onClick={playSurah} className="play">
        {!isPlaying ? (
          <i class="fa-solid fa-play"></i>
        ) : (
          <i class="fa-solid fa-pause"></i>
        )}
      </button>
      {ayah.map((x, i) => {
        const ayahFunc = (ayah) => {
          return <Ayah ayah={ayah} num={x.numberInSurah} ayahNum={x.number} />;
        };

        if (i === 0) {
          const firstAyah =
            x.text.length > 40
              ? x.text.split("").splice(39, x.text.length).join("")
              : x.text;
          return ayahFunc(firstAyah);
        }
        return ayahFunc(x.text);
      })}
    </div>
  );
}

export default App;
