import { DarkThemeToggle, Navbar, NavbarBrand, NavbarLink, NavbarToggle } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function TopNavBar() {
  const navigate = useNavigate();

  return (
    <Navbar fluid className="w-full  border-b-2 border-b-neutral-300 dark:border-b-white  dark:bg-black dark:bg-opacity-30">
      <NavbarBrand onClick={() => navigate('/')}>
        <img src="/favicon.png" style={{height: '4vh', width: '4vh', border: 'solid black 1px', borderRadius: '50%'}}></img>
        <span className="pl-5 pr-2 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          hafnerp.dev
        </span>
        <span className="dark:text-white">
          {
            location.pathname == "/" ? "" : location.pathname
          }
        </span>
      </NavbarBrand>
      <Navbar.Collapse>
        <NavbarLink onClick={() => navigate('/social')}>
          Social
        </NavbarLink>
        <NavbarLink onClick={() => navigate('/contact')}>
          Contact
        </NavbarLink>
      </Navbar.Collapse>
      <div>
        <NavbarToggle />
        <DarkThemeToggle />
      </div>
    </Navbar>
  );
}