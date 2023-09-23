import React, { useState, useEffect, useRef, useCallback } from "react";
import Ayah from "../Ayah/Ayah";
import data from "../../data/surah.json";

const SelectedSurah = ({ surah, changeSurah }) => {
  const firstCall = useRef(true);
  const [ayah, setAyah] = useState([]);
  const [translation, setTranslation] = useState([]);

  const [repeat, setRepeat] = useState(0);
  const [loopCount, setLoopCount] = useState(repeat);

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

  const scroll = useCallback(() => {
    const allAyah = document.querySelectorAll(`.ayah`);
    allAyah.forEach((x) => x.classList.remove("border"));

    const readingAyah = document.querySelector(`.ayah-${currentAyah}`);
    readingAyah && readingAyah.scrollIntoView({ behavior: "smooth" });
    readingAyah && readingAyah.classList.add("border");
  }, [currentAyah]);

  useEffect(() => {
    setLoopCount(repeat);
  }, [repeat]);

  useEffect(() => {
    audioElem.current.play();
    setLoopCount(repeat);
    scroll();
    setIsPlaying(true);
  }, [currentAyah, repeat, scroll]);

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

    const readingAyah = document.querySelector(
      `.ayah-${pos === "start" ? currentAyah + 1 : ayah[0].number}`
    );
    readingAyah.scrollIntoView({ behavior: "smooth" });
    readingAyah.classList.add("border");
  };

  const handleAudioEnded = () => {
    let lastAyah = currentAyah === ayah[ayah.length - 1].number;
    setLoopCount((prev) => prev - 1);

    if (loopCount < 2) {
      !lastAyah && scrolled("start");
      setCurrentAyah(currentAyah + 1);
      setLoopCount(repeat);
    }

    setTimeout(() => {
      audioElem.current.play();
    }, 0);

    if (loopCount < 2 && lastAyah) {
      changeSurah(String(+surah + 1));
      scrolled("finish");
      setCurrentAyah(ayah[0].number);
    }
  };

  const currHandler = (e) => {
    setCurrentAyah(e);
  };

  return (
    <>
      <audio
        onEnded={handleAudioEnded}
        ref={audioElem}
        src={`https://cdn.islamic.network/quran/audio/128/ar.ahmedajamy/${currentAyah}.mp3`}
      ></audio>
      <div className="top-sec">
        <div>
          <select
            name=""
            id=""
            value={surah}
            onChange={(e) => changeSurah(e.target.value)}
          >
            {data.map((x) => (
              <option
                value={x.number}
              >{`${x.number} ${x.arabicName} ${x.name}`}</option>
            ))}
          </select>
          <input
            type="tel"
            onChange={(e) => setRepeat(e.target.value)}
            className="repeat"
          />
        </div>
        <div>
          <button onClick={playSurah} className="play">
            {!isPlaying ? (
              <i class="fa-solid fa-play"></i>
            ) : (
              <i class="fa-solid fa-pause"></i>
            )}
          </button>
          <button onClick={() => setTranOn(!tranOn)}>En.</button>
        </div>
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
                curr={currHandler}
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
