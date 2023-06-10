import React, { useState, useEffect, useRef, useCallback } from "react";
import Ayah from "../Ayah/Ayah";
import { Link } from "react-router-dom";

const SelectedSurah = ({ surah }) => {
  const firstCall = useRef(true);
  const [ayah, setAyah] = useState([]);
  const [translation, setTranslation] = useState([]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [tranOn, setTranOn] = useState(false);
  const [currentAyah, setCurrentAyah] = useState(1);
  const audioElem = useRef();

  const main = useCallback(() => {
    fetch(`https://api.alquran.cloud/v1/surah/${surah}`)
      .then((res) => res.json())
      .then((data) => setAyah(data.data.ayahs));
    fetch(`https://api.alquran.cloud/v1/surah/${surah}/en.yusufali`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentAyah(data.data.ayahs[0].number);
        setTranslation(data.data.ayahs);
      });
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

  const scrolled = (pos) => {
    const allAyah = document.querySelectorAll(`.ayah`);
    allAyah.forEach((x) => x.classList.remove("border"));

    if (pos === "start") {
      const readingAyah = document.querySelector(`.ayah-${currentAyah + 1}`);
      readingAyah.scrollIntoView({ behavior: "smooth" });
      readingAyah.classList.add("border");
    }
  };

  const handleAudioEnded = () => {
    if (currentAyah < ayah[ayah.length - 1].number) {
      scrolled("start");
      setCurrentAyah(currentAyah + 1);
      setTimeout(() => {
        audioElem.current.play();
      }, 0);
    } else {
      scrolled("finish");
      setIsPlaying(false);
      setCurrentAyah(ayah[0].number);
    }
  };
  return (
    <>
      <audio
        onEnded={handleAudioEnded}
        ref={audioElem}
        src={`https://cdn.islamic.network/quran/audio/128/ar.ahmedajamy/${currentAyah}.mp3`}
      ></audio>
      <div className="top-sec">
        <Link to="/" className="link back">
          <i class="fa-solid fa-arrow-left"></i>
        </Link>
        <button onClick={playSurah} className="play">
          {!isPlaying ? (
            <i class="fa-solid fa-play"></i>
          ) : (
            <i class="fa-solid fa-pause"></i>
          )}
        </button>
        <button onClick={() => setTranOn(!tranOn)} className="play">
          En.
        </button>
      </div>
      <div className="ayah-sec">
        {ayah.map((x, i) => {
          const ayahFunc = (ayah) => {
            return (
              <Ayah
                ayah={ayah}
                translation={tranOn && translation[i]?.text}
                num={x.numberInSurah}
                ayahNum={x.number}
              />
            );
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
    </>
  );
};

export default SelectedSurah;
