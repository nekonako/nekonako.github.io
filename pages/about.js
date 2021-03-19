import React  from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import SideNav from "../components/SideNav"
import Head from 'next/head'
import Masonry from 'react-masonry-css'
import Link from 'next/link'

const ricing = [
    {
        img : '/assets/ricing/nako-classic.png'
    },
    {
        img: '/assets/ricing/furare-girl.png'
    },
    {
        img: '/assets/ricing/fuel.png'
    },
    {
        img: '/assets/ricing/palenight-i3.png'
    },
]

const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
};

function About() {
    return (
        <>
            <Head>
                <title>About | Nekonako</title>
                <meta data-hid="og:image" property="og:image" content="/assets/nako.jpg"/>
                <meta property='og:image' content="/assets/nako.jpg" />
            </Head>
            <Navbar />
            <SideNav/>
            <div className="relative flex w-full min-h-screen md:w-2/3">
                <main className="flex-1">
                    <div className="min-h-screen px-4 py-1 mt-20 md:m-8">
                        <div className="text-2xl font-bold"> <span className="text-accent"># </span>
                        Hallo Semuanya</div> Nama saya Galih Wisnuaji.
                        <br/>
                        Cuma seorang penikmat kopi dan drama.
                        <div className="pt-8 text-2xl font-bold">
                            <span className="text-accent"># </span>
                        Kontak</div>
                        <a href="mailto:code.yuune@gmail.com" rel="external noopener">ne.nekonako@gmail.com</a>
                        <div className='mt-8 footer'></div>
                        <div className='py-4 text-2xl font-bold'>Ricing Journey</div>
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column"
                        >
                            {ricing.map((ricing)=> {
                                return(
                                    <>
                                        <Link href={ricing.img}>
                                            <div className='overflow-hidden shadow-lg rounded-md'>
                                                <img src={ricing.img}/>
                                            </div>
                                        </Link>
                                        </>
                                )
                            })}
                        </Masonry>
                    </div>
                    <Footer />
                </main>
            </div>
            </>
    )
}

export default About
