import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import BtnIcon from '../assets/Vector.png'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed flex w-full py-8 bg-gradient-to-t from-neutral-900 to-neutral-950 ">
      <nav
        className="mx-auto flex max-w-full items-center justify-center  p-6 lg:px-8"
        aria-label="Global"
      >
        {/* <div className="flex lg:flex-1"> */}
          <Link to="/" className="-m-1 p-1">
            
            <img className=" h w-auto " src={Logo} alt="" />
          </Link>
        {/* </div> */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 xl:ml-80 xl:pl-80">
          <Popover className="fixed">
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            ></Transition>
          </Popover>

          <Link
            to="/"
            className="text-xl font-space  py-2 px-4  text-white"
          >
            {" "}
            {/* Replace anchor with Link */}
            Bot
          </Link>
          <Link
            to="/about"
            className="text-xl font-space leading-6 py-2 px-4  text-white"
          >
            {" "}
            {/* Replace anchor with Link */}
            Gitbook
          </Link>
          <Link
            to="/package"
            className="text-xl font-space leading-6 text-white "
            
          >
            <button className="flex bg-[#6EFF8D] hover:bg-white text-black hover:text-black font-space items-center justify-center gap-3 w-[200px] py-3 px-2 rounded-full ">
              <span>Launch App</span><img src={BtnIcon}></img>
            </button>
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden  "
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#4B4747]  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              {" "}
              {/* Replace anchor with Link */}
              <span className="sr-only">Your Company</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-space leading-7 text-white "
                >
                  {" "}
                  {/* Replace anchor with Link */}
                  Bot
                </Link>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-space leading-7 text-white "
                >
                  {" "}
                  {/* Replace anchor with Link */}
                  Gitbook
                </Link>
                <Link
                  to="/package"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-space leading-7 text-white "
                >
                  {" "}
                  <button className="bg">
                    Launch App
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
