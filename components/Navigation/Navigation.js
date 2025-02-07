import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  const [navIsHidden, setNavIsHidden] = useState(true);

  const handleClick = (e) => {
    setNavIsHidden(!navIsHidden);
  };

  return (
    <header className="bg-transparent relative z-10" id="pageStart">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" href="/">
              <>
                <span className="sr-only">Home</span>
                <Image
                  src="/digestitrak-logo-transparent.png"
                  height={50}
                  width={50}
                />
              </>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <div className="flex gap-2">
                  <button className="rounded-md bg-teal-600 text-sm font-medium text-white shadow">
                    <a href="https://www.app.digestitrak.com" target="_blank">
                      <p className="px-5 py-2.5">Login</p>
                    </a>
                  </button>
                  <div className={` sm:flex`}>
                    <button className="rounded-md bg-gray-200 text-sm font-medium text-teal-600">
                      <a
                        href="https://www.app.digestitrak.com/sign-up"
                        target="_blank"
                      >
                        <p className="px-5 py-2.5">Sign Up</p>
                      </a>
                    </button>
                  </div>
                </div>
              </div>

              <div className={`md:hidden`}>
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={handleClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
