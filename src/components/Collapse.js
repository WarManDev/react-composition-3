import { React, useState } from "react";

export default function Collapse({
  collapsedLabel,
  expandedLabel,
  isDisplay,
  children,
}) {
  const [collapseState, setCollapse] = useState(isDisplay);

  const style = { maxHeight: "500px" };
  const handleDisplay = () => {
    setCollapse((prev) => !prev);
  };

  return (
    <div className='containier'>
      <div className='collapse'>
        <p>
          <a
            class='btn btn-primary'
            href='#collapseExample'
            onClick={handleDisplay}
          >
            {collapseState ? expandedLabel : collapsedLabel}
          </a>
        </p>
        <div
          className='Collapse__container'
          style={collapseState ? style : null}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

Collapse.defaultProps = {
  collapsedLabel: "Развернуть",
  expandedLabel: "Свернуть",
  isExpanded: true,
};
