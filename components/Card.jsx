import React from 'react';
import Image from 'next/image';

function Card({ image, title }) {
  return (
    <div className="cursor:pointer mb-2 hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={image} layout="fill" className="rounded-xl" />
      </div>
      <h2 className="mt-1 text-2xl font-semibold">{title}</h2>
    </div>
  );
}

export default Card;
