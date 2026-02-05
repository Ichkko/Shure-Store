import React, { useEffect, useState } from 'react'
import Image, { type ImageProps } from 'next/image'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

type ImageWithFallbackProps = Omit<ImageProps, 'src' | 'alt'> & {
  src: string
  alt: string
  fallbackSrc?: string
}

export function ImageWithFallback(props: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(props.src)

  const handleError = () => {
    setDidError(true)
    setCurrentSrc(props.fallbackSrc ?? ERROR_IMG_SRC)
  }

  useEffect(() => {
    setDidError(false)
    setCurrentSrc(props.src)
  }, [props.src])

  const { alt, className, onError, ...rest } = props
  const shouldFill = rest.fill ?? (!rest.width && !rest.height)
  const sizes = rest.sizes ?? (shouldFill ? '100vw' : undefined)

  return (
    <Image
      {...rest}
      src={currentSrc}
      alt={alt}
      className={className}
      fill={shouldFill}
      sizes={sizes}
      unoptimized={didError || currentSrc.startsWith('data:')}
      onError={(event) => {
        handleError()
        onError?.(event)
      }}
    />
  )
}
