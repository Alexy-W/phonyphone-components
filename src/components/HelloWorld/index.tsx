import React from 'react'
import { ComponentProps } from '../../types'

interface Params {
    text?: string
    color?: string
    fontSize?: number
}

export default function HelloWorld({ parameters, onComplete }: ComponentProps) {
    const { text = 'Hello, World!', color = '#ffffff', fontSize = 48 } = parameters as Params

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                fontSize: `${fontSize}px`,
                color,
                fontFamily: 'sans-serif',
            }}
            onClick={onComplete}
        >
            {text}
        </div>
    )
}
