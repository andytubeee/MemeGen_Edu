import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';

const generate = () => {
  return (
    <div className='bg-[#FFE501] w-screen h-screen flex justify-center items-center flex-col gap-20'>
      <div className='w-10/12 flex flex-col items-center gap-6'>
        <input
          placeholder='Enter your question'
          className='px-5 py-3 rounded-lg text-purple-500 w-10/12'
        />
        <input
          placeholder='Type your own answer (optional)'
          className='px-5 py-3 rounded-lg text-purple-500 w-10/12'
        />
      </div>
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
        Generate
        <Icon name='arrow_forward_ios' size='sm' />
      </Button>
    </div>
  );
};

export default generate;
