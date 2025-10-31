import { Navbar } from "flowbite-react";
import { Outlet } from "react-router-dom";


export const AppShell = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto p-4">
                <Outlet />
            </main>
            <footer className="border-t p-4 text-center text-sm text-gray-500">
                Tech Trend Emporium
            </footer>
        </div>
    );
}