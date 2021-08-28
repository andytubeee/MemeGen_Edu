import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import { useRouter } from 'next/router';
import Input from '@material-tailwind/react/Input';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { saveAs } from 'file-saver';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const generate = () => {
  const router = useRouter();
  const [memeUrl, setMemeUrl] = useState();

  useEffect(() => {
    setMemeUrl(window.sessionStorage.getItem('meme'));
  }, []);
  const downloadMeme = async () => {
    try {
      if (memeUrl) {
        await saveAs(memeUrl, 'Your meme.jpg');
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
  const copyUrl = () => {
    if (!memeUrl) return;
    navigator.clipboard.writeText(memeUrl);
    toast.success('Copied URL to Clipboard', {
      autoClose: 2000,
      draggable: true,
      closeOnClick: true,
      icon: '📋',
    });
  };
  return (
    <div className='bg-[#FFE501] overflow-hidden min-w-screen min-h-screen flex justify-center items-center flex-col'>
      {memeUrl ? (
        <>
          <div className='bg-white p-5 rounded-lg'>
            <Image src={memeUrl} width={600} height={500} />
          </div>
          <div className='p-2 flex items-center justify-center'>
            <p
              className='cursor-pointer mt-5 block bg-white hover:bg-gray-100 duration-300 text-gray-500 rounded-lg px-5 py-3 mb-5'
              onClick={copyUrl}
            >
              <strong>URL: </strong> {memeUrl}
            </p>
            <Button className='ml-5' color='orange' onClick={copyUrl}>
              <Icon name='content_paste' size='xl' /> Copy
            </Button>
            <ToastContainer />
          </div>
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
            <Icon name='file_download' size='xl' />
          </Button>
        </>
      ) : (
        <p className='text-5xl text-purple-600'>Sorry, you have no memes</p>
      )}
    </div>
  );
};

export default generate;
