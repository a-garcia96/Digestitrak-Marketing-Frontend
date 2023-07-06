import Head from "next/head";
import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import AuthContext from "../contexts/AuthContext";

import WelcomeBanner from "../components/WelcomeBanner/WelcomeBanner";

export default function Home() {
  const { user } = useContext(AuthContext);

  if (user.isSignedIn) {
    return (
      <>
        <WelcomeBanner user={user} />
      </>
    )
  } else if (!user.isSignedIn) {
    return (
      <>
        <Head>
          <title>DigestiTrack</title>
          <meta
            name="description"
            content="Herness the power of data to understand your digistive health better."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className="bg-white">
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-teal-900 sm:text-6xl">
                  <spa className="text-teal-600">Take control</spa> of your
                  digestive health
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Harness the power of data with DigestiTrack. Whether you've
                  just been diagnosed or have been living with GERD, we provide
                  you with the tools and resources.
                </p>
              </div>
            </div>
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <Image
                  alt="Party"
                  src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  className="absolute inset-0 h-full w-full object-cover"
                  layout="fill"
                />
              </div>

              <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl text-teal-900">
                  <span className="text-teal-600">Understand</span> your
                  condition better
                </h2>

                <p className="mt-4 text-gray-600">
                  By logging your symptoms and tracking your dietary intake,
                  DigestiTrack empowers you to identify patterns and
                  correlations between your eating habits and the occurrence of
                  GERD symptoms. DigestriTrack provides valuable insights into
                  how certain foods and lifestyle factors may be affecting your
                  condition.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
                <Image
                  alt="Party"
                  src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  className="absolute inset-0 h-full w-full object-cover"
                  layout="fill"
                />
              </div>

              <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl text-teal-900">
                  Make <span className="text-teal-600">informed</span> decisions
                </h2>

                <p className="mt-4 text-gray-600">
                  With this knowledge at your fingertips, you can make informed
                  decisions about your diet and lifestyle choices. Stop being
                  reactive and instead take proactive steps towards managing
                  your GERD and improving your overall well-being.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden max-w-screen-xl mx-auto sm:grid sm:grid-cols-2">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold md:text-3xl text-teal-900">
                Start using <span className="text-teal-600">DigestiTrack</span>{" "}
                today
              </h2>

              <p className="hidden text-gray-900 md:mt-4 md:block">
                embark on a journey towards better digestive health. Take
                control of your condition and unlock a greater understanding of
                how to live a life free from discomfort.
              </p>

              <div className="mt-4 md:mt-8">
                <Link href="/sign-up">
                  <p className="inline-block rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-700 focus:outline-none focus:ring focus:ring-yellow-400">
                    Get Started Today
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <img
            alt="Student"
            src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-56 w-full object-cover sm:h-full"
          />
        </section>
      </>
    );
  }
}
