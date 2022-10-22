import { useState } from "react"


type CardProps = {
    profilePicture: string,
    bio: string,
    media: string[]
}

export default function Card({ data }: ) {

    return <>
        {data.profilePicture}
    </>
}

function getServerSideProps() {

    const data = {
        profilePicture: '',
        bio: '',
        media: ''
    }

    return { props: {data} }
}