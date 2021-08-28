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
import ReactCardFlip from 'react-card-flip';

const generate = () => {
  const router = useRouter();
  const [unansweredMemeUrl, setUnansweredMemeUrl] = useState();
  const [answeredMemeUrl, setAnsweredMemeUrl] = useState();
  const [flipped, setFlipped] = useState();
  const handleClick = () => {
    setFlipped((prev) => !prev);
  };

  useEffect(() => {
    setUnansweredMemeUrl(window.sessionStorage.getItem('unanswered_meme'));
    setAnsweredMemeUrl(window.sessionStorage.getItem('answered_meme'));
  }, []);
  const downloadMeme = async () => {
    try {
      if (answeredMemeUrl) {
        await saveAs(answeredMemeUrl, 'image.jpg');
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
    if (!answeredMemeUrl) return;
    navigator.clipboard.writeText(answeredMemeUrl);
    toast.success('Copied URL to Clipboard', {
      autoClose: 2000,
      draggable: true,
      closeOnClick: true,
      icon: '📋',
    });
  };
  return (
    <div className='bg-[#FFE501] overflow-hidden min-w-screen min-h-screen flex justify-center items-center flex-col'>
      {answeredMemeUrl ? (
        <>
          <div className='bg-white p-5 rounded-lg'>
            <ReactCardFlip isFlipped={flipped} flipDirection='vertical'>
              <Image
                src={unansweredMemeUrl}
                width={600}
                height={500}
                onClick={handleClick}
              />
              <Image
                src={answeredMemeUrl}
                width={600}
                height={500}
                onClick={handleClick}
              />
            </ReactCardFlip>
          </div>
          <div className='p-2 flex items-center justify-center flex-wrap'>
            <p
              className='cursor-pointer mt-5 block bg-white hover:bg-gray-100 duration-300 text-gray-500 rounded-lg px-5 py-3 mb-5'
              onClick={copyUrl}
            >
              <strong>URL: </strong> {answeredMemeUrl}
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
