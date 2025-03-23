import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex w-full justify-center bg-[#5480a9] p-6">
      <ul className="flex flex-row items-center gap-10 text-white text-xl">
        <li>
          <Link href="/">Domů</Link>
        </li>
        <li>
          <Link href="/#about">O soutěži</Link>
        </li>
        <li>
          <Link href="/#history">Historie soutěže</Link>
        </li>
        <li>
          <Link href="/#school">O škole</Link>
        </li>
        <li>
          <Link href="/competition">Ročníky soutěže</Link>
        </li>
        <li>
          <Link href="/contact">Kontakt</Link>
        </li>
        <li className="relative">
          <div onClick={toggleDropdown} className="cursor-pointer">
            <img
              src=".././login.png"
              alt="login-button"
              className="h-6 w-auto"
            />
          </div>

          {isDropdownOpen && (
            <div className="absolute right-0 z-50 mt-2 rounded bg-white text-black shadow-lg">
              <ul className="flex flex-col">
                <li>
                  <Link
                    href="/login"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={closeDropdown}
                  >
                    Přihlásit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={closeDropdown}
                  >
                    Registrovat
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
