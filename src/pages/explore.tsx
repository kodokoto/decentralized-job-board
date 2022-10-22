
import { GetServerSideProps, GetStaticProps } from 'next'
import { useState } from 'react';
import Card from '../components/Card'


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

export default function Explore({ data, ...props } : Props) {

    const [expanded, setExpanded] = useState(false);

    console.log(data);

    return (
        <>
            <div className='flex flex-col'>
                <p>{data?.profile}</p>
                <p>{data.bio}</p>
                <p>
                    { 
                        expanded
                        ? data.media
                        : null
                    }
                </p>
                <div className='flex flex-col justify-start align-items-start'>
                    <button onClick={() => setExpanded(true)}>swipe up</button>
                    <button onClick={() => setExpanded(false)}>swipe down</button>
                    <button onClick={() => fetch('/api/connect', {
                        method: 'POST',
                        body: JSON.stringify({name: data.profile})
                    })}>Swipe Right</button>
                </div>

            </div>
        </>
        
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const data = {
        profile: 'joe smith',
        bio: 'dev',
        media: 'some/image.png'
    }
    return { props: {data} }
}
  