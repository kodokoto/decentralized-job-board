import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className=' rounded-lg bg-white flex flex-row items-center m-8 mb-0' >
            <Image src={''} width={64} height={64}/>
            <p className='text-black'>search</p>
        </nav>
    )
}
