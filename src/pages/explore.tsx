
import { GetServerSideProps, GetStaticProps } from 'next'
import { useState } from 'react';
import Card from '../components/Card'
import db from '../../fakedb/data.json'
import Navbar from '../components/Navbar'
import { ActionIcon } from '@mantine/core';
import { IconHeart, IconX } from '@tabler/icons';
interface Props {
    username: string; // use to fetch media
    smartContracts: Contract[]
}



interface Contract {
    name: string
    buyer: string, // wallet addresses
    seller: string,
    value: number,
    status: ContractStatus
}

enum ContractStatus {
    COMPLETED,
    ONGOING,
    DEFAULTED
}


interface Props {
    data: {
        profile: string,
        bio: string,
        media: string[]
    },

}

function handleSwipe() {
    // const 
}

export default function Explore({ data, ...props } : any) {

    const [expanded, setExpanded] = useState(false);
    const [active, setActive] = useState(0)
    const [posts, setPosts] = useState([])
    console.log("pong")
    console.log(data['0'])
    
    return (
        <>
            <main className='flex flex-col w-[100vw] h-[100vh] bg-gradient-to-r from-cyan-500 to-blue-500'>
                <Navbar/>
                {
                    
                    data.map((e: any, i: number) => {
                        const [isShowing, setIsShowing] = useState(i==0 ? true : false)
                        // setPosts(posts.push(setIsShowing))
                        return <Card data={e} dataset={i==0 ? "active": "unknown"} />
                    })
                }
                {/* <Card data={data['0']} dataset={"active"}/> */}
                {/* <div className='flex flex-row justify-start align-items-start'>
                    <button onClick={() => setExpanded(true)}>swipe up</button>
                    <button onClick={() => setExpanded(false)}>swipe down</button>
                    <button onClick={() => fetch('/api/connect', {
                        method: 'POST',
                        body: JSON.stringify({name: data.profile})
                    })}>Swipe Right</button>
                </div> */}
                <div className='flex flex-row justify-evenly'>
                    <ActionIcon variant="filled" size={64}><IconX size={32} /></ActionIcon>
                    <ActionIcon variant="filled" size={64}><IconHeart size={32} /></ActionIcon>

                    {/* <button onClick={() => {
                        setActive(active - 1 >= 0 ? active - 1 : props.data.length - 1)
                    }}>dislike</button>

                    <button onClick={()=>{
                        setActive(active + 1 <= props.data.length - 1 ? active + 1 : 0)
                    }}>like</button> */}
                </div>
                

            </main>
        </>
        
    )
}

function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
    return key in obj
}  

export const getServerSideProps: GetServerSideProps = async (context) => {

    let data: any = []
    const hashes: string[] = await ['hash1'] // TODO: get from backend

    for (const hash of hashes) {
        if (hasKey(db.data, hash)) {
            data.push(db.data[hash])
        }
    }
    console.log("gsp")
    console.log(data)
    return { props: {data} }
}
  