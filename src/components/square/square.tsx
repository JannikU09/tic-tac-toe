import React from "react";

import "./square.css";

export const Square = ({
  value,
  onClick,
}: {
  value: string;
  onClick: () => void;
}) => {
  return (
    <button className="gridItem" onClick={onClick}>
      {value}
    </button>
  );
};
