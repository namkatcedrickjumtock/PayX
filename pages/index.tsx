import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Hero_Headers from '../components/Hero_Headers'

const Home: NextPage = () => {
  return (
    // https://logos-download.com/wp-content/uploads/2016/09/Dribbble_logo_black.png
    <>
      <Head>
        <link rel="icon" href="https://cdn.dribbble.com/assets/dribbble-ball-192-23ecbdf987832231e87c642bb25de821af1ba6734a626c8c259a20a0ca51a247.png" />
        <title>Dribbble - Discover the World’s Top Designers &amp; Creative Professionals</title>
      </Head>
      <div className="">
        <Header />

        {/* hero section starts here */}
        <div className='mt-5 w-screen'>
          <div className='flex items-center  space-x-1 ml-0 pl-14 justify-evenly  overflow-x-scroll scrollbar-hide'>
            <Hero_Headers data={"Discover"} />
            <Hero_Headers data={"Animation"} />
            <Hero_Headers data={"Branding"} />
            <Hero_Headers data={"Illustration"} />
            <Hero_Headers data={"Mobile"} />
            <Hero_Headers data={"Print"} />
            <Hero_Headers data={"Product Design"} />
            <Hero_Headers data={"Typography"} />
            <Hero_Headers data={"Web Design"} />
          </div>
        </div>

        <video autoPlay loop muted>
          <source src="/vid.mp4" type="" />
        </video>
      </div>
    </>
  )
}

export default Home
