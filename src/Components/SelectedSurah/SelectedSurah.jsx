import React, { useState, useEffect, useRef, useCallback } from "react";
import Ayah from "../Ayah/Ayah";
import data from "../../data/surah.json";
import reciter from "../../data/reciter.json";
import translations from "../../data/translation.json";
import lang from "../../data/langCode.json";

const SelectedSurah = ({ surah, changeSurah }) => {
  const firstCall = useRef(true);
  const [ayah, setAyah] = useState([]);
  const [translation, setTranslation] = useState([]);

  const [repeat, setRepeat] = useState(0);
  const [loopCount, setLoopCount] = useState(repeat);
  const [selReciter, setSelReciter] = useState(0);
  const [selLang, setSelLang] = useState("en.yusufali");
  const [settings, setSettings] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [tranOn, setTranOn] = useState(false);
  const [currentAyah, setCurrentAyah] = useState(1);
  const audioElem = useRef();

  const main = useCallback(() => {
    fetch(`https://api.alquran.cloud/v1/surah/${surah}`)
      .then((res) => res.json())
      .then((data) => {
        setAyah(data.data.ayahs);
        setCurrentAyah(data.data.ayahs[0].number);
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
    fetch(`https://api.alquran.cloud/v1/surah/${surah}/${selLang}`)
      .then((res) => res.json())
      .then((data) => {
        setTranslation(data.data.ayahs);
      });
  }, [selLang, surah]);

  useEffect(() => {
    setLoopCount(repeat);
  }, [repeat]);

  useEffect(() => {
    audioElem.current.play();
    setLoopCount(repeat);
    scroll();
    setIsPlaying(true);
  }, [currentAyah, repeat, scroll, selReciter]);

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
      surah === "114" ? changeSurah("1") : changeSurah(String(+surah + 1));
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
        src={`https://cdn.islamic.network/quran/audio/${reciter[selReciter].channel}/${reciter[selReciter].identifier}/${currentAyah}.mp3`}
      ></audio>
      <div
        className="top-sec"
        style={{
          transform: `${settings ? "translateY(240px)" : "translateY(0px)"}`,
        }}
      >
        <i
          className="fa-solid fa-angle-down"
          style={{
            transform: `${settings ? "rotate(180deg)" : "rotate(0deg)"}`,
          }}
          onClick={() => setSettings((prev) => !prev)}
        ></i>
        <div>
          <div>
            <button onClick={playSurah} className="play">
              {!isPlaying ? (
                <i class="fa-solid fa-play"></i>
              ) : (
                <i class="fa-solid fa-pause"></i>
              )}
            </button>
            <button className="tr" onClick={() => setTranOn((prev) => !prev)}>
              Tr.
            </button>
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="surah">Surah: </label>
            <select
              name=""
              id="surah"
              value={surah}
              onChange={(e) => changeSurah(e.target.value)}
            >
              {data.map((x) => (
                <option
                  value={x.number}
                >{`${x.number} ${x.arabicName} ${x.name}`}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="repeat">Repeat: </label>
            <input
              id="repeat"
              type="tel"
              onChange={(e) => setRepeat(e.target.value)}
              className="repeat"
            />
          </div>
          <div>
            <label htmlFor="reciter">Reciter: </label>
            <select
              name=""
              id="reciter"
              value={selReciter}
              onChange={(e) => setSelReciter(e.target.value)}
            >
              {reciter.map((x, i) => (
                <option value={i}>{`${i + 1}. ${x.englishName}`}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="translator">Translator: </label>
            <select
              name=""
              id="translator"
              value={selLang}
              onChange={(e) => setSelLang(e.target.value)}
            >
              {lang.map((x) => (
                <optgroup label={x.name}>
                  {translations.map(
                    (e) =>
                      e.language === x.code && (
                        <option value={e.identifier}>{e.englishName}</option>
                      )
                  )}
                </optgroup>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="ayah-sec">
        <div className="bismillah">بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
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
