import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
    return (
        <div className='relative w-1/2 h-20 shadow-xl rounded-xl'>
            <div className='flex justify-center w-full h-full px-2 2xl:px-16'>

                <div className='mt-4'>
                    <ul>
                        <Link href='/'>
                            <button className='p-2 mx-2'>Home</button>
                        </Link>
                        <Link href='/'>
                            <button className='p-2 mx-2'>About</button>
                        </Link>
                        <Link href='/'>
                            <button className='p-2 mx-2'>Skills</button>
                        </Link>
                        <Link href='/'>
                            <button className='p-2 mx-2'>Projects</button>
                        </Link>
                        <Link href='/'>
                            <button className='p-2 mx-2'>Contact</button>
                        </Link>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar