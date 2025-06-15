'use client';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 py-8">
      <div className="text-center mb-6">
        <h2 className="text-xs sm:text-sm text-gray-600 mt-2">
          Our platform automatically scrapes and displays live events happening in real time from cities all around the world.
          <br />
                       🌍 One World. One Platform. Real-Time.
        </h2>
        <p className="text-sm sm:text-lg text-blue-600 mt-1">
          (Login to view All events and get tickets)
        </p>
      </div>
      <div className="w-full max-w-4xl px-2">
        <Image
          src="/Eimg.jpg" 
          alt="Hero Image"
          width={1000}
          height={150} // doubled from 500 to 1000
          className="w-full h-115 rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default HeroSection;

