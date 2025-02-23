const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-16'>
      <div className='relative w-12 h-12 grid grid-cols-3 gap-1'>
        <div className='w-3 h-3 bg-rose-400 rounded-full animate-ping'></div>
        <div className='w-3 h-3 bg-rose-400 rounded-full animate-ping delay-150'></div>
        <div className='w-3 h-3 bg-rose-400 rounded-full animate-ping delay-300'></div>
      </div>
    </div>
  );
};

export default Spinner;
