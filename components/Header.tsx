import ThemeToggle from "./theme/ThemeToggle";
import { profile } from "@/lib/profile.config";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-8 py-5 md:px-20">
      <span className="font-mono text-sm tracking-widest uppercase">
        {profile.handle}
      </span>
      <ThemeToggle />
    </header>
  );
}
