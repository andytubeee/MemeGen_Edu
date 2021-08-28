import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import { useRouter } from 'next/router';
import Input from '@material-tailwind/react/Input';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { saveAs } from 'file-saver';
import Swal from 'sweetalert2';

const generate = () => {
  const router = useRouter();
  const [memeUrl, setMemeUrl] = useState();
  useEffect(() => {
    setMemeUrl(window.sessionStorage.getItem('meme'));
  }, []);
  const downloadMeme = async () => {
    try {
      if (memeUrl) {
        await saveAs(memeUrl, 'image.jpg');
        Swal.fire('Success', 'Downloading meme...', 'success').then(() =>
          router.push('/')
        );
      } else
        Swal.fire('Error', 'Resource not available', 'error').then(() =>
          router.push('/')
        );
    } catch {
      Swal.fire('Error', 'Resource not available', 'error').then(() =>
        router.push('/')
      );
    }
  };
  return (
    <div className='bg-[#FFE501] overflow-hidden min-w-screen min-h-screen flex justify-center items-center flex-col gap-16'>
      {memeUrl ? (
        <div className='bg-white p-5 rounded-lg'>
          <Image src={memeUrl} width={600} height={500} />
        </div>
      ) : (
        <p className='text-5xl text-purple-600'>Sorry, you have no memes</p>
      )}
      <Button
        className='group'
        color='deepPurple'
        buttonType='filled'
        size='lg'
        rounded={false}
        block={false}
        iconOnly={false}
        ripple='light'
        onClick={downloadMeme}
      >
        Download
        <Icon name='file_download' size='sm' />
      </Button>
    </div>
  );
};

export default generate;
