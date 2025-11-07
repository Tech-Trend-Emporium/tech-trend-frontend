import { ExtraInfoOverNavbar, FooterComponent, NavbarComponent } from "../components/organisms";
import { Outlet } from "react-router-dom";


export const AppShell = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
            <ExtraInfoOverNavbar />
            <NavbarComponent />
            <main className="flex-1 container mx-auto py-0.4">
                <Outlet />
            </main>
            <FooterComponent />
        </div>
    );
}