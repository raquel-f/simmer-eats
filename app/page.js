import Image from 'next/image';

import { Typography } from './_utils/typography';

// components
import HomeNav from './_components/homeNav';
import Navbar from './_components/navbar';

export default function Home() {

  return (
    <>
      {/* Navigation */}
      <Navbar />

      <main className="home-bg flex flex-col items-center justify-between h-full">

        {/* Main Section */}
        <section className='w-full h-full flex items-center justify-between px-8 flex-col md:flex-row'>

          {/* Left Container */}
          <div className='flex-auto p-2 pt-16 flex flex-col justify-end md:items-start md:justify-start md:pt-2'>
            <Typography variant={"h1"} className={"mb-4 text-green-900"}>Sul Sul!</Typography>
            <Typography variant={"h4"} className={"mb-4 text-green-950"}>Order up some Sim-tastic cuisine and let the flavour take you on a virtual journey</Typography>

            {/* Home Navigation */}
            <HomeNav />
          </div>

          {/* Right Container */}
          <div className='flex-auto p-2 flex items-center justify-end'>
            <Image src={"/sims4/dineOut2.png"} width={500} height={500} alt='Sims 4 characters enjoying a meal' priority={true} className='w-auto h-auto' />
          </div>
        </section>
      </main>
    </>
  )
};