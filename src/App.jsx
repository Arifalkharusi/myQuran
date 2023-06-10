import React, { useState } from "react";
import surahName from "./data/surah.json";
import Surah from "./Components/Surah/Surah";
import SelectedSurah from "./Components/SelectedSurah/SelectedSurah";

import { Route, Routes } from "react-router-dom";

function App() {
  const [surah, setSurah] = useState("1");

  const surrahSelect = (num) => {
    setSurah(num);
  };

  const selectElement = (
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
        <Route path="/surah" element={<SelectedSurah surah={surah} />} />
      </Routes>
    </div>
  );
}

export default App;
