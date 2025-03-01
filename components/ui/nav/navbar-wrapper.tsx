import NavBar from "./navbar";
import { ThemeSwitcher } from "@/components/ui/nav/theme-switcher";

export default function NavBarWrapper() {
  return (
    <NavBar>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex justify-between items-center rounded-lg bg-primary-foreground md:pl-0 pl-4">
          <div className="md:hidden flex pr-2">Appearance</div>
          <ThemeSwitcher />
        </div>
      </div>
    </NavBar>
  );
}
