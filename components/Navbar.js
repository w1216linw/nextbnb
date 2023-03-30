import useBooker from "@/hooks/useBooker";
import {
  Bars3Icon,
  GlobeAltIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import {
  MagnifyingGlassCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const { selectionRange, handleSelect, guests, setGuests } = useBooker();
  return (
    <header className="grid items-center grid-cols-3 py-3 px-2 md:px-5 shadow-md z-50 sticky top-0 bg-white bg-opacity-80">
      <div>
        <Image
          src="https://links.papareact.com/qd3"
          width="120"
          height="40"
          alt="airbnb icon"
        />
      </div>
      <div className="w-full border border-gray-400 rounded-full flex items-center py-1 md:py-2 pl-3 pr-1 shadow-sm">
        <input
          type="text"
          className="bg-transparent outline-none flex-grow"
          placeholder="Chicago..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
        <button className="flex items-center border-2 border-gray-400 rounded-full p-1 cursor-pointer">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </button>
      </div>
      {search && (
        <div className="col-span-3 mx-auto my-2">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate={new Date()}
            rangeColors={["#ff9498"]}
          />
          <div className="flex items-center">
            <h2 className="text-xl font-semibold flex-grow">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 outline-none text-lg ml-2"
              min={1}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2">
            <button onClick={() => setSearch("")}>Cancel</button>
            <button className="text-red-500 font-bold">Search</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
