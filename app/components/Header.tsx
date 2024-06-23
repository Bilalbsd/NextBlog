import React from "react";
import DarkMode from "./DarkMode";
import Link from "next/link";

export function Header() {
    return (
        <header className="bg-white dark:bg-gray-800 shadow">
            <nav className="container mx-auto flex justify-between items-center p-4">
                <Link
                    href="/"
                    className="text-xl font-semibold text-gray-900 dark:text-white"
                >
                    NextBlog
                </Link>
                <div className="hidden md:flex items-center space-x-4">
                    <a
                        href="#"
                        className="text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 px-4 py-2 rounded-lg"
                    >
                        Login
                    </a>
                    <DarkMode />
                    {/* <a
                        href="#"
                        className="bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                    >
                        Sign up
                    </a> */}
                </div>
                <button
                    type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>
            </nav>
        </header>
    );
}
