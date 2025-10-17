import React from "react"
import '@/app/page/page.css'
import { Title } from "../components/title/title"
import { Board } from "../components/board/board"


export const Page = () => {
  return (
    <>
      <Title title="Tic| Tac |Toe" size="bigTitle"/>
      <Board/>
    </>
  )
}
