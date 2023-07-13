import React from "react";
import Link from "next/link";

const DataEntryHeader = ({ user }) => {
  return (
    <>
      <header className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-teal-900 sm:text-3xl">
                Your Meal Log
              </h1>

              <p className="mt-1.5 text-sm text-gray-500">
                Ate something recently? Log it!
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <Link href="/new-entry">
                <button
                  className="block rounded-lg bg-teal-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-teal-600 focus:outline-none focus:ring"
                  type="button"
                >
                  New Meal
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default DataEntryHeader;
