"use client"

import { Atom } from "jotai";
import { squareState } from "@/state/squareState";
import { Square } from "@/models/square";
import { useAtom } from "jotai";
import React from "react";
import { useState } from "react";
import './square.css';



export const Squares = () => {
    const [zellen, setZellen] = useState(Array(9).fill(""));

    const [spieler, setSpieler] = useState("X");
    const [gewinner, setGewinner] = useState<string | null>(null);

    const wechseln = () => {
        setSpieler(spieler === "X" ? "O" : "X");
        };

    const gewinnKombinationen = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    const pruefeGewinner = (aktuelleZellen: string[]) => {
        for(var kombination of gewinnKombinationen) {
            const [a, b, c] = kombination;
            if(
                aktuelleZellen[a] &&
                aktuelleZellen[a] === aktuelleZellen[b] &&
                aktuelleZellen[a] === aktuelleZellen[c]
            ) {
                return aktuelleZellen[a]
            }
        }
        return null;
    }
    

    const handleClick = (index: number) => {
        if(zellen[index] == "" && !gewinner) {
            setZellen(prevZellen => {
                const newZellen = [...prevZellen];
                newZellen[index] = spieler;

                const evtlGewinner = pruefeGewinner(newZellen);
                if(evtlGewinner) {
                    setGewinner(evtlGewinner);
                } else {
                    wechseln();
                }

                return newZellen;
                
            });
        }
    }
    
    const Feld = zellen.map((wert, index) => (
        <div 
            key={index} 
            className="gridItem"
            onClick={() => handleClick(index)}
        >
        
            {wert}

        </div>
    ))
    return (

    <>

        <div className="aktuell">
            {gewinner ? `Gewinner: ${gewinner}` : `Aktueller Spieler: ${spieler}`}

            
        </div>

        <div className="gridContainer">
            {Feld}
        </div>
    </>

    )
}
