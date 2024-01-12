import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-transparent">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <a
            className="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
            href="#pageStart"
          >
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center items-center text-teal-600 lg:justify-start gap-5">
              <Image
                src="/digestitrak-logo-transparent.png"
                height={50}
                width={50}
              />
              <p className="text-4xl font-semibold">DigestiTrak</p>
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
              Take control of your digestive health with our powerful web app
              designed to help you manage and track your GERD (Gastroesophageal
              Reflux Disease) symptoms. Whether you&apos;ve just been diagnosed
              or have been living with GERD for a while, our app provides the
              tools and resources you need to understand your condition better,
              make informed decisions, and improve your quality of life.
            </p>
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          Copyright &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
