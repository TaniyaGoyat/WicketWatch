import React from 'react'
import Hero from "../components/Hero"
import Upcoming from '../components/Upcoming';


function Schedule() {
    return ( 

        <div className='min-h-screen'>
       <div className="min-h-screen bg-[url('/stadium1.avif')] bg-cover bg-center bg-fixed">
       <div className='min-h-screen bg-black/40'>
      <div className='space-y-12 pb-12'>
      <div className='bg-opacity-90'>  <Hero/></div>
      <div className='bg-opacity-90'>  <Upcoming/></div>
     
      </div> 
      </div>
      </div>
        </div>
     );
}

export default Schedule;
