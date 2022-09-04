import React from 'react'

const About = () => {
return (
    <div name="about" className='About w-full h-screen bg-[#0A0908] text-[#F2F4F3]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-left pb-8 pl-4 pt-4'>
                    <p className='text-4xl sm:text-7xl inline border-b-2 border-[#F2F4F3] font-bold '>About</p>
                </div>
                <div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-1 gap-8 px-4'>
                    <div className='sm:text-left text-4xl font-bold'>
                        <p>Hello, I'm Ralph, Feel free to look around.</p>
                    </div>
                </div>
                <div>
                    <p className='font-regular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A arcu cursus vitae congue
                    mauris. Id diam vel quam elementum. Lectus proin nibh nisl condimentum id. Tincidunt nunc pulvinar
                    sapien et ligula ullamcorper malesuada proin libero. Dui nunc mattis enim ut tellus elementum 
                    sagittis vitae. Eget felis eget nunc lobortis mattis. Pretium nibh ipsum consequat nisl vel 
                    pretium lectus. Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Pulvinar neque laoreet
                    suspendisse interdum consectetur. In hendrerit gravida rutrum quisque non tellus orci ac auctor. 
                    Tellus cras adipiscing enim eu. Gravida quis blandit turpis cursus in hac habitasse platea. 
                    Auctor eu augue ut lectus arcu bibendum at.</p>
                </div>
            </div>
        </div>
    </div>
)
}

export default About