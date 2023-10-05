import React, { useState } from "react";
import SelectedSurah from "./Components/SelectedSurah";

function App() {
  const [surah, setSurah] = useState("1");

  return (
    <div className="App">
      <SelectedSurah surah={surah} changeSurah={setSurah} />
    </div>
  );
}

export default App;
