import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="w-[100%] bg-[#202020] text-white">
        <div className="flex justify-between w-full sm:px-20 px-5  items-center h-20">
          <div className="Logo">
            <NavLink to="/">
              <h1 className="logo text-3xl font-bold">WorldAtlas</h1>
            </NavLink>
          </div>

          <div className="md:block hidden">
            <ul className="list">
              <li>
                <NavLink to="/">
                  <p className="textHover">Home</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/Country">
                  <p className="textHover">Country</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="About">
                  <p className="textHover">About</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="Contact">
                  <p className="textHover">Contact</p>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Mobile Size */}
          <div className="md:hidden">
            {!isOpen ? (
              <p>
                <MdOutlineMenu
                  className="text-3xl"
                  onClick={() => setIsOpen(true)}
                />
              </p>
            ) : (
              <p>
                <RxCross2
                  className="text-3xl"
                  onClick={() => setIsOpen(false)}
                />
              </p>
            )}

            <div
              className={`${
                isOpen ? "block" : "hidden"
              } absolute z-[1] top-20 right-0 bg-[#202020] w-full h-full `}
            >
              <ul className="list flex flex-col pr-20 px-5 sm:px-20 mb-10">
                <li>
                  <NavLink to="/">
                    <p className="textHover" onClick={() => setIsOpen(false)}>Home</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Country">
                    <p className="textHover" onClick={() => setIsOpen(false)}>Country</p>
                  </NavLink>
                </li> 
                <li>
                  <NavLink to="About">
                    <p className="textHover" onClick={() => setIsOpen(false)}>About</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="Contact">
                    <p className="textHover" onClick={() => setIsOpen(false)}>Contact</p>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
