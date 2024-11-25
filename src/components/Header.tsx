"use client"; // Indique que ce composant est côté client

import Link from "next/link";
import { usePathname } from "next/navigation"; // Utilisation avec App Router
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Remplace `useRouter` pour App Router

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/">
          <h1 className="text-2xl font-bold text-gray-800">KyNai</h1>
        </Link>
        <nav className="hidden md:flex space-x-6">
          {["pulls", "t-shirts", "nouveautes", "contact"].map((page) => (
            <Link
              key={page}
              href={`/${page}`}
              className={`hover:text-gray-500 ${
                pathname.includes(page) ? "font-bold underline" : ""
              }`}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md p-4">
          <ul className="space-y-2">
            {["pulls", "t-shirts", "nouveautes", "contact"].map((page) => (
              <li key={page}>
                <Link
                  href={`/${page}`}
                  className={`hover:text-gray-500 ${
                    pathname.includes(page) ? "font-bold underline" : ""
                  }`}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
