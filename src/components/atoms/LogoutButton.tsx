
import { Button } from "flowbite-react";
import { useAuth } from "../../hooks";

export default function LogoutButton({ allSessions = false }: { allSessions?: boolean }) {
    const { signOut } = useAuth();

    return (
        <div className="flex flex-wrap gap-2">
        <Button className="bg-linear-to-r from-red-400 via-red-500 to-red-600 text-white hover:bg-linear-to-br focus:ring-red-300 dark:focus:ring-red-800"
                onClick={() => signOut({ allSessions })}>
            Logout
        </Button>
        </div>
    );
}
