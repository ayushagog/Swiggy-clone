import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { BiSearch, BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    // console.log('hi')
    setToggle(true);
  };

  const hideSideMenu = () => {
    setToggle(false);
  };

  const link = [
    {
      icon: <BiSearch />,
      name: "Search",
    },
    {
      icon: <BiSolidOffer />,
      name: "Offers",
      sup: "New",
    },
    {
      icon: <IoHelpBuoyOutline />,
      name: "Help",
    },
    {
      icon: <CgProfile />,
      name: "Sign In",
    },
    {
      icon: <CiShoppingCart />,
      name: "Cart",
    },
  ];

  return (
    <>
      <div
        className=" z-[99999999] black-overlay w-full h-full fixed duration-500"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[500px] bg-[white] h-full absolute duration-700"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>

      <div className="p-[15px] shadow-2xl sticky top-0 z-[999] bg-white">
        <div className="max-w-[1200px] mx-auto  flex items-center text-center text-[#838181]">
          <div className="w-[100px]">
            <img src="images/logo.png" alt="swiggy-logo" />
          </div>
          <div className="">
            <span className="border-b-[2px] font-bold">Jalmahal </span>
            Amer Road, Jaipur{" "}
            <RxCaretDown
              onClick={showSideMenu}
              className="inline text-[#ff5200] text-[2rem]  cursor-pointer"
            />
          </div>

          <nav className="hidden md:flex list-none gap-10 ml-auto text-[18px] font-semibold">
            {link.map((data, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center hover:text-[#ff5200] cursor-pointer gap-2"
                >
                  {data.icon} {data.name} <sup>{data.sup}</sup>{" "}
                </li>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
