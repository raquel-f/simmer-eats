// Error components must be Client Components
'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Typography } from './_utils/typography';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='p-8 min-h-max flex flex-col items-center justify-center'>
      <Image src={'/android-chrome-512x512.png'} height={200} width={200} alt='plumbob'></Image>

      {/* Information */}
      <Typography variant={'h1'} className={'mb-2'}>Shoo Flee!</Typography>
      <Typography variant={'h4'} className={'mb-16'}>We're sorry, an error has occured and the information you requested could not be displayed.</Typography>

      {/* Redirection */}
      <div className='flex'>
        <Link href={'/'} className='border-2 rounded-full p-3 border-green-700 mr-2 hover:bg-green-700 hover:text-white duration-300'>
          <Typography variant={'h5'}>Go Home</Typography>
        </Link>
        
        <button onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        } className='border-2 rounded-full p-3 border-green-700 ml-2 hover:bg-green-700 hover:text-white duration-300'>
          <Typography variant={'h5'}>Try Again</Typography>
        </button>
      </div>

    </div>
  );
}