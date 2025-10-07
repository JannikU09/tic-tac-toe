"use client"

import { Atom } from "jotai";
import { squareState } from "@/state/squareState";
import { Square } from "@/models/square";
import styles from "./page.module.css";
import { useAtom } from "jotai";
import React from "react";
import { useState } from "react";


export const Grid = () => {
    const zellen = new Array(9).fill(" ");

    const [Square, setSquare] = useAtom(squareState);


    
    
    const Feld = zellen.map((_, index) => (
        <div key={index} className={styles.gridItem}>
            {
                
            }
        </div>
    ))
    


    return (

        

        <div className={styles.gridContainer}>
            {Feld}
        </div>
    )
}
