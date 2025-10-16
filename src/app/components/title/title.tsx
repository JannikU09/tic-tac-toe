"use client"

import '@/app/components/title/title.css'
import React from 'react';

export const Title = ({ title, size } : { title: string, size: string}) => {
    const cssClass = size === 'bigTitle' ? 'bigTitle' : 'smallTitle';

    return(
        <div className={`title ${cssClass}`}>
            { title }
        </div>
    );
}
