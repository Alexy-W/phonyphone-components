import React, { useEffect } from 'react'
import { ComponentProps } from '../../types'

interface MediaObject {
    contentUrl?: string
}

interface Params {
    image?: MediaObject | null
    objectFit?: 'cover' | 'contain' | 'fill'
    timeOut?: number | string
}

declare global {
    interface Window {
        __phonyphone_config__?: { apiUrl?: string }
    }
}

function resolveImageUrl(image: MediaObject | null | undefined): string | null {
    if (!image?.contentUrl) return null
    const { contentUrl } = image
    if (contentUrl.startsWith('data:') || contentUrl.startsWith('http')) {
        return contentUrl
    }
    const apiUrl = window.__phonyphone_config__?.apiUrl ?? ''
    return `${apiUrl}/${contentUrl}`
}

export default function ImageComponent({ parameters, onComplete }: ComponentProps) {
    const { image, objectFit = 'cover', timeOut } = (parameters ?? {}) as Params

    const imageUrl = resolveImageUrl(image ?? null)
    const timeoutMs = timeOut ? parseInt(String(timeOut), 10) : undefined

    useEffect(() => {
        if (timeoutMs && timeoutMs > 0) {
            const timer = setTimeout(() => onComplete(), timeoutMs)
            return () => clearTimeout(timer)
        }
    }, [timeoutMs, onComplete])

    if (!imageUrl) {
        return (
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#111',
                    color: '#666',
                    fontSize: 14,
                    cursor: 'pointer',
                }}
                onClick={onComplete}
            >
                Aucune image sélectionnée
            </div>
        )
    }

    return (
        <img
            src={imageUrl}
            alt=""
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit,
                display: 'block',
                cursor: 'pointer',
            }}
            onClick={onComplete}
        />
    )
}
