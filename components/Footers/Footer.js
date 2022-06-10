import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blueGray-800 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-full px-4">
              <h6 className="text-lg mt-0 mb-2 text-white">
              Interested? We would love to hear from you and offer our solutions for your business.
              </h6>
              <h4 className="text-3xl text-white font-semibold">Lets start your next project together</h4>
              

              <div className="mt-12 mb-12">
                <a
                  href=""
                  className="get-started text-white border-blueGray-200 font-bold px-6 py-4 rounded border-gray-200 focus:outline-none mr-1 mb-1 bg-transparent active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Contact Us
                </a>
                
              </div>

              <div className="flex flex-wrap md:justify-between justify-items-center">
                <div className="flex flex-wrap items-end">
                <a
                href=""
                className="text-white hover:text-blueGray-300 text-lg font-semibold block py-1 px-3"
              >
                Services
              </a>
                <a
                href=""
                className="text-white hover:text-blueGray-300 text-lg font-semibold block py-1 px-3"
              >
                About Us
              </a>
                <a
                href=""
                className="text-white hover:text-blueGray-300 text-lg font-semibold block py-1 px-3"
              >
                Contact Us
              </a>
                </div>
                <div className="mt-6 lg:mb-0 mb-6">
                  <button
                    className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button
                    className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </button>
                  <button
                    className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i className="fab fa-dribbble"></i>
                  </button>
                  <button
                    className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i className="fab fa-github"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap md:justify-between">
            <div className="w-full md:w-full px-4">
              <div className="text-sm text-white font-semibold py-1">
                © {new Date().getFullYear()} BLK Labs. All rights reserved. Legal notice and privacy policy{" "}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
