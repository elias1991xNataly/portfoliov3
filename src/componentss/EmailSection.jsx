"use client";
import React, { useState } from 'react';

import CodewarsIcon from "../../public/images/codewars-svgrepo-com.svg";
import GithubIcon from "../../public/images/github-icon.svg";
import LinkedinIcon from "../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from 'next/image';

const EmailSection = () => {



    
    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative' >
            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2'></div>
            <div className='z-10'>
                <h5 className='text-xl font-bold text-white my-2'>Let´s Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}
                    I´m currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I´ll try my best to get back to you!
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link target='_blank' href="github.com">
                        <Image src={GithubIcon} alt='Github Icon' />
                    </Link>
                    <Link target='_blank' href="linkedin.com">
                        <Image src={LinkedinIcon} alt='Linkedin Icon' />
                    </Link>
                    <Link target='_blank' href="https://www.codewars.com/users/EliasxNataly">
                        <Image src={CodewarsIcon} alt='Codewars Icon' />
                    </Link>
                </div>
            </div>
           
        </section>
    )
}

export default EmailSection