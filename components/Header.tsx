import React from "react";
import { DarkMode } from "../components/DarkMode";
import Link from "next/link";
import { auth, signIn } from "@/lib/auth";
import Image from "next/image";

export default async function Header() {
    const session = await auth();

    if (!session?.user) return null;

    return (
        <header className="bg-white dark:bg-gray-800 shadow">
            <nav className="container mx-auto flex justify-around items-center p-4">
                <Link
                    href="/"
                    className="text-xl font-semibold text-gray-900 dark:text-white"
                >
                    NextBlog
                </Link>

                {/* If logged in, show the user's avatar and name */}
                <div className="flex items-center space-x-4 md:order-2">
                    {session?.user ? (
                        <div className="flex items-center space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button
                                type="button"
                                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                id="user-menu-button"
                                aria-expanded="false"
                                data-dropdown-toggle="user-dropdown"
                                data-dropdown-placement="bottom"
                            >
                                <span className="sr-only">Open user menu</span>
                                <Image
                                    width={100}
                                    height={100}
                                    className="w-8 h-8 rounded-full"
                                    src={session.user?.image || ""}
                                    alt={`user photo of ${session.user?.name}`}
                                />
                            </button>
                        </div>
                    ) : (
                        <form
                            action={async () => {
                                "use server";
                                await signIn("github");
                            }}
                            className="hidden md:flex items-center space-x-4"
                        >
                            <button
                                type="submit"
                                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                            >
                                Login
                            </button>
                        </form>
                    )}
                    <DarkMode />
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
