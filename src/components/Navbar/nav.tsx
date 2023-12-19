import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/images/image 47.png'

type Props = {}

const nav = (props: Props) => {
  return (
    <div className="navigation">
        <div className='logo'>
            <Image
                src={Logo}
                width={65.437}
                height={60}
                alt='Logo'
                className='img'/>
                <h3 className='LogoT'>Green PX</h3>
            
        </div>
        <ul className=''>
            <li>home</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Contact</li>

        </ul>
        <div className=''>
            <h6>Menu</h6>
            <p>icon</p>
        </div>
  </div>
  )
}

export default nav