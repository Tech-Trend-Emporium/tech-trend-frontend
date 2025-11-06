import { Navbar, NavbarLink } from "flowbite-react";
import { Button } from "../atoms";


export const ExtraInfoOverNavbar = () => {
    return (
        <Navbar fluid className="bg-black! py-1!">
        <div className="w-full h-full flex justify-between items-center px-4">
            <Button variant="outline" size="sm">USD</Button>
            <span className="text-sm font-bold! text-gray-600 dark:text-gray-300">
            FREE SHIPPING IN ORDERS OVER $50! NOV. 1-15.
            </span>
            <NavbarLink href="#" className="text-sm text-gray-500 dark:text-gray-300">Support</NavbarLink>
        </div>
        </Navbar>
    );
};