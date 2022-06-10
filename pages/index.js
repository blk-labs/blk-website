/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px bg-blueGray-100">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <p className="mt-4 text-lg leading-relaxed" style={{color:"#011DEB"}}>
                WE ARE BLK LABS.
              </p>
              <h2 className="font-semibold text-4xl text-blueGray-600">
                A team of remote designers and developers building scalable and intuitive we solutions
              </h2>
              
              <div className="mt-12">
                <a
                  href=""
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Send A Brief
                </a>
                
              </div>
            </div>
            <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48  w-10/12 max-h-860-px"
          src="/img/keyboard.png"
          alt="..."
        />
          </div>
          
        </div>
        
      </section>

      <section className="block relative z-1  py-10">

      <div className="container mx-auto">
        <div className="justify-center flex flex-wrap my-10">
          <div className="w-full lg:w-12/12 px-4">

          <div className="pt-32">
              <p className="mt-4 text-lg leading-relaxed" style={{color:"#011DEB"}}>
                WHAT WE HAVE DONE
              </p>
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Our recent work
              </h2>
          </div>


            <div className="flex flex-wrap mt-10">
              <div className="w-full lg:w-4/12 px-4">
                
                <Link href="">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src="/img/clikvet.png"
                    />

                    <h5 className="text-xl font-semibold pb-4 pt-4 pl-4">
                      Clikvet
                    </h5>

                    <p className="text-md font-light mt-2 pl-4 mb-4">
                      The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,
                    </p>

                    <a
                      href=""
                      className="get-started text-blue-700 font-bold px-6 py-4 outline focus:outline-none mr-1 mb-1 bg-transparent active:bg-transparent uppercase text-sm"
                    >
                      View Project
                    </a>
                  </div>
                  
                </Link>
              </div>

              <div className="w-full lg:w-4/12 px-4">
                
                <Link href="">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src="/img/sketchd.png"
                    />
                    <h5 className="text-xl font-semibold pb-4 pt-4 pl-4">
                      Sketchd
                    </h5>

                    <p className="text-md font-light mt-2 pl-4 mb-4">
                      The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,
                    </p>

                    <a
                      href=""
                      className="get-started text-blue-700 font-bold px-6 py-4 outline focus:outline-none mr-1 mb-1 bg-transparent active:bg-transparent uppercase text-sm"
                    >
                      View Project
                    </a>
                  </div>
                </Link>
              </div>

              <div className="w-full lg:w-4/12 px-4">
                
                <Link href="/landing">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src="/img/sketchd.png"
                    />

                    <h5 className="text-xl font-semibold pb-4 pt-4 pl-4">
                    Evolve fitness
                    </h5>

                    <p className="text-md font-light mt-2 pl-4 mb-4">
                      The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,
                    </p>

                    <a
                      href=""
                      className="get-started text-blue-700 font-bold px-6 py-4 outline focus:outline-none mr-1 mb-1 bg-transparent active:bg-transparent uppercase text-sm"
                    >
                      View Project
                    </a>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      

      <section className="mt-0 md:mt-0 pb-40 relative">
        <div className="container mx-auto">

        <div className="pt-32 mb-30">
              <p className="mt-4 text-lg leading-relaxed" style={{color:"#011DEB"}}>
                WE ARE BLK LABS
              </p>
              <h2 className="font-semibold text-4xl text-blueGray-600">
                What we do
              </h2>
          </div>

          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-4/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/uiux.png"
                        />
                      <h6 className="text-xl mb-1 font-semibold" style={{color:"#011DEB"}}>
                        UI/UX Design
                      </h6>
                      <hr width="82px" height="10px" style={{border:"1px solid #011DEB"}} />
                      <p className="mb-4 text-blueGray-500">
                      We work closely with our clients to wireframe, design, and sketch the most user friendly web and mobile applications
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
                      src="/img/web-dev.png"
                      />
                      <h6 className="text-xl mb-1 font-semibold" style={{color:"#011DEB"}}>
                      Web development
                      </h6>
                      <hr width="82px" height="10px" style={{border:"1px solid #011DEB"}} />
                      <p className="mb-4 text-blueGray-500">
                      We collaborate with you to create high quality websites; from simple websites to online stores to CMS, we do it all.
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
                      src="/img/web-app.png"
                      />
                      <h6 className="text-xl mb-1 font-semibold" style={{color:"#011DEB"}}>Web application</h6>
                      <hr width="82px" height="10px" style={{border:"1px solid #011DEB"}} />
                      <p className="mb-4 text-blueGray-500">
                      One development for all platforms. We develop with the most innovative technologies to create highly scalable web apps.
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
                      src="/img/mobile-app.png"
                      />
                      <h6 className="text-xl mb-1 font-semibold" style={{color:"#011DEB"}}>Mobile application</h6>
                      <hr width="82px" height="10px" style={{border:"1px solid #011DEB"}} />
                      <p className="mb-4 text-blueGray-500">
                      We specialize in building high quality native mobile apps for Android and iOS that are interactive, engaging and fun.
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
                  src="/img/support.png"
                  />
                  <h6 className="text-xl mb-1 font-semibold" style={{color:"#011DEB"}}>Support & Maintenance</h6>
                  <hr width="82px" height="10px" style={{border:"1px solid #011DEB"}} />
                  <p className="mb-4 text-blueGray-500">
                  Our commitment doesn’t finish with the project’s end; we manage your digital product and we go with you beyond the delivery.
                  </p>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-0 md:mt-0 pb-20 relative bg-purple-500">
      <div className="container mx-auto px-4 pb-32 pt-48">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-4/12 mr-auto px-4 pt-24 md:pt-0">
          <img
            alt="..."
            className="max-w-full rounded-full shadow-xl"
            src="/img/farouq.jpg"
          />
        </div>

        <div className="w-full md:w-8/12 ml-auto px-12 md:px-4">
          <div className="md:pr-12">
            <h3 className="text-3xl font-semibold" style={{color:"#8494F8"}}>
            We develop enterprise-grade web & digital solutions for businesses.
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
            "Our process is very simple; we always ask ourselves if we are doing the best work we can. Because we are commited to satisfying our clients on every project, and the only way we can achieve that is by doing great work."
            </p>
            <p className="text-sm">
            Farooq Bello - Director
            </p>
          
          </div>
        </div>
      </div>
    </div>
      </section>

      <Footer />
    </>
  );
}
