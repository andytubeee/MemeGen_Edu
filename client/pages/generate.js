import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import { useRouter } from 'next/router';
import Input from '@material-tailwind/react/Input';
import { useState } from 'react';
import Head from 'next/head';

const generate = () => {
  const router = useRouter();
  const [editHidden, setEditHidden] = useState(true);
  return (
    <div className='bg-[#FFE501] w-screen h-screen flex justify-center items-center flex-col gap-20'>
      <Head>
        <title>Memelet</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='w-10/12 flex flex-col px-5 '>
        <input
          placeholder='Enter your question'
          className='px-5 py-3 my-4 rounded-lg text-purple-600 outline-none placeholder-purple-600'
        />
        <div className='relative flex justify-center  rounded-lg  items-center bg-white'>
          <input
            placeholder='Type your own answer (optional)'
            className='px-5 py-3 text-purple-600  rounded-lg outline-none placeholder-purple-600 flex-grow'
          />
          <Button
            rounded
            iconOnly
            buttonType='outline'
            color='deepPurple'
            className={
              'cursor-pointer border-0 mr-4 ' + `${editHidden ? 'hidden' : ''}`
            }
          >
            <Icon name='edit' size='2xl' />
          </Button>
        </div>
      </div>
      <Button
        color='deepPurple'
        buttonType='filled'
        size='lg'
        rounded={false}
        block={false}
        iconOnly={false}
        ripple='light'
        onClick={() => router.push('/result')}
      >
        Generate
        <Icon name='double_arrow' size='sm' />
      </Button>
    </div>
  );
};

export default generate;
