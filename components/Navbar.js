import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";

import {
  Bars3Icon,
  GlobeAltIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="grid items-center grid-cols-3 py-3 px-2 md:px-5 shadow-md z-50 sticky top-0">
      <div>
        <Image src="https://links.papareact.com/qd3" width="120" height="40" />
      </div>
      <div className="w-full border rounded-full flex items-center py-1 md:py-2 pl-3 pr-1 shadow-sm">
        <input
          type="text"
          className="bg-transparent outline-none flex-grow"
          placeholder="Chicago..."
        />
        <button className="cursor-pointer hidden md:inline-flex">
          <MagnifyingGlassCircleIcon className=" h-8 text-red-400" />
        </button>
      </div>
      <div className="flex items-center justify-end gap-3">
        <button className="flex items-center gap-2">
          <p className="hidden md:inline-flex">Become a host</p>
          <GlobeAltIcon className="h-6" />
        </button>
        <button className="flex items-center border-2 rounded-full p-1 cursor-pointer">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
