import React from "react";
import { DarkMode } from "../components/DarkMode";
import Link from "next/link";
import { auth } from "@/lib/auth";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { CreditCard, LogOut, Newspaper, User } from "lucide-react";
import { DropdownMenuShortcut } from "./ui/dropdown-menu";
import { SignIn, SignOut } from "./AuthButtons";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default async function Header() {
    const session = await auth();

    // if (!session1?.user) return null;

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
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar>
                                        <AvatarImage
                                            src={session?.user?.image || ""}
                                            width={50}
                                            height={50}
                                            className="w-8 h-8 rounded-full cursor-pointer"
                                            alt={`user photo of ${session?.user?.name}`}
                                        />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>
                                        Mon compte
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <Link href="/posts/new">
                                            <DropdownMenuItem>
                                                <User className="mr-2 h-4 w-4" />
                                                <span>Profil</span>
                                                <DropdownMenuShortcut>
                                                    ⇧⌘P
                                                </DropdownMenuShortcut>
                                            </DropdownMenuItem>
                                        </Link>
                                        <DropdownMenuItem>
                                            <CreditCard className="mr-2 h-4 w-4" />
                                            <span>Favoris</span>
                                            <DropdownMenuShortcut>
                                                ⌘B
                                            </DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <Link href="/posts/new">
                                            <DropdownMenuItem>
                                                <Newspaper className="mr-2 h-4 w-4" />
                                                <span>Créer un article</span>
                                                <DropdownMenuShortcut>
                                                    ⇧⌘C
                                                </DropdownMenuShortcut>
                                            </DropdownMenuItem>
                                        </Link>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <LogOut className="mr-2 h-4 w-4" />
                                        <SignOut />
                                        <DropdownMenuShortcut>
                                            ⇧⌘Q
                                        </DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    ) : (
                        <SignIn />
                    )}
                    <DarkMode />
                </div>
            </nav>
        </header>
    );
}
