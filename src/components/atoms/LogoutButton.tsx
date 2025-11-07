
import { Button } from "flowbite-react";
import { clearAuth } from "../../services/auth";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
    const navigate = useNavigate();

    const handleLogout = () => {
        try {
            clearAuth();
        } finally {
            // ensure user is redirected even if clearAuth throws
            navigate("/", { replace: true });
        }
    };

    return (
        <div className="flex flex-wrap gap-2">
            <Button
                className="h-7 w-16 bg-linear-to-r from-red-600 via-red-700 to-red-900 text-white hover:bg-linear-to-br focus:ring-red-300 dark:focus:ring-red-800 hover:cursor-pointer dark:text-white"
                onClick={handleLogout}
            >
                Logout
            </Button>
        </div>
    );
}
