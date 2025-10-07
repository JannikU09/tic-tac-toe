"use cilent"

import Image from "next/image";
import styles from "./page.module.css";
import { Grid } from "./square";

export default function Home() {
  return (
    <div className={styles.page}>
       
        <div className={styles.header}>
          Tic-Tac-Toe
        </div>

          
          <Grid/>
        

      
          

    </div>
  );
}
