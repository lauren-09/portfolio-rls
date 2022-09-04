import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import DP from '../Assets/profile.png'
import Bulb from '../Assets/bulb.jpg'
import { Parallax } from 'react-parallax'

const Home = () => {
    return (
        
        <div name ='home' className='Home w-full h-screen bg-[#A9927D]'>
            {/* Container */}
            
            <div className=' max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full relative'>
            
            <div>
                <p className='text-[#F2F4F3]'> Hello, I am</p>
                <h1 className='text-3xl sm:text-7xl font-bold text-[#0A0908]'>Ralph Lauren Y. Santos</h1>
                <h2 className='text-3xl sm:text-7xl font-bold text-[#F2F4F3]'>I'm a Developer</h2>
                <p className='text-[#F2F4F3] py-4 max-w'>I'm a developer, aiming to provide a quality assured, well-designed, and responsive
                    applications. 
                </p>
            </div>
                
                
                
                {/* Button for works */}
                <div>
                    <button className='text-[#0A0908] rounded-md group bg-[#A9927D] text-sm font-bold border-[#0A0908] border-2 px-6 py-3 my-2 flex items-center border-solid hover:bg-[#F2F4F3] hover:border-[#0A0908]'>Explore my works 
                        <span className='group-hover:rotate-90 duration-700'>
                            <HiArrowNarrowRight className='ml-3'/>
                        </span>
                    </button>
                </div>
            </div>
            
            
            
        </div>
    )
}

export default Home