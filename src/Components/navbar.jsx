import React, {useState} from 'react'
import {FaBars, FaTimes} from  'react-icons/fa'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const links =[
        {
            id:1,
            link: 'home'
        },
        {
            id:2,
            link: 'about'
        },
        {
            id:3,
            link: 'skills'
        },
        {
            id:4,
            link: 'works'
        },
        {
            id:5,
            link: 'contact'
        },
    ]
    return (
        
    <div className='fixed w-full justify-between items-center bg-[#F2F4F3] text-[#333333] flex h-20 px-4 text-[#F2F4F3]'>
            <h1 className='text-[#0A0908] underline underline-offset-8 decoration-[#22333B] w-full font-bold text-3xl'>RLS</h1>
            
            {/* Menu */}
                <ul className='hidden md:flex'>
                    {links.map(({id, link}) =>(
                        <li key={id} className='px-4 capitalize font-medium text-[#0A0908] hover:scale-105 duration-200' >
                            
                        <Link to={link} smooth duration={1000}>{link} </Link>
                        </li>
                    ))}
                </ul>
            
            {/* Hamburger*/}
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-[#1D1D20] md:hidden'>
                {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
            </div>

            {nav && (
                <ul className='absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-white text-[#1D1D20]'>
                {links.map(({id, link}) =>(
                        <li key={id} className='text-4xl py-6 px-4 capitalize font-light text-white hover:scale-105 duration-200' >{link} </li>
                    ))}
                </ul>
            )}
        </div>
        
        
    )
}

export default Navbar