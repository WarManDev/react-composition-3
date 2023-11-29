import React from "react";

export default function CollapseInfo({ collapsedLabel, expandedLabel }) {
  const infoArr = ["Вариант 1", "Вариант 2"];

  return (
    <div className='collapse' id='collapseExample'>
      <div
        className={`card ${collapsedLabel || expandedLabel ? "on" : null}  ${
          !collapsedLabel && !expandedLabel ? "off" : null
        }`}
      >
        {collapsedLabel && infoArr[0]}
        {expandedLabel && infoArr[1]}
      </div>
    </div>
  );
}
