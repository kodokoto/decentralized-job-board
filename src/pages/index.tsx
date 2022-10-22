import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [count, setCount] = useState(0);
  return (

    <>
        {count}
        <button onClick={()=> {setCount(count+1)}}>click me</button>
    </>
  )
}

export default Home
