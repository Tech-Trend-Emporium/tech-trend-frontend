import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Button as FBButton } from "flowbite-react";
import Logo from "../atoms/Logo";
import SearchBar from "../molecules/SearchBar";
import LogoutButton from "../atoms/LogoutButton";
import { IoMdCart } from "react-icons/io";

type Props = { cartCount?: number };

export function NavbarShopper({ cartCount = 2 }: Props) {
  const username = "John Doe";

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
          Shopper · {username}
        </span>

        <FBButton pill color="gray" size="sm" className="relative">
          <IoMdCart className="h-4 w-4" />
          <span className="absolute -top-2 -right-2 text-[10px] rounded-full px-1 bg-blue-600 text-white">
            {cartCount}
          </span>
        </FBButton>

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