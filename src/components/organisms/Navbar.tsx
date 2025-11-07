import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Button as FBButton, Badge } from "flowbite-react";
import { Logo, Button } from "../../components/atoms";
import { SearchBar } from "../molecules";
import { LogoutButton } from "../atoms/LogoutButton";
import { useAuth } from "../../hooks/auth/AuthProvider";
import { IoMdCart } from "react-icons/io";
import { userNameFromToken, roleFromToken } from "../../services";
import { useNavigate } from "react-router-dom";


type Props = { cartCount?: number };

export const NavbarComponent = ({ cartCount = 0 }: Props) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const username = userNameFromToken(auth);
  const role = roleFromToken(auth);

  return (
    <Navbar fluid className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-2.5">
      <NavbarBrand href="/">
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
          <Button href="/sign-in" variant="outline" size="sm" className="hover:text-black hover:font-semibold hover:bg-blue-500!">
            Login
          </Button>
        ) : (
          <>
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 mr-2">
              {role === "SHOPPER" ? "User" : role === "EMPLOYEE" ? "Employee" : "Admin"}
              {username ? ` · ${username}` : ""}
            </span>

            {role === 'SHOPPER' && (
              <FBButton pill color="gray" size="sm" className="relative hover:cursor-pointer">
                <IoMdCart className="h-4 w-4" />
                <Badge className="absolute -top-1.5 -right-1.5 text-[0.75rem] leading-none rounded-full px-1.5 py-1 bg-blue-600 text-white">
                  {cartCount}
                </Badge>
              </FBButton>
            )}

            {(role === 'EMPLOYEE' || role === 'ADMIN') && (
              <Button
                variant="outline"
                size="sm"
                className="hover:opacity-90 hover:bg-blue-800! hover:cursor-pointer"
                onClick={() => (navigate("/dashboard"))}
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
};
