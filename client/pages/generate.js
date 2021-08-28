import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import { useRouter } from 'next/router';
import Input from '@material-tailwind/react/Input';
import { useState } from 'react';
import Head from 'next/head';
import Swal from 'sweetalert2';

const generate = () => {
  const router = useRouter();
  const [editHidden, setEditHidden] = useState(true);
  const [getQuestion, setQuestion] = useState();
  const [getAnswer, setAnswer] = useState();

  const clickHandler = async () => {
    if (!getQuestion) return Swal.fire('Error', 'Missing input', 'error');
    console.log(getAPIBody);
    const result = await fetch('https://memelet-api.herokuapp.com/', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(getAPIBody),
    })
      .then((res) => res.json())
      .then((json) => {
        window.sessionStorage.setItem('meme', json.url);
        router.push('/result');
      })
      .catch((err) => {
        return Swal.fire('Error', 'Please try again', 'error');
      });
  };

  const getAPIBody = {
    question: getQuestion,
    ...(getAnswer
      ? { answer: getAnswer, answered: true }
      : { answered: false }),
  };

  return (
    <div className='bg-[#FFE501] overflow-hidden min-w-screen min-h-screen flex justify-center items-center flex-col gap-20'>
      <div className='w-10/12 flex flex-col px-5'>
        <input
          placeholder='Enter your question'
          className='px-5 py-3 my-4 rounded-lg text-purple-600 outline-none placeholder-purple-600'
          onChange={(e) => setQuestion(e.target.value)}
        />
        <div className='relative flex justify-center  rounded-lg  items-center bg-white'>
          <input
            placeholder='Type your own answer (optional)'
            className='px-5 py-3 text-purple-600  rounded-lg outline-none placeholder-purple-600 flex-grow'
            onChange={(e) => setAnswer(e.target.value)}
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
        onClick={clickHandler}
      >
        Generate
        <Icon name='double_arrow' size='sm' />
      </Button>
    </div>
  );
};

export default generate;
