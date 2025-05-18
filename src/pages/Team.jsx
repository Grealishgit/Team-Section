import React, { useState } from 'react'
import bg from '../assets/login.jpg'
import boy from '../assets/boy.png'
import man from '../assets/man.png'
import woman from '../assets/woman.png'
import girl from '../assets/girl.png'
import video from '../videos/profile (1).webm'
import video1 from '../videos/profile (2).webm'
import video2 from '../videos/profile (3).webm'
import video3 from '../videos/video4.webm'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Team = () => {
    const team = [
        {
            id: 1,
            name: 'John Doe',
            role: 'CEO',
            image: man,
            video: video2,
            education: 'MBA from Harvard University',
            experience: '10 years in investment banking',
            skills: ['Leadership', 'Strategic Planning', 'Financial Analysis'],
            hobbies: ['Reading', 'Traveling', 'Golf'],
            socialMedia: {
                linkedin: 'https://www.linkedin.com/in/johndoe',
                twitter: 'https://twitter.com/johndoe',
            }
        },
        {
            id: 2,
            name: 'Jane Smith',
            role: 'CTO',
            image: woman,
            video: video3,
            education: 'PhD in Computer Science from MIT',
            experience: '8 years in software development',
            skills: ['JavaScript', 'React', 'Node.js'],
            hobbies: ['Coding', 'Gaming', 'Hiking'],
            socialMedia: {
                linkedin: 'https://www.linkedin.com/in/janesmith',
                twitter: 'https://twitter.com/janesmith',
            }
        },
        {
            id: 3,
            name: 'Alice Johnson',
            role: 'CFO',
            image: girl,
            video: video,
            education: 'Master in Finance from Stanford University',
            experience: '12 years in financial management',
            skills: ['Financial Modeling', 'Budgeting', 'Risk Management'],
            hobbies: ['Cooking', 'Yoga', 'Photography'],
            socialMedia: {
                linkedin: 'https://www.linkedin.com/in/alicejohnson',
                twitter: 'https://twitter.com/alicejohnson',
            }
        },
        // {
        //     id: 4,
        //     name: 'Bob Brown',
        //     role: 'COO',
        //     image: boy,
        //     video: video1,
        //     education: 'MBA from Wharton School',
        //     experience: '15 years in operations management',
        //     skills: ['Operations Strategy', 'Supply Chain Management', 'Process Improvement'],
        //     hobbies: ['Running', 'Cycling', 'Traveling'],
        //     socialMedia: {
        //         linkedin: 'https://www.linkedin.com/in/bobbrown',
        //         twitter: 'https://twitter.com/bobbrown',
        //     }
        // }

    ]
    const [memberPreview, setMemberPreview] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    return (
        <div
            className='justify-center bg-center bg-cover  w-full items-center bg-white/10 backdrop-blur-md border-white/20 flex flex-col min-h-screen'
        // style={{ backgroundImage: `url(${bg})` }}
        >


            <div className='md:mt-0 flex flex-col items-center mt-20 justify-center '>
                <h2 className="relative text-white text-2xl font-semibold cursor-pointer group">
                    Meet Our Team
                    <span className="absolute left-0 bottom-0 h-1 bg-green-500 w-0 group-hover:w-full transition-all duration-300"></span>
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 mx-4 gap-5 mt-5'>
                    {team.map(member => (
                        <div
                            key={member.id}
                            className='border border-white/20 cursor-pointer backdrop-blur-md bg-white/10 rounded-xl shadow-lg p-4 transition transform hover:scale-105 duration-300'
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className='rounded-full border border-green-500 w-32 h-32 mx-auto'
                            />
                            <h3 className='text-center text-xl text-green-500 font-semibold mt-2'>{member.name}</h3>
                            <p className='text-center text-white'>{member.role}</p>
                            <p className='text-center text-white'>{member.education}</p>
                            <p className='text-center text-white'>{member.experience}</p>
                            {/* <div className='grid grid-cols-2 justify-between gap-2 mt-2'>
                <div className='flex flex-col rounded-lg border border-white/20 backdrop-blur-sm bg-white/10 p-1 items-center'>
                  <p className='text-white text-center'>Skills</p>
                  <p className='text-white text-center'>{member.skills.join(', ')}</p>
                </div>
                <div className='flex flex-col rounded-lg border border-white/20 backdrop-blur-sm bg-white/10 p-1 items-center'>
                  <p className='text-white text-center'>Hobbies</p>
                  <p className='text-white text-center'>{member.hobbies.join(', ')}</p>
                </div>
              </div> */}

                            <div className='flex justify-center mt-2'>
                                <a
                                    href={member.socialMedia.linkedin}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='mr-2 text-gray-300 hover:text-green-400'
                                >

                                    LinkedIn
                                </a>
                                <a
                                    href={member.socialMedia.twitter}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-gray-300 hover:text-green-400'
                                >

                                    Twitter
                                </a>
                            </div>
                            <div className='flex flex-col items-center mt-4'>
                                <button
                                    onClick={() => {
                                        setSelectedMember(member);
                                        setMemberPreview(true);
                                    }}
                                    className='rounded-lg border cursor-pointer border-green-600 px-6 py-2 text-white'>
                                    Read More
                                </button>

                            </div>
                        </div>
                    ))}
                </div>

                {memberPreview && selectedMember && (
                    <div className='fixed inset-0 flex items-center  border-white/20 justify-center backdrop-blur-2xl w-full bg-black/70 z-50'>
                        <div className='md:flex fixed md:w-180 w-85 md:h-1/2 rounded-xl  overflow-hidden shadow-2xl'>

                            <div className='relative md:w-1/2 w-full md:flex items-center justify-center p-0'>
                                <video
                                    src={selectedMember.video}
                                    controls
                                    autoPlay
                                    loop
                                    className='w-full h-full object-cover'
                                >
                                    Your browser does not support the video tag.

                                </video>
                                <button
                                    onClick={() => setMemberPreview(false)}
                                    className='mt-6 absolute md:hidden -top-2 left-2 z-50 px-6 py-2 cursor-pointer bg-red-500 text-white rounded-lg'>
                                    Close
                                </button>
                            </div>


                            <div className='md:w-1/2 w-full md:relative  bg-center  flex flex-col justify-center items-center'
                                style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
                                <div className='flex flex-col items-center justify-center border-green-600 md:border-r border-b  w-full  h-full bg-white/10 backdrop-blur-md '>
                                    <img src={selectedMember.image} alt="member" className='rounded-full md:block hidden border border-green-600 w-30 h-30' />
                                    <h3 className='text-center text-xl text-green-600 font-semibold'>{selectedMember.name}</h3>
                                    <p className='text-center text-white'>{selectedMember.role}</p>
                                    <p className='text-center text-white'>{selectedMember.education}</p>
                                    <p className='text-center text-white'>{selectedMember.experience}</p>
                                    <div className='flex justify-center mb-4 mt-2'>
                                        <a
                                            href={selectedMember.socialMedia.linkedin}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='mr-2 border flex flex-row gap-1 items-center border-green-600 rounded-lg px-4 p-2 text-gray-300 hover:text-green-400'
                                        >
                                            <FaLinkedin className='text-blue-500' />
                                            LinkedIn
                                        </a>
                                        <a
                                            href={selectedMember.socialMedia.twitter}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-gray-300 flex flex-row gap-1 items-center border border-green-600 px-5 rounded-lg w-full p-2 hover:text-green-400'
                                        >
                                            <FaXTwitter className='text-white' />
                                            Twitter
                                        </a>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setMemberPreview(false)}
                                    className='mt-6 absolute top-0 right-4  px-6 py-2 hidden md:block cursor-pointer bg-red-500 text-white rounded-lg'>
                                    Close
                                </button>

                            </div>

                        </div>
                    </div>
                )}

            </div>
        </div>

    )
}

export default Team