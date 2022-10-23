import { Carousel } from '@mantine/carousel'
import Image from 'next/image'
import { useState } from 'react'


export default function Card(props: any) {
    console.log('ping')
    console.log()
    let largest = props.data.length    
    const [active, setActive] = useState(0)
    console.log("aiwdugauiwydg")
    console.log(props.data)

    return (
        <>
            <article className=" aspect-[5/7] m-8 rounded-lg flex flex-col items-center">
                <div className='flex flex-row w-[95%]'>
                    <div className='rounded-[50%]'>
                        {/* <Image src={props.data.profilePicture} width={32} height={32}/> */}
                    </div>
                    <p>{props.data.username}</p>

                </div>
                <section className=" rounded-lg h-[95%] w-[95%]">
                <Carousel mx={'auto'} withIndicators style={{ height: '100%', width: '100%'}}>
                            <Carousel.Slide >
                                <Image src={'/happy-old-man-sitting-sofa-laptop-27720792.jpeg'} width={400} height={700} layout={'responsive'} objectFit={'cover'}/>
                            </Carousel.Slide>
                            <Carousel.Slide >
                                <Image src={'/happy-old-man-sitting-sofa-laptop-27720792.jpeg'} layout={'fill'} objectFit={'cover'}/>
                            </Carousel.Slide>

                </Carousel>
                </section>
            </article>
            <div>
            </div>
        </>
    )
}