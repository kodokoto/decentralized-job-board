
import { GetServerSideProps, GetStaticProps } from 'next'
import { useState } from 'react';
import Card from '../components/Card'

interface Props {
    data?: {
        profilePicture: string,
        bio: string,
        media: string[]
    },

}

export default function Explore({ data, ...props } : Props) {

    const [expanded, setExpanded] = useState(false);


    return (
        <>
            {data?.profilePicture},
            {data?.bio}
            { expanded?
                null
                :
            }
            {data?.media}

        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const data = await {
        profilePicture: 'joe smith',
        bio: 'dev',
        media: 'some/image.png'
    }

    return { props: {data} }
}
  