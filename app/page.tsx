"use client";
import WordSlider from "@/component/WordSlider";
import Link from "next/link";

const Home = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <div className="flex text-xl lg:text-5xl overflow-hidden transition-all duration-500 mb-4">
        <p className="mr-2 transition-all duration-500">VickyJay</p>
        <p className="mr-2 transition-all duration-500">is F**king</p>
        <span className="w-[100px]s w-auto text-xl text-center lg:w-60s lg:text-5xl text-green-500 transition-all duration-500">
          <WordSlider />
        </span>
      </div>

      <h2 className="text-center  text-xl bg-purple-400 p-2 rounded-xl">
        Want to use in your project? Check it out &nbsp;
        <Link
          legacyBehavior
          className=""
          href="https://www.npmjs.com/package/swipe-animate"
          target="_blank"
        >
          <span className="text-black cursor-pointer">here</span>
        </Link>
      </h2>
    </div>
  );
};

export default Home;
