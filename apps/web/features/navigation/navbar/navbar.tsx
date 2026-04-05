import DesktopNavbar from "./desktop/desktopNavbar";
import MobileNavbar from "./mobile/mobileNavbar";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 transition-all w-full">
      <div className="hidden md:block">
        <DesktopNavbar />
      </div>
      <div className="md:hidden">
        <MobileNavbar />
      </div>
    </nav>
  );
}
