import React from "react";

import "./square.css";

const Square = ({ value, onClick }: { value: string; onClick: () => void }) => {
  return (
    <button className="gridItem" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
