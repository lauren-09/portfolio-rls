import React from 'react'
import {FaGithub, FaLinkedin} from  'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {

    const links =[
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30}/>
            </>
            ),
            href: 'http://www.linkedin.com',
                style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                Github <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/lauren-09',
                style: 'rounded-tr-md'
        },
        {
            id: 3,
            child: (
                <>
                Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto: ralphsantos56@gmail.com',
                style: 'rounded-tr-md'
        },
        {
            id: 4,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: '/resume.pdf',
                style: 'rounded-br-md',
                    download: true,
        },
    ]

    return (
        
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    {links.map(({id, child, href, style, download}) => (
                        <li key={id} className={'w-40 h-14 px-4 flex justify-between items-center ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300 bg-[#F2F4F3]' + " " + style}>
                            <a href={href} className='flex justify-between items-center w-full text-[#0A0908]' 
                            download={download} 
                            target='_blank' 
                            rel='noreferrer'>
                                {child}
                            </a>
                        </li>
                    ))}   
                </ul>
        </div>
        
    )
}

export default SocialLinks