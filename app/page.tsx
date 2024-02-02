'use client';
import WordSlider from '@/component/WordSlider';
import Link  from "next/link"
  
const Home = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='flex text-xl lg:text-5xl overflow-hidden transition-all duration-500'>
        <p className='mr-2 transition-all duration-500'>VickyJay</p>
        <p className='mr-2 transition-all duration-500'>is F**king</p>
        <span className='w-[100px]s w-auto text-xl text-center lg:w-60s lg:text-5xl text-green-500 transition-all duration-500'>
          <WordSlider />
        </span>
      </div>

      <h2 className="">Want to use in your project? check it out<span><Link>&nbsp;here<Link href="https://www.npmjs.com/package/swipe-animate" target="_blank"></span></h2>
    </div>
  );
};

export default Home;
