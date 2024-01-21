
import React from "react";
import Image from "next/image";
import office2 from "@/app/assets/images/office-long-2.png";
import office1 from "@/app/assets/images/office-long-1.png";
import Footer from "@/app/components/Footer";
const pageAbount = () => {
  return (
    <>
    <section class="bg-white dark:bg-slate-900 ">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white ">
            We didn't reinvent the wheel
          </h2>
          <p className="mb-4">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to
            deliver the scope you want at the pace you need. Small enough to be
            simple and quick, but big enough to deliver the scope you want at
            the pace you need.
          </p>
          <p>
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-lg"
            src={office2}
            alt="office content 1"
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={office1}
            alt="office content 2"
          />
        </div>
      </div>
    </section>
    <Footer/>

    </>
  );
};

export default pageAbount;
