import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


export const FooterComponent = () => {
  const theme = localStorage.getItem('theme');

  return (
    <Footer container className="bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-700">
      <div className="w-full text-center">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full px-4">
          {theme == 'dark' ? (
            <FooterBrand
              href="#"
              src="./logo-white-text.png"
              alt="Tech Trend Logo"
              name="Tech Trend Emporium"
            />
          ) : (
            <FooterBrand
              href="#"
              src="./logo-black-text.png"
              alt="Tech Trend Logo"
              name="Tech Trend Emporium"
            />
          )}

          <FooterLinkGroup className="mt-4 sm:mt-0">
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>

        <FooterDivider className="border-gray-700 my-4" />

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-white transition-colors dark:hover:text-white dark:text-gray-500">
            <FaFacebookF size={18} />
          </a>
          <a href="#" className="hover:text-white transition-colors dark:hover:text-white dark:text-gray-500">
            <FaTwitter size={18} />
          </a>
          <a href="#" className="hover:text-white transition-colors dark:hover:text-white dark:text-gray-500">
            <FaInstagram size={18} />
          </a>
          <a href="#" className="hover:text-white transition-colors dark:hover:text-white dark:text-gray-500">
            <FaLinkedinIn size={18} />
          </a>
        </div>

        <FooterCopyright
          href="#"
          by="Tech Trend Emporium™"
          year={new Date().getFullYear()}
        />
      </div>
    </Footer>
  );
};