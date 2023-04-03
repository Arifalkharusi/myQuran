import React from "react";
import { Link } from "react-router-dom";

const Surah = ({ data, select }) => {
  return (
    <Link to="/surah" onClick={() => select(data.number)} className="link">
      <div className="surah">
        <div className="number">
          <img src={require("../../clipart1911133.png")} alt="" />
          <div>{data.number}</div>
        </div>
        <div className="name">
          <div>{data.name}</div>
          <div className="verses">{data.verses} VERSES</div>
        </div>
        <div className="arabic-name">
          <div>{data.arabicName}</div>
        </div>
      </div>
    </Link>
  );
};

export default Surah;
