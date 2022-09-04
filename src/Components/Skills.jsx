import React from 'react'

import HTML from '../Assets/html.png';
import Android from '../Assets/android.png';
import CSS from '../Assets/css.png';
import Firebase from '../Assets/firebase.png';
import ReactImg from '../Assets/react.png';
import Github from '../Assets/github.png';
import Java from '../Assets/java.png';
import Javascript from '../Assets/javascript.png';
import { FaGit, FaGithub } from 'react-icons/fa';



const Skills = () => {
return (
    <div name='skills'  className='Skills w-full h-screen bg-[#A9927D] text-[#0A0908]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl sm:text-7xl inline border-b-4 border-[#0A0908] font-bold '>Skills</p>
                <p className='text-xl font-light py-8'>// These are the technologies that i've used.</p>
            </div>

            <div className='w-full grid grid-cols-2  sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md bg-[#0A0908] text-[#F2F4F3] rounded-md font-medium shadow-[#F2F4F3] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-5' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md bg-[#0A0908] text-[#F2F4F3] rounded-md font-medium shadow-[#F2F4F3] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-5' src={Android} alt="Android icon" />
                    <p className='my-4'>Android Studio</p>
                </div>
                <div className='shadow-md bg-[#0A0908] text-[#F2F4F3] rounded-md font-medium shadow-[#F2F4F3] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-5' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md bg-[#0A0908] text-[#F2F4F3] rounded-md font-medium shadow-[#F2F4F3] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-5' src={Firebase} alt="Firebase icon" />
                    <p className='my-4'>Google Firebase</p>
                </div>
                <div className='shadow-md bg-[#0A0908] text-[#F2F4F3] rounded-md font-medium shadow-[#F2F4F3] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-5' src={ReactImg} alt="React icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md bg-[#0A0908] text-[#F2F4F3] rounded-md font-medium shadow-[#F2F4F3] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-5' src={Github} alt="Github icon" />
                    <p className='my-4'>Github</p>
                </div>
                <div className='shadow-md bg-[#0A0908] text-[#F2F4F3] rounded-md font-medium shadow-[#F2F4F3] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-5' src={Java} alt="Java icon" />
                    <p className='my-4'>Java</p>
                </div>
                <div className='shadow-md bg-[#0A0908] text-[#F2F4F3] rounded-md font-medium shadow-[#F2F4F3] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-5' src={Javascript} alt="Javascript icon" />
                    <p className='my-4'>Javascript</p>
                </div>
            </div>
        </div>
    </div>
)
}

export default Skills