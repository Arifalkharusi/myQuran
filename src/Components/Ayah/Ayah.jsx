import React, { useRef, useState } from "react";

const Ayah = ({ ayah, num, ayahNum, translation }) => {
  const audioElem = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [loopCount, setLoopCount] = useState(0);

  const numberConvert = (arr) => {
    const arabicNumerals = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

    const arabicNum = arr
      .split("")
      .map((x) => (x = arabicNumerals[x]))
      .join("");

    return arabicNum;
  };

  const playSurah = () => {
    if (loopCount > 0) {
      if (!isPlaying) {
        audioElem.current.play();
        setLoopCount(loopCount - 1);
        setIsPlaying(true);
      } else {
        audioElem.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    if (loopCount > 0) {
      setLoopCount(loopCount - 1);
      audioElem.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className={`ayah ayah-${ayahNum} ${num === 1 && "border"}`}>
      <audio
        onEnded={handleAudioEnded}
        ref={audioElem}
        src={`https://cdn.islamic.network/quran/audio/128/ar.ahmedajamy/${ayahNum}.mp3`}
      ></audio>
      <div className="right-sec">
        <p>{ayah} </p>
        <div>{translation}</div>
      </div>
      <div className="left-sec">
        <div className="number">
          <img src={require("../../icons8-frame-64.png")} alt="" />
          <div>{numberConvert(String(num))}</div>
        </div>
        <input
          type="tel"
          value={loopCount}
          onChange={(e) => setLoopCount(e.target.value)}
          className="loop-input"
        />
        <button onClick={playSurah} className="play">
          {!isPlaying ? (
            <i class="fa-solid fa-play"></i>
          ) : (
            <i class="fa-solid fa-pause"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default Ayah;
