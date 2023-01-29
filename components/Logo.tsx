import Image from 'next/image';
import React from 'react';

export default function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className='flex items-center gap-2'>
      <Image
        src='https://links.papareact.com/1m8'
        alt='logo'
        width={50}
        height={50}
        className='rounded-full object-cover'
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}
