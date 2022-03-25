import React, { useState } from 'react';
import Image from 'next/image';
import { SearchIcon, GlobeAltIcon, UsersIcon, MenuIcon, SearchCircleIcon } from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

function Header({ placeholder }) {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const selectionRange = {
    startDate,
    endDate,
    key: 'selection'
  };
  const handleSelect = ranges => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const resetInput = () => {
    setSearchInput('');
  };
  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests
      }
    });
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          onClick={() => {
            router.push('/');
          }}
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder || 'Start your search'}
          className="pl-5 bg-transparent outline-none flex-grow text-black-600 placeholder-gray-400"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mr-5" />
      </div>
      <div className="flex items-center space-x-4 justify-end">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex border-2 rounded-full p-2 space-x-2 bg-black">
          <MenuIcon className="h-6 text-white" />
          <SearchCircleIcon className="h-6 text-white" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-3">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
          <div className="flex justify-between items-center border-b mb-4">
            <h2 className="text-2xl font-semibold flex-grow">Number Of Guests</h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              value={noOfGuests}
              onChange={e => {
                setNoOfGuests(e.target.value);
              }}
              min={1}
              className="w-12 pl-2 outline-none text-red-500 cursor-pointer"
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button className="flex-grow text-red-400" onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
