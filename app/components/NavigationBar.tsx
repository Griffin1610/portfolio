"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationBar() {
  const currentPage = usePathname();

  const linkClass = (path : string) =>
  `flex items-center justify-center h-full px-6 text-sm font-medium transition ${
    currentPage === path ? "bg-heading1 text-white" : "hover:bg-red-300 text-gray-700"
  }`;


  return (
    <nav className="fixed w-full bg-background1 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end pr-15 h-16">
          <div className="flex items-stretch h-16">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
            <Link href="/pages/AboutPage" className={linkClass("/pages/AboutPage")}>
              About
            </Link>
            <Link href="/pages/ProjectPage" className={linkClass("/pages/ProjectPage")}>
              Projects
            </Link>
            <Link href="/pages/ExperiencePage" className={linkClass("/pages/ExperiencePage")}>
              Experience
            </Link>
            <Link href="/pages/ResumePage" className={linkClass("/pages/ResumePage")}>
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
