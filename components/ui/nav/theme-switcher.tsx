"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Laptop, Moon, Sun, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const ICON_SIZE = 20;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          {theme === "light" ? (
            <Sun key="light" size={ICON_SIZE} className={"text-muted-foreground"} />
          ) : theme === "dark" ? (
            <Moon key="dark" size={ICON_SIZE} className={"text-muted-foreground"} />
          ) : theme === "twilight" ? (
            <Sparkles key="twilight" size={ICON_SIZE} className={"text-muted-foreground"} />
          ) : (
            <Laptop key="system" size={ICON_SIZE} className={"text-muted-foreground"} />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-content" align="start">
        <DropdownMenuRadioGroup value={theme} onValueChange={(e) => setTheme(e)}>
          <DropdownMenuRadioItem className="flex gap-2" value="light">
            <Sun size={ICON_SIZE} className="text-muted-foreground" /> <span>Light</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="flex gap-2" value="dark">
            <Moon size={ICON_SIZE} className="text-muted-foreground" /> <span>Dark</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="flex gap-2" value="twilight">
            <Sparkles size={ICON_SIZE} className="text-muted-foreground" /> <span>Twilight</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="flex gap-2" value="system">
            <Laptop size={ICON_SIZE} className="text-muted-foreground" /> <span>System</span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ThemeSwitcher };