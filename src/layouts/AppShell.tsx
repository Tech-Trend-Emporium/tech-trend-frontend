import { ExtraInfoOverNavbar, FooterComponent, NavbarComponent } from "../components/organisms";
import { Outlet } from "react-router-dom";

export const AppShell = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <ExtraInfoOverNavbar />
            <NavbarComponent />
            <main className="flex-1 container mx-auto p-4">
                <Outlet />
            </main>
            <FooterComponent />
        </div>
    );
}