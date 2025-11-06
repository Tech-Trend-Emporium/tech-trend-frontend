
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Button, Logo } from "../atoms";
import { SearchBar } from "../molecules";


export const NavbarComponent = () => { 
  return (
    <Navbar fluid>
      <NavbarBrand href="#">
        <Logo className="mr-3 h-6 sm:h-9" text="white" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Tech Trend Emporium</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button variant="outline" size="sm" className="hover:text-black hover:font-semibold hover:cursor-pointer hover:bg-blue-500!">Login</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <div className = "flex items-center gap-4">
            <NavbarLink href="#">ShopList</NavbarLink>
            <NavbarLink href="#">Wishlist</NavbarLink>
            <SearchBar />
        </div>
      </NavbarCollapse>
    </Navbar>
  );
};
