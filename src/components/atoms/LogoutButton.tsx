
import { Button } from "flowbite-react";
import { useAuth } from "../../hooks";

export default function LogoutButton({ allSessions = false }: { allSessions?: boolean }) {
    const { signOut } = useAuth();

    return (
        <div className="flex flex-wrap gap-2">
        <Button className="h-7 w-16 bg-linear-to-r from-red-600 via-red-700 to-red-900 text-white hover:bg-linear-to-br focus:ring-red-300 dark:focus:ring-red-800 hover:cursor-pointer"
                onClick={() => signOut({ allSessions })}>
            Logout
        </Button>
        </div>
    );
}
