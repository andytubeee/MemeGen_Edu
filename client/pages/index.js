import Head from 'next/head';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [onBtnHover, setOnBtnHover] = useState(false);
  return (
    <div className='bg-[#6C60FF] w-screen h-screen flex justify-center items-center flex-col'>
      <Head>
        <title>Memelet</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='text-8xl leading-snug text-white px-10'>
        the meme has <br />{' '}
        <span className='text-yellow-300 font-bold'>everything</span> that you
        <br />{' '}
        <div className='flex items-center'>
          need
          <Button
            className='ml-16'
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
