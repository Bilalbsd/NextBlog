"use client"

import { useEffect, useState } from "react";
import { auth, signIn } from "@/lib/auth";
import Image from "next/image";

export function UserConnection() {
    const [session, setSession] = useState<{ user: { image: string; name: string } } | undefined>(undefined);

    useEffect(() => {
        async function getSession() {
            const session = await auth();
        }
        getSession();
    }, []);

    const handleSignIn = async (event: { preventDefault: () => void; }) => {
        event.preventDefault(); // Empêche le comportement par défaut du formulaire
        await signIn("github");
    };

    if (!session?.user) return null;

    return (
        <div>
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
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

            <div className="hidden md:flex items-center space-x-4">
                <form onSubmit={handleSignIn}>
                    <button
                        type="submit"
                        className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
