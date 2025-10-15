"use client"

import './board.css'
import React from 'react'
import { Squares } from '../square/squares'

export const Board = () => {
    return (
            <div className='board'>
                <Squares/>
            </div>
    )
}
