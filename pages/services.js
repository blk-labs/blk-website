/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Services() {
  return (
    <>
      <IndexNavbar />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px bg-blueGray-100">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h1 className="font-semibold text-4xl text-blueGray-600">
                Develop your digital product with the latest and innovative technologies.
              </h1>
            </div>
          </div>
        </div>
      </section>   

      <section className="mt-0 md:mt-0 pb-40 relative">
        <div className="container mx-auto">

        <div className="pt-32 mb-30">
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500" style={{color:"#011DEB"}}>
              OUR PROCESS
              </p>
              <h2 className="font-semibold text-4xl text-blueGray-600">
              How we work
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
                        src="/img/strategy.png"
                        />
                      <h6 className="text-xl mb-1 font-semibold" style={{color:"#011DEB"}}>
                      Strategy
                      </h6>
                      <hr width="82px" height="10px" style={{border:"1px solid #011DEB"}} />
                      <p className="mb-4 text-blueGray-500">
                      We take your idea, architect, then plan your project in an agile manner.
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
                      src="/img/web-app2.png"
                      />
                      <h6 className="text-xl mb-1 font-semibold" style={{color:"#011DEB"}}>
                      Deisgn
                      </h6>
                      <hr width="82px" height="10px" style={{border:"1px solid #011DEB"}} />
                      <p className="mb-4 text-blueGray-500">
                      We wireframe, UI/UX design, and prototype your project using modern trends.
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
                      src="/img/dev.png"
                      />
                      <h6 className="text-xl mb-1 font-semibold" style={{color:"#011DEB"}}>Development</h6>
                      <hr width="82px" height="10px" style={{border:"1px solid #011DEB"}} />
                      <p className="mb-4 text-blueGray-500">
                      We build and test the product using modern technologies and our chosen set of tools.
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
                      src="/img/delivery.png"
                      />
                      <h6 className="text-xl mb-1 font-semibold" style={{color:"#011DEB"}}>Delivery</h6>
                      <hr width="82px" height="10px" style={{border:"1px solid #011DEB"}} />
                      <p className="mb-4 text-blueGray-500">
                      We deliver and deploy your product in a timely manner and provide maintenance if necessary.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="pt-32 mb-30">
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500" style={{color:"#011DEB"}}>
              WE ARE BLK LABS
            </p>
            <h2 className="font-semibold text-4xl text-blueGray-600">
              What we do
            </h2>
        </div>

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
        <div className="w-full ml-auto px-12 md:px-4">
          <div className="md:pr-12">
            <h3 className="text-3xl font-semibold" style={{color:"#011DEB"}}>
            OUR COMMITMENT
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500" style={{fontSize:"40px"}}>
            Our team isn’t always about designing and developing; we carry a deep enthusiasm about learning, inspiring each other to be better developers and pushing boundaries. We bring this passion to our work, and adhere to a few core beliefs when working on your product.
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
