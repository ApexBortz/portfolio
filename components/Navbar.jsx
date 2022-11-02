import Link from 'next/link'
import Image from 'next/image'
import { AiFillHome } from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className='relative w-1/2 h-20 shadow-xl rounded-xl'>
            <div className='flex justify-center w-full h-full px-2 2xl:px-16'>

                <div className='mt-4'>
                    <ul className='flex justify-center'>
                        <Link href='/'>
                            <button className='p-2 mx-2 hover:scale-110'>Home</button>
                        </Link>
                        <Link href='/'>
                            <button className='p-2 mx-2 hover:scale-110'>About</button>
                        </Link>
                        <Link href='/'>
                            <button className='p-2 mx-2 hover:scale-110'>Skills</button>
                        </Link>
                        <Link href='/'>
                            <button className='p-2 mx-2 hover:scale-110'>Projects</button>
                        </Link>
                        <Link href='/'>
                            <button className='p-2 mx-2 hover:scale-110'>Contact</button>
                        </Link>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar