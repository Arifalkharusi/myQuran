import React, { useState, useEffect, useRef, useCallback } from "react";
import Ayah from "./Components/Ayah/Ayah";
import surahName from "./data/surah.json";
import Surah from "./Components/Surah/Surah";
import { Route, Routes } from "react-router-dom";

function App() {
  const firstCall = useRef(true);
  const [ayah, setAyah] = useState([]);
  const [surah, setSurah] = useState("1");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioElem = useRef();

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
  const surrahSelect = (num) => {
    setSurah(num);
  };

  let surahElement = (
    <>
      <audio
        onEnded={() => setIsPlaying(false)}
        ref={audioElem}
        src={`https://cdn.islamic.network/quran/audio-surah/128/ar.ahmedalajmi/${surah}.mp3`}
      ></audio>
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
    </>
  );
  let selectElement = (
    <>
      <h1>Surah</h1>
      <div className="pick-surah">
        {surahName.map((x) => (
          <Surah data={x} select={surrahSelect} />
        ))}
      </div>
    </>
  );
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={selectElement} />
        <Route path="/surah" element={surahElement} />
      </Routes>
    </div>
  );
}

export default App;
