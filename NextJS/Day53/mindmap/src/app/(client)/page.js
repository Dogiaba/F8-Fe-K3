import React from "react";
import "@/app/assets/styles.css"
import { DiApple } from "react-icons/di";
import { DiAndroid } from "react-icons/di";
import { DiWindows } from "react-icons/di";
import { DiLinux } from "react-icons/di";
import { IoPhonePortraitOutline } from "react-icons/io5";

import Image from "next/image";
import platfromMac from "@/app/assets/images/platform-mac@2x-185d8c3bde.png"
import anniver from "@/app/assets/images/17-anniversary@2x-42e64a4843.png"
import million from "@/app/assets/images/100-million@2x-e007b25441.png"
import featured from "@/app/assets/images/featured-app@2x-539d69f4e7.png"
import lifehack from "@/app/assets/images/lifehacker@2x-93c449268c.png"
import Footer from "../components/Footer";

const page = () => {
  return (
    <main className="w-full overflow-hidden dark:bg-slate-900 ">
      <div className="continer bg-indigo-100 px-4 mx-auto min-h-[560px] flex flex-col-reverse lg:flex-row items-center justify-evenly lg:justify-between relative dark:bg-slate-900">
        <div className="text-center lg:text-left relative z-10 sm:px-12">
          <h1 className="main-title text-4xl leading-[48px] lg:text-5xl lg:leading-[72px] font-bold text-base">
            <span>
              IDEAS
              <br /> GROW ON <br /> TREES
            </span>
          </h1>
          <p className="text-xl leading-8 text-zinc-400 font-medium my-6 lg:mr-8">
            The full-featured mind mapping and brainstorming app. Like a Swiss
            Army Knife, Xmind ® offers a complete toolset for thinking and
            creativity.
          </p>
          <div className="flex gap-x-3 justify-center lg:justify-start">
            <a href="#">
              <button className="bg-stone-50 ease-out duration-300 inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 px-4 py-2 h-12 lg:px-6 text-md w-full sm:w-auto dark:text-black">
                Bắt đầu dùng thử
              </button>
            </a>
            <button className="bg-orange-400 first-line:items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground px-4 py-2 hidden sm:flex h-12 lg:px-6 text-md">Download for Windows</button>
          </div>
        </div>

        <div>
          <div>
            <Image className="relative sm:max-w-[735px]" src={platfromMac} alt="MacPlat"/>
          </div>
        </div>
      </div>
      {/* px-4 mx-auto min-h-[300px]  lg:flex-row items-center justify-evenly lg:justify-between relative */}
      <div className=" continer relative bg-fuchsia-50 overflow-hidden min-h-[380px] dark:bg-slate-900 ">
        <div className="flex justify-center sm:max-w-[1184px] space-x-32 mt-9 text-2xl">
          <div className="flex"><a className="flex items-center " href="#"><span><DiApple /></span><span>macOs</span></a></div>
          <div className="flex"><a className="flex items-center" href="#"><span><DiAndroid /></span><span>Android</span></a></div>
          <div className="flex"><a className="flex items-center" href="#"><span><DiWindows /></span><span>Windows</span></a></div>
          <div className="flex"><a className="flex items-center" href="#"><span><DiLinux /></span><span>Linux</span></a></div>
          <div className="flex"><a className="flex items-center" href="#"><span><IoPhonePortraitOutline /></span><span>iOS / iPadOS</span></a></div>
        </div>
        {/* grid grid-cols-1 md:grid-cols-4 xl:grid-cols-3 gap-8 xl:gap-14 */}
        {/* grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 container pt-24 gap-8 xl:gap-14 */}
        <section className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 pt-10 gap-3 xl:gap-14 mx-10 mt-20 pb-8">
          <div className="card bg-green-500 ">
            <Image src={anniver} alt="img" />
            <p>17-year history of creating mind mapping software</p>
          </div>
          <div className="card bg-sky-500">
            <Image src={million} alt="img" />
            <p>Featured App 4.8 stars / 300,000+ Reviews</p>
          </div>
          <div className="card bg-red-500">
            <Image src={featured} alt="img" />
            <p>100+ million installations on the planet</p>
          </div>  
          <div className="card bg-amber-500">
            <Image src={lifehack} alt="img" />
            <p>The Winner of Most Popular Mind Mapping Tool</p>
          </div>
        </section>
        <section></section>


      </div>


    <Footer/>
    </main>
  );
};

export default page;
