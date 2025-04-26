import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../ui/Button";

function Hero() {
  const navigate = useNavigate();

  return ( 
    <div className='relative overflow-hidden py-[20px] md:py-[20px] bg-gradient-to-b from-[#101828] to-[#F54A00]'>
      <div className='container mx-auto px-[4px] relative z-10'>
        <div className='text-center max-w-3xl mx-auto'>
          <div className='text-center text-[30px] md:text-[25px] font-bold text-white mb-[6px]'>
            IPL 2025 <span className="text-[#006BB6]">Live Score</span>
          </div>
          <p className='text-[20px] text-gray-300 mb-8'>
            Stay updated with real-time scores, team standings, and match schedules for the Indian Premier League.
          </p>
          <div className='flex flex-wrap justify-center gap-[15px]'>
            <Button variant="primary" size="lg" onClick={() => navigate("/")}>Live Score</Button>
            <Button variant="primary" size="lg" onClick={() => navigate("/schedule")}>Schedule</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
