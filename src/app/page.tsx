"use cilent"

import Image from "next/image";
import styles from "./page.module.css";
import { Squares } from "./components/square/square";
import { Title } from "./components/title/title";
import { Board } from "./components/Board/board";

export default function Home() {
  return (

    <div className={styles.page}>
       
      <Title/>
          
      <Squares/>

    </div>
  );
}
