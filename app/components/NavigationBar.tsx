"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationBar() {
  const currentPage = usePathname();

  const linkClass = (path : string) =>
  `flex items-center justify-center h-full px-6 text-sm font-medium transition ${
    currentPage === path ? "bg-heading1 text-background1" : "hover:bg-slate-700 text-slate-300"
  }`;


  return (
    <nav className="fixed w-full bg-background1 shadow-lg shadow-black/30 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end pr-15 h-16">
          <div className="flex items-stretch h-16">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
            <Link href="/pages/about" className={linkClass("/pages/about")}>
              About
            </Link>
            <Link href="/pages/projects" className={linkClass("/pages/projects")}>
              Projects
            </Link>
            <Link href="/pages/experience" className={linkClass("/pages/experience")}>
              Experience
            </Link>
            <Link href="/pages/resume" className={linkClass("/pages/resume")}>
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
