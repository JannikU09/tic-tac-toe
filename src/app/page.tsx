"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { Squares } from "./components/square/squares";
import { Title } from "./components/title/title";
import { Board } from "./components/board/board";
import { Page } from "./page/page";
import '@/app/page/page.css';

export default function Home() {
  return (

    <div className="page">
       
      <Page/>

    </div>
  );
}
