"use client"

import './board.css'
import React from 'react'
import { Squares } from '../square/square'

export const Board = () => {
    return (
        <>
            <div className='gridContainer'>
                <Squares/>
            </div>
        </>
    )
}
