import { auth, signIn, signOut } from "@/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export function SignIn() {
    return (
        <form
            action={async () => {
                "use server";
                await signIn("github");
            }}
        >
            <button
                type="submit"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
                Login
            </button>
        </form>
    );
}

export function SignOut() {
    // const session = await auth();

    return (
        <form
            action={async () => {
                "use server";
                await signOut();
            }}
        >
            <button type="submit">
                <span>Log out</span>
            </button>
        </form>
    );
}
