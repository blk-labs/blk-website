/* eslint-disable react/jsx-no-target-blank */
import {React, useState} from "react";
import Link from "next/link";


import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Contact() {
    const [fullname, setFullname] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
  return (
    <>
      <IndexNavbar />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px bg-blueGray-100">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600" style={{fontSize:"90px", lineHeight:"108px", fontWeight:"700"}}>
              Hello!
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              Talk to us, we'd love to hear about you and the solutions we can offer your business.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      <section className="block relative z-1 py-10">

      <div className="container mx-auto">
        <div className="justify-center flex flex-wrap my-10">
          <div className="w-full lg:w-12/12 px-4">
          </div>
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-12 px-4 mt-10">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-6/12 px-4">

                        <form>
                            <div class="mb-5">
                                <label
                                for="name"
                                class="mb-3 block text-base uppercase font-medium"
                                style={{color:"#011DEB"}}
                                >
                                My name is
                                </label>
                                <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                class="w-full border bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                onChange={(e) => setFullname(e.target.value)}
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                class="mb-3 block text-base uppercase font-medium"
                                style={{color:"#011DEB"}}
                                >
                                AND I WOULD LIKE
                                </label>
                                <div>
                                <input type="checkbox" class="" name="uiux" id="uiux" value="A UI/UX Design" /> A UI/UX Design <br />
                                <input type="checkbox" class="" name="website" id="website" value="A Website" /> A Website <br />
                                <input type="checkbox" class="" name="webapp" id="webapp" value="A Web Application" /> A Web Application <br />
                                <input type="checkbox" class="" name="mobileapp" id="mobileapp" value="A Mobile Appplication" />  <br />
                                <input type="checkbox" class="" name="webman" id="webman" value="Web Management Services" /> Web Management Services
                                </div>
                            </div>

                            <div class="mb-5">
                                <label
                                for="message"
                                class="mb-3 block text-base font-medium"
                                style={{color:"#011DEB"}}
                                >
                                FOR MY PROJECT
                                </label>
                                <textarea
                                rows="4"
                                name="message"
                                id="message"
                                placeholder="Tell us about your project"
                                class="w-full resize-none border bg-white py-3 px-6 text-base font-medium outline-none focus:shadow-md"
                                onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>

                            <div class="mb-5">
                                <label
                                for="email"
                                class="mb-3 block text-base font-medium uppercase"
                                style={{color:"#011DEB"}}
                                >
                                YOU CAN MAIL ME AT
                                </label>
                                <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="example@domain.com"
                                class="w-full border bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
                                onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <button
                                class="get-started text-white font-bold px-6 py-4 outline-none focus:outline-none mr-1 mb-1 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                                style={{backgroundColor:"#011DEB"}}
                                >
                                Send
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="w-full md:w-4/12 px-4">

                        <div>
                            <p className="pt-1" style={{color:"#011DEB"}}>
                                <i></i> HOURS
                            </p> 
                            <p className="pt-1">
                                Monday - Friday 8AM - 6PM
                            </p> 
                            <p className="pt-1" style={{color:"#011DEB"}}>
                                <i></i> CONTACT US <br/>
                            </p> 
                            <p className="pt-1">
                            hello@blklabs.co
                            </p> 
                            <p className="pt-1" style={{color:"#011DEB"}}>
                                <i></i> CUSTOMER SUPPORT <br/>
                            </p> 
                            <p className="pt-1">
                            support@blklabs.co
                            </p> 
                        </div>

                        <img
                        alt=""
                        className="border-none max-w-full h-auto rounded-lg"
                        src="/img/contact-img.png"
                        />
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
