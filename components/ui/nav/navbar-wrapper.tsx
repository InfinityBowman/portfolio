import NavBar from "./navbar";
import HeaderAuth from "./header-auth";
import { ThemeSwitcher } from "@/components/ui/nav/theme-switcher";

export default function NavBarWrapper() {
  return (
    <NavBar>
      <div className="flex flex-row md:flex-row gap-2">
        <div className="hidden md:flex justify-center rounded-lg bg-primary-foreground md:pl-0 pl-4">
          <div className="md:hidden flex justify-center items-center pr-2">Appearance</div>
          <ThemeSwitcher />
        </div>
        <HeaderAuth />
      </div>
    </NavBar>
  );
}
