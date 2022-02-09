import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from "../pages/Aboutus"
import Navbar from './Components/Navbar/Navbar'
import Landing from '../pages/Components/Home/Home'
export default function Home() {
  return (
    <>
    <Landing/>
    </>
  )
}
