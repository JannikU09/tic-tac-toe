"use client";
import React, { useState } from "react";

import "./board.css";

import Square from "../square/square";
import { Title } from "../title/title";

export const Board = () => {
  const [zellen, setZellen] = useState(Array(9).fill(null));
  const [spieler, setSpieler] = useState("X");
  const [gewinner, setGewinner] = useState<string | null>(null);

  const wechseln = () => {
    setSpieler(spieler === "X" ? "O" : "X");
  };

  const gewinnKombinationen = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const pruefeGewinner = (aktuelleZellen: string[]) => {
    for (const kombination of gewinnKombinationen) {
      const [a, b, c] = kombination;
      if (
        aktuelleZellen[a] &&
        aktuelleZellen[a] === aktuelleZellen[b] &&
        aktuelleZellen[a] === aktuelleZellen[c]
      ) {
        return aktuelleZellen[a];
      }
    }
    return null;
  };

  const pruefeUnentschieden = (aktuelleZellen: string[]) => {
    return aktuelleZellen.every((zellen) => zellen === "X" || zellen === "O");
  };

  const handleClick = (index: number) => {
    if (zellen[index] == null && !gewinner) {
      setZellen((prevZellen) => {
        const newZellen = [...prevZellen];
        newZellen[index] = spieler;

        const evtlGewinner = pruefeGewinner(newZellen);

        const evtlUnentschieden = pruefeUnentschieden(newZellen);

        if (evtlGewinner) {
          setGewinner("Gewinner: " + evtlGewinner);
        } else if (evtlUnentschieden) {
          setGewinner("Unentschieden");
        } else {
          wechseln();
        }
        return newZellen;
      });
    }
    console.log("Geklickt");
  };

  function zelleDarstellen(index: number) {
    return (
      <Square
        key={index}
        value={zellen[index]}
        onClick={() => handleClick(index)}
      />
    );
  }

  return (
    <div>
      <Title
        size="smallTitle"
        title={gewinner ? gewinner : `Aktueller Spieler: ${spieler}`}
      />

      <div className="gridContainer">
        {zellen.map((_, index) => zelleDarstellen(index))}
      </div>
      <Title size="smallTitle" title="Spielstand: " />
    </div>
  );
};
