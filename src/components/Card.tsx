import { Carousel } from '@mantine/carousel'
import Image from 'next/image'
import { useState } from 'react'


export default function Card(props: any) {
    console.log('ping')
    console.log()
    // const styles = {
    //     width: ,
    // }
    let largest = props.data.length
    function getNextActive(active: number) {
        if (active == largest) {
            return 0
        } else {
            return active + 1
        }
    }
    
    const [active, setActive] = useState(0)
    console.log("aiwdugauiwydg")
    console.log(props.data)



    return (
        <>
            <article className=" aspect-[5/7] m-8 rounded-lg flex flex-col items-center">
                <div className='flex flex-row w-[95%]'>
                    <div className='rounded-[50%]'>
                        <Image src={props.data.profilePicture} width={32} height={32}/>
                    </div>
                    <p>{props.data.username}</p>

                </div>
                <section className="bg-gray-400 rounded-lg h-[95%] w-[95%]">
                <Carousel withIndicators style={{ height: '100%'}}>
                    {
                        props.data.posts.map((e: { media: string, likes: number}, i: number) => {
                            <Carousel.Slide><Image src={e.media} layout={'fill'} objectFit={'cover'}/></Carousel.Slide>
                        })
                    }
                </Carousel>
                </section>
            </article>
            <div>
            </div>
        </>
    )
}