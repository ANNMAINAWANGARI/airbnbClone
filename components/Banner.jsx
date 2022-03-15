import React from 'react';
import Image from 'next/image';

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
      <Image
        src="https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_2580,c_limit/BlackForest-Germany-GettyImages-147180370.jpg"
        layout="fill"
        objectFit="fill"
      />
      <div className="absolute top-1/2 w-full text-center text-white">
        <p className="text-base sm:text-lg font-bold">Not sure where to go ? Perfect</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active-scale-90 transition duration-150">
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
