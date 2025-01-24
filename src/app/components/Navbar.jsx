'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Navbar = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/recipe/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery(''); // Clear the input field
    }
  };


  return (
    <div className="navbar bg-background shadow-lg w-full sticky top-0 px-5 z-50">
      {/* Container for logo and search bar */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full space-y-4 md:space-y-0 md:space-x-10">
        {/* Logo Section */}
        <div className="flex-shrink-0 mt-2 md:mt-0">
          <a href="/" className="text-2xl font-libre-baskerville text-primary">Crave</a>
        </div>

        {/* Search Bar Section */}
        <div className="flex-shrink-0 w-full sm:w-[250px] md:w-[400px]">
          <div className="form-control w-full">
            <div className="relative w-full">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                value={searchQuery }
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search a recipe"
                className="input input-bordered my-2 w-full bg-background text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              />
              
                <button className="absolute right-0 top-0 bottom-0 px-4 my-2 bg-primary text-white rounded-r-md"
                        type="submit">
                  Search
                </button>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
