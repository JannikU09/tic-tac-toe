import '@/app/components/title/title.css'
import React from 'react';

export const Title = ({ title, size, onClick }: { title: string, size: string, onClick?: () => void}) => {
    const cssClass = size === 'bigTitle' ? 'bigTitle' : 'smallTitle';

    return (
        <div 
            className={`title ${cssClass}`}
            onClick={onClick ? onClick: undefined}
            style={{cursor: onClick ? 'pointer' : 'default'}}
        >
            {title}
        </div>
    );
}
