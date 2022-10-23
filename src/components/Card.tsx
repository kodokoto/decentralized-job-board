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


    // let activeIndex = 0;

    // const groups = document.getElementsByClassName("card-group");
    
    // const handleLoveClick = () => {
    //   const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
      
    //   const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
    //         nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
            
    //   currentGroup.dataset.status = "after";
      
    //   nextGroup.dataset.status = "becoming-active-from-before";
      
    //   setTimeout(() => {
    //     nextGroup.dataset.status = "active";
    //     activeIndex = nextIndex;
    //   });
    // }
    
    // const handleHateClick = () => {
    //   const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;
      
    //   const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
    //         nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
      
    //   currentGroup.dataset.status = "before";
      
    //   nextGroup.dataset.status = "becoming-active-from-after";
      
    //   setTimeout(() => {
    //     nextGroup.dataset.status = "active";
    //     activeIndex = nextIndex;
    //   });
    // }

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