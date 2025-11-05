import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Logo from "../atoms/Logo";
import Button from "../atoms/Button";
import SearchBar from "../molecules/SearchBar";
import LogoutButton from "../atoms/LogoutButton";

export function NavbarEmployee() {
  const username = "Jane Smith";
  const role = "Admin"; // or "Employee"

  return (
    <Navbar fluid>
      <NavbarBrand href="#">
        <Logo className="mr-3 h-6 sm:h-9" text="white" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Tech Trend Emporium
        </span>
      </NavbarBrand>

      <div className="flex md:order-2 items-center gap-2">
        <span className="text-sm text-gray-600 dark:text-gray-300 mr-2">
          {role} · {username}
        </span>

        <Button size="sm" className="hover:opacity-90">
          Employee Portal
        </Button>

        <LogoutButton />
        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <div className="flex items-center gap-4">
          <NavbarLink href="#">ShopList</NavbarLink>
          <NavbarLink href="#">Wishlist</NavbarLink>
          <SearchBar />
        </div>
      </NavbarCollapse>
    </Navbar>
  );
}