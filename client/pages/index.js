import Head from 'next/head';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [onBtnHover, setOnBtnHover] = useState(false);
  return (
    <div className='bg-[#6C60FF] overflow-hidden min-w-screen min-h-screen flex justify-center items-center flex-col'>
      <div className='text-[30px] sm:text-[100px] leading-snug text-white px-10'>
        study <br /> <span className='text-yellow-300 font-bold'>easier</span>{' '}
        using
        <br />{' '}
        <div className='flex items-center'>
          memes
          <Button
            className='ml-12'
            onMouseOver={() => setOnBtnHover(true)}
            onMouseOut={() => setOnBtnHover(false)}
            color='yellow'
            buttonType={onBtnHover ? 'fill' : 'outline'}
            size='lg'
            rounded={false}
            block={false}
            iconOnly={false}
            ripple='light'
            onClick={() => router.push('/generate')}
          >
            Create your Meme Flashcards
            <Icon name='arrow_forward_ios' size='sm' />
          </Button>
        </div>
      </div>
      <br></br>
    </div>
  );
}
