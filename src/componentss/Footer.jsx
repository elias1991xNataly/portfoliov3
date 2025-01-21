import React from 'react';
import Image from 'next/image';
import LOGO from "../../public/images/logo.png";

const Footer = () => {
    return (
        <footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
            <div className='container p-12 flex justify-between'>
            <Image alt="Logo" width={100} height={100} src={LOGO}/>
                <p className='text-slate-600'>All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer