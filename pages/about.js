/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function About() {
  return (
    <>
      <IndexNavbar />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px bg-blueGray-100">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600" style={{fontSize:"90px", lineHeight:"108px", fontWeight:"700"}}>
              Marhaba,
              We are BLK Labs
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              Not your everyday tech company - we are remote developers who enjoy transforming business ideas into digital solutions
              </p>
              
            </div>
          </div>
        </div>
      </section>

      <section className="block relative z-1 py-10">

      <div className="container mx-auto">
        <div className="justify-center flex flex-wrap my-10">
          <div className="w-full lg:w-12/12 px-4">

            <div className="pt-20">
                <h1 className="font-semibold text-4xl text-blueGray-600">
                    About Us
                </h1>
            </div>
          </div>
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-12 px-4">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-8/12 px-4">
                        <p className="pt-20" style={{fontSize:"30px", lineHeight:"48px", fontWeight:"400"}}>
                            BLK Labs is an international web development company focused on building and deploying complex solutions. We utilize comprehensive digital consulting experience and employ build-execute-deploy model to provide effective solutions taking into account advanced seamless scaling and integration strategy. 
                        </p>
                    </div>
                    <div className="w-full md:w-4/12 px-4">
                        <img
                        alt=""
                        className="border-none max-w-full h-auto rounded-lg"
                        src="/img/about1.png"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full md:w-12 px-4 mt-20">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-4/12 px-4">
                        <img
                        alt=""
                        className="border-none max-w-full h-auto rounded-lg"
                        src="/img/about2.png"
                        />
                    </div>
                    <div className="w-full md:w-8/12 px-4">
                        <p className="pt-20" style={{fontSize:"30px", lineHeight:"48px", fontWeight:"400"}}>
                        At our heart, we really are just a team of remote strategists and developers who enjoy code. It is addiction, skill, and passion. That is our vision; using our addiction to create products and provide solutions that work well.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-12 px-4 mt-20">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-8/12 px-4">
                        <p className="pt-10" style={{fontSize:"20px", lineHeight:"170%", fontWeight:"400"}}>
                        We are a team devoted to each project from begining to end. We combine creativity and modern development techniques to make digital experiences with quality design and optimal and efficient development. We love to work with people, for people, and give meaning to your work through our perceptive approaches to development.
                        </p>
                        <p className="pt-20" style={{fontSize:"20px", lineHeight:"170%", fontWeight:"400"}}>
                        Since design and digital technology are continuously evolving, we undertand the need to constantly recycle and learn new tools. We have the capacity to experiment and make innovative ideas come to life. With us, the potential to visualize all possibilities is endless.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section className="mt-0 md:mt-0 pb-40 relative">
        <div className="container mx-auto">

          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-4/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/team1.png"
                        />
                      <h6 className="text-xl mb-1 font-semibold">
                        Farouq Bello
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Director
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-4/12 px4">
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src="/img/team2.png"
                      />
                      <h6 className="text-xl mb-1 font-semibold">
                      Farouq Bello
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Director
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-4/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src="/img/team3.png"
                      />
                      <h6 className="text-xl mb-1 font-semibold">Farouq Bello</h6>
                      <p className="mb-4 text-blueGray-500">
                        Director
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-4/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src="/img/team3.png"
                      />
                      <h6 className="text-xl mb-1 font-semibold">Farouq Bello</h6>
                      <p className="mb-4 text-blueGray-500">
                        Director
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-4/12 px-4">
                    <div className="relative flex flex-col min-w-0 mt-4">
                        <div className="px-4 py-5 flex-auto">
                        <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/team1.png"
                        />
                        <h6 className="text-xl mb-1 font-semibold">Farouq Bello</h6>
                        
                        <p className="mb-4 text-blueGray-500">
                            Director
                        </p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-4/12 px-4">
                    <div className="relative flex flex-col min-w-0 mt-4">
                        <div className="px-4 py-5 flex-auto">
                        <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/team2.png"
                        />
                        <h6 className="text-xl mb-1 font-semibold">Farouq Bello</h6>
                        
                        <p className="mb-4 text-blueGray-500">
                            Director
                        </p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
