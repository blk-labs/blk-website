import React from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";

const IndexDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
    <button
      className="bg-blueGray-700 text-white text-xs font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
      type="button"
      ref={btnDropdownRef}
      onClick={(e) => {
        e.preventDefault();
        dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
      }}
    >
      <i className="fas fa-bars text-white"></i>
    </button>
      
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left shadow-lg min-w-48"
        }
        style={{backgroundColor:"#8494F8", 
        padding: "45px 167px 59px 40px",
        gap: "10px", position: "absolute",
        width: "387px",
        height: "546px",
        left: "0px",
        top: "0px"}}
      >
        
        <Link href="/">
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
            style={{fontSize:"30px", color:"#ffffff", lineHeight:"40px", fontWeight:"700"}}
          >
            Home
          </a>
        </Link>
        <Link href="/services">
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
            style={{fontSize:"30px", color:"#ffffff", lineHeight:"40px", fontWeight:"700"}}
          >
            Services
          </a>
        </Link>
        <Link href="/works">
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
            style={{fontSize:"30px", color:"#ffffff", lineHeight:"40px", fontWeight:"700"}}
          >
            Our Work
          </a>
        </Link>
        <Link href="/">
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
            style={{fontSize:"30px", color:"#ffffff", lineHeight:"40px", fontWeight:"700"}}
          >
            Blog
          </a>
        </Link>
        <Link href="/about">
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
            style={{fontSize:"30px", color:"#ffffff", lineHeight:"40px", fontWeight:"700"}}
          >
            About
          </a>
        </Link>
        <Link href="/contact">
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
            style={{fontSize:"30px", color:"#ffffff", lineHeight:"40px", fontWeight:"700"}}
          >
            Contact
          </a>
        </Link>
        
      </div>
    </>
  );
};

export default IndexDropdown;
