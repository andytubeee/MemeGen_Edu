import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import { useRouter } from 'next/router';
import Input from '@material-tailwind/react/Input';
import { useState } from 'react';

const generate = () => {
  const router = useRouter();
  const [editHidden, setEditHidden] = useState(true);
  return (
    <div className='bg-[#FFE501] w-screen h-screen flex justify-center items-center flex-col gap-20'>
      <div className='min-w-xl min-h-xl w-10/12 h-10 bg-white p-5 rounded-lg'></div>
      <Button
        color='deepPurple'
        buttonType='filled'
        size='regular'
        rounded={false}
        block={false}
        iconOnly={false}
        ripple='light'
        onClick={() => router.push('/')}
      >
        Download
        <Icon name='file_download' size='sm' />
      </Button>
    </div>
  );
};

export default generate;
