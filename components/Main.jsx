import { AiFillFacebook } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'

const Main = () => {
    return(
        <div className='w-full h-full text-center'>
            <div className='w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <h2 className='font-sans tracking-wide text-gray-700'> Hi, I'm <span className='underline decoration-lime-500'>Nicholas Bortz</span> </h2>
                    <h2 className='font-sans tracking-wide text-gray-700'> A Full-Stack Software Engineer </h2>
                    <div className='flex justify-center items-center mt-4'>
                        <div className='p-3 shadow-lg rounded-xl mx-2 hover:scale-110'>
                            <AiOutlineMail size={35}/>
                        </div>
                        <div className='p-3 shadow-lg rounded-xl mx-2 hover:scale-110'>
                            <AiFillLinkedin size={35}/>
                        </div>
                        <div className='p-3 shadow-lg rounded-xl mx-2 hover:scale-110'>
                            <AiFillGithub size={35}/>
                        </div>
                        <div className='p-3 shadow-lg rounded-xl mx-2 hover:scale-110'>
                            <AiFillInstagram size={35}/>
                        </div>
                        <div className='p-3 shadow-lg rounded-xl mx-2 hover:scale-110'>
                            <AiFillFacebook size={35}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main