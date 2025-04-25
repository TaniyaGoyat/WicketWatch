import React from 'react'

import Hero from "../components/Hero";
import Venue from "../components/Venue";


function VenuePage() {
    return ( 

        <div className='min-h-screen'>
       <div className="min-h-screen bg-[url('/stadium1.avif')] bg-cover bg-center bg-fixed">
       <div className='min-h-screen bg-black/40'>
      <div className='space-y-12 pb-12'>
      <div className='bg-opacity-90'>  <Hero/></div>
      <div className='bg-opacity-90'>  <Venue/></div>
      {/* <div className='bg-opacity-90'>  <StatsSection/></div> */}
      </div> 
      </div>
      </div>
        </div>
     );
}

export default VenuePage;
