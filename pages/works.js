/* eslint-disable react/jsx-no-target-blank */
import {React, useState} from "react";
import Link from "next/link";


import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Works() {
    const [fullname, setFullname] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
  return (
    <>
      <IndexNavbar />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px bg-blueGray-100">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full  px-4">
          <div className="pt-32 sm:pt-0">
          <p className="mt-4 text-lg leading-relaxed" style={{color:"#011DEB"}}>
            WE ARE BLK LABS
          </p>
          <h2 className="font-semibold text-4xl text-blueGray-600 mt-2" style={{fontSize:"90px", fontWeight:"700"}}>
          We manage your ideas
          </h2>
        </div>
          </div>
        </div>
      </section>

      <section className="block relative z-1 py-10">

      <div className="container mx-auto">
        <div className="justify-center flex flex-wrap my-10">
            <div className="w-full md:w-12 px-4 mt-10">
                <div className="pt-10">
                <p className="mt-4 text-lg leading-relaxed" style={{color:"#011DEB"}}>
                WHAT WE HAVE DONE
                </p>
                <h2 className="font-semibold text-4xl text-blueGray-600">
                Our recent work
                </h2>
                </div>
            </div>
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-12 px-4 mt-10">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-6/12 px-4">
                        <Link href="">
                            <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg ease-linear transition-all duration-150">
                            <img
                                alt="..."
                                className="align-middle border-none max-w-full h-auto"
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
                    <div className="w-full md:w-6/12 px-4 mt-20">
                    <Link href="/profile">
                        <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg ease-linear transition-all duration-150">
                        <img
                            alt="..."
                            className="align-middle border-none max-w-full h-auto"
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
                </div>
            </div>


            <div className="w-full md:w-12 px-4 mt-10">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-6/12 px-4">
                        <Link href="">
                            <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg ease-linear transition-all duration-150">
                            <img
                                alt="..."
                                className="align-middle border-none max-w-full h-auto"
                                src="/img/mypolitical.png"
                            />
        
                            <h5 className="text-xl font-semibold pb-4 pt-4 pl-4">
                                My Political Hub
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
                    <div className="w-full md:w-6/12 px-4 mt-20">
                    <Link href="/profile">
                        <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg ease-linear transition-all duration-150">
                        <img
                            alt="..."
                            className="align-middle border-none max-w-full h-auto "
                            src="/img/evolve-fitness.png"
                        />
                        <h5 className="text-xl font-semibold pb-4 pt-4 pl-4">
                            Evolve Fitness
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

            <div className="w-full md:w-12 px-4 mt-10">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-6/12 px-4">
                        <Link href="">
                            <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg ease-linear transition-all duration-150">
                            <img
                                alt="..."
                                className="align-middle border-none max-w-full h-auto"
                                src="/img/fantasy11.png"
                            />
        
                            <h5 className="text-xl font-semibold pb-4 pt-4 pl-4">
                                Fantasy 11
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
                    <div className="w-full md:w-6/12 px-4 mt-20">
                    <Link href="">
                        <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg  ease-linear transition-all duration-150">
                        <img
                            alt="..."
                            className="align-middle border-none max-w-full h-auto"
                            src="/img/sketchd.png"
                        />
                        <h5 className="text-xl font-semibold pb-4 pt-4 pl-4">
                            More Project Coming Soon.
                        </h5>
                        </div>
                    </Link>          
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
