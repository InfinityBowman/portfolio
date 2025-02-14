import React from 'react';
import Image from 'next/image';

export default function Page() {
  return (
    <div>
      <Image
        src={'/bethere/betherelogo.png'}
        alt={'BeThere Logo'}
        width={400}
        height={300}
      />
    </div>
  );
}
