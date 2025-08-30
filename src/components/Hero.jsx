import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="relative bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        {/* Left Content */}
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
              Advaith R Bharadwaj
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Electrical Engineering student at NIT Surat. My aim is to develop technology with seamless transition between Hardware and Software.
            </p>
          </div>
        </div>
        {/* Right Image */}
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-y-0 xl:right-0 xl:w-1/2">
          <img
            className="aspect-[3/2] w-full rounded-xl bg-gray-50 dark:bg-gray-700 object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/AdvaithRB.png"
            alt="Advaith R Bharadwaj"
          />
        </div>
      </div>
    </section>
  );
}