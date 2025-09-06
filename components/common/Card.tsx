// components/common/Card.tsx
import React from 'react';
import Image from 'next/image';
import { CardProps } from '../../interfaces';


const Card: React.FC<CardProps> = ({ title, description, image, children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 max-w-sm">
      {image && (
  <div className="w-full h-48 relative mb-4 rounded-md overflow-hidden">
    <Image
      src={image}
      alt={title}
      fill
      className="object-cover"
      priority={true} // optional: for above-the-fold images
    />
  </div>
)} 
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {description && <p className="text-gray-600 mb-2">{description}</p>}
      {children}
    </div>
  );
};

export default Card;
