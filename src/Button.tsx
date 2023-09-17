import React from 'react'

interface ButtonProps {
     title: string;
}

export default function Button ({title}: ButtonProps) {
    return (
        <button style={{border: '1px solid blue', padding: 16}}>
            {title}
        </button>
    )
}