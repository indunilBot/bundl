"use client";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

import pagination from "../assets/pagination.png";

function FooterB() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="w-full flex items-center justify-center sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="all rights reserved" />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <img src={pagination}  /> 
          </div>
        </div>
      </div>
    </Footer>
  );
}
export default FooterB;