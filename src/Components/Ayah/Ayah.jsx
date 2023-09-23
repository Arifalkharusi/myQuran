const Ayah = ({ ayah, num, ayahNum, translation, curr }) => {
  const numberConvert = (arr) => {
    const arabicNumerals = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

    const arabicNum = arr
      .split("")
      .map((x) => (x = arabicNumerals[x]))
      .join("");

    return arabicNum;
  };

  return (
    <div
      className={`ayah ayah-${ayahNum} ${num === 1 && "border"}`}
      onDoubleClick={() => curr(ayahNum)}
    >
      <div className="right-sec">
        <div className="a-para">
          <span className="number">﴾ {numberConvert(String(num))} ﴿</span>
          <span>{ayah}</span>
        </div>
        <div
          className="translation"
          style={{ display: translation ? "block" : "none" }}
        >
          <span className="t-number">{num}</span> {translation}
        </div>
      </div>
      <div className="left-sec"></div>
    </div>
  );
};

export default Ayah;
