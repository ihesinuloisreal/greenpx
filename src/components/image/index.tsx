import Image from 'next/image'
import React from 'react'

type img = {
    src?: any;
    height?: any;
    width?: any;
    alt?: any;
    className?: any;
    priority?: any;
}

const ImageComponent = ({src, height, width, alt, className, priority}:img) => {
  return (
    <Image
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        priority
    />
  )
}

// alt="Vercel Logo"
//         className="dark:invert"
//         width={799.5}
//         height={848.5}

export default ImageComponent