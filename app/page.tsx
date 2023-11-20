'use client';
import WordSlider from '@/component/WordSlider';

const Home = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='flex text-xl lg:text-5xl overflow-hidden transition-all duration-500'>
        <p className='mr-2 transition-all duration-500'>VickyJay</p>
        <p className='mr-2 transition-all duration-500'>is F**king</p>
        <span className='w-[100px] text-xl text-center lg:w-60 lg:text-5xl text-green-500 transition-all duration-500'>
          <WordSlider />
        </span>
      </div>
    </div>
  );
};

export default Home;
