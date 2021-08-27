import Head from 'next/head';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div className='bg-[#6C60FF] w-screen h-screen flex justify-center items-center flex-col'>
      <Head>
        <title>Memelet</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='text-6xl text-white px-10'>
        the meme has <br />{' '}
        <span className='text-yellow-300 font-bold'>everything</span> that you
        need
      </div>
      <br></br>
      <Button
        color='lightBlue'
        buttonType='filled'
        size='regular'
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
  );
}
