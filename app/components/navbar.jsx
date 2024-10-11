// @flow strict
"use client"; // Mark this component as a Client Component
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar state
  };

  const closeSidebar = () => {
    setIsOpen(false); // Close sidebar
  };

  return (
    <nav className="bg-transparent shadow-lg">
      <div className="flex items-center justify-between py-5 px-4 md:px-10">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-[#16f2b3] text-3xl font-bold transition-colors duration-300 hover:text-pink-500"
          >
            Hamed
          </Link>
        </div>

        {/* Sidebar button for mobile view */}
        <div className="md:hidden">
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Sidebar Menu */}
        <div
          className={`fixed inset-0 z-40 transition-transform transform bg-gray-800 bg-opacity-90 md:relative md:flex md:flex-row md:items-center md:bg-transparent md:opacity-100 md:translate-x-0 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          id="sidebar-menu"
        >
          <ul className="flex flex-col items-start p-4 space-y-2 md:flex-row md:space-y-0 md:space-x-4">
            <li>
              <Link
                className="block text-white transition-colors duration-300 hover:text-pink-600"
                href="/#about"
                onClick={closeSidebar} // Close sidebar on link click
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                className="block text-white transition-colors duration-300 hover:text-pink-600"
                href="/#experience"
                onClick={closeSidebar}
              >
                EXPERIENCE
              </Link>
            </li>
            <li>
              <Link
                className="block text-white transition-colors duration-300 hover:text-pink-600"
                href="/#skills"
                onClick={closeSidebar}
              >
                SKILLS
              </Link>
            </li>
            <li>
              <Link
                className="block text-white transition-colors duration-300 hover:text-pink-600"
                href="/#education"
                onClick={closeSidebar}
              >
                EDUCATION
              </Link>
            </li>
            <li>
              <Link
                className="block text-white transition-colors duration-300 hover:text-pink-600"
                href="/blog"
                onClick={closeSidebar}
              >
                BLOGS
              </Link>
            </li>
            <li>
              <Link
                className="block text-white transition-colors duration-300 hover:text-pink-600"
                href="/#projects"
                onClick={closeSidebar}
              >
                PROJECTS
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay for clicking outside the sidebar to close it */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={closeSidebar} // Close sidebar on overlay click
        />
      )}
    </nav>
  );
}

export default Navbar;
