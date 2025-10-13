"use client"

import React from "react"
import '@/app/page/page.css'
import { Squares } from "../components/square/squares"
import { Title } from "../components/title/title"
import { Board } from "../components/board/board"


export const Page = () => {
  return (
    <>
      <Title/>
    
      <Board/>
    </>
  )
}
