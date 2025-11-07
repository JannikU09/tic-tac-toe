import React from "react";

import "./page.css";

import { Title } from "@/components/title/title";
import { Board } from "@/components/board/board";

export default function Page() {
  return (
    <>
      <Title title="Tic| Tac |Toe" size="bigTitle" />
      <Board />
    </>
  );
}
