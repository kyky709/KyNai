import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/">
          <h1 className="text-2xl font-bold text-gray-800">KyNai</h1>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/pulls" className="hover:text-gray-500">
            Pulls
          </Link>
          <Link href="/t-shirts" className="hover:text-gray-500">
            T-shirts
          </Link>
          <Link href="/nouveautes" className="hover:text-gray-500">
            Nouveautés
          </Link>
          <Link href="/contact" className="hover:text-gray-500">
            Contact
          </Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
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
            <li>
              <Link href="/pulls" className="hover:text-gray-500">
                Pulls
              </Link>
            </li>
            <li>
              <Link href="/t-shirts" className="hover:text-gray-500">
                T-shirts
              </Link>
            </li>
            <li>
              <Link href="/nouveautes" className="hover:text-gray-500">
                Nouveautés
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-500">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;