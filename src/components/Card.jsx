import React from 'react';

function Card({ title, address, email }) {
  return (
    <div className="bg-[#F5F5F5] p-4 ">
      <h2 className="text-xl font-semibold mb-2 text-gray-950">{title}</h2>
      <p className="text-gray-700 mb-2">{address}</p>
      <p className="text-gray-700">{email}</p>
    </div>
  );
}

export default Card;