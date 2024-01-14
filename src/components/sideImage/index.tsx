import Image from 'next/image'
import React from 'react'

type img = {
    image?: any;
}

const SideImage = ({image}:img) => {
  return (
    <Image
        src={image}
        alt="Vercel Logo"
        className="dark:invert"
        width={799.5}
        height={848.5}
        priority
    />
  )
}

export default SideImage