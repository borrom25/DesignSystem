import { Moon, SunMedium } from "lucide-react";
import { ThemeSwitcherOption } from "../ThemeSwitcher.types";

export const THEME_OPTIONS: ThemeSwitcherOption[] = [
  { label: <SunMedium size={16} />, value: "light" },
  { label: <Moon size={16} />, value: "dark" },
];
