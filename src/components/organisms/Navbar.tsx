import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Button as FBButton } from "flowbite-react";
import { Logo, Button,  } from "../atoms";
import { SearchBar } from "../molecules/";
import LogoutButton from "../atoms/LogoutButton";
import { useAuth } from "../../hooks/auth/AuthProvider";
import { isEmployeeOrAdmin, isShopper } from "../../utils/auth/role";
import { getDisplayNameFromToken } from "../../utils/auth/claims";
import { IoMdCart } from "react-icons/io";

type Props = { cartCount?: number };
export function NavbarComponent({ cartCount = 0 }: Props) {
  const { auth } = useAuth();
  const username = getDisplayNameFromToken(auth.accessToken);
  const theme = localStorage.getItem("theme") || "light";

  return (
    <Navbar fluid>
      <NavbarBrand href="#">
        {/* Dark logo */}
        <Logo className="mr-3 h-6 sm:h-9 hidden dark:block" text="white" />
        {/* Light logo */}
        <Logo className="mr-3 h-6 sm:h-9 block dark:hidden" text="black" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Tech Trend Emporium
        </span>
      </NavbarBrand>

      <div className="flex md:order-2 items-center gap-2">
        {!auth.isAuthenticated ? (
          <Button variant="outline" size="sm" className="hover:text-black hover:font-semibold hover:bg-blue-500!">
            Login
          </Button>
        ) : (
          <>
            <span className="text-sm text-gray-600 dark:text-gray-300 mr-2">
              {isEmployeeOrAdmin(auth.role) ? (auth.role === "ADMIN" ? "Admin" : "Employee") : "Shopper"}
              {username ? ` · ${username}` : ""}
            </span>

            {isShopper(auth.role) && (
              <FBButton pill color="gray" size="sm" className="relative hover:cursor-pointer">
                <IoMdCart className="h-4 w-4" />
                <span className="absolute -top-2 -right-2 text-[10px] rounded-full px-1 bg-blue-600 text-white">
                  {cartCount}
                </span>
              </FBButton>
            )}

            {isEmployeeOrAdmin(auth.role) && (
              <Button
                variant="outline"
                size="sm"
                className="hover:opacity-90 hover:bg-blue-800! hover:cursor-pointer"
                onClick={() => (location.href = "/portal")}
              >
                Employee Portal
              </Button>
            )}

            <LogoutButton />
          </>
        )}
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
