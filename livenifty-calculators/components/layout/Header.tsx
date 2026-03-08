"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Scroll shadow effect */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll when menu open */

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  /* Navigation */

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Calculators", href: "/calculators" },
    { name: "Investment Guides", href: "/investment-guides" },
    { name: "Investment Strategies", href: "/investment-strategies" },
    { name: "Best Brokers", href: "/best-stock-brokers-india" },
    { name: "Low Brokerage", href: "/lowest-brokerage-brokers-india" },
    { name: "Financial Formulas", href: "/financial-formulas" },
    { name: "Blog", href: "/blog" },
  ];

  /* Active route detection */

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* HEADER */}

      <header
        className={`
          sticky top-0 z-50
          backdrop-blur-xl
          transition-all duration-300
          ${
            scrolled
              ? "bg-white/90 dark:bg-black/80 shadow-lg border-b border-gray-200/70 dark:border-gray-800/70"
              : "bg-white/70 dark:bg-black/60"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* LOGO */}

          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="LiveNifty Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500" />

            <span className="font-semibold text-lg tracking-tight">
              LiveNifty
            </span>
          </Link>

          {/* DESKTOP NAV */}

          <nav className="hidden md:flex items-center gap-8">

            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    text-sm font-medium transition
                    ${
                      active
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Affiliate CTA */}

            <Link
              href="/compare-brokers"
              className="ml-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
            >
              Compare Brokers
            </Link>

          </nav>

          {/* RIGHT SIDE */}

          <div className="flex items-center gap-4">

            <ThemeToggle />

            {/* Mobile menu button */}

            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
              aria-expanded={open}
              className="md:hidden relative w-6 h-6 flex items-center justify-center"
            >
              <span
                className={`
                  absolute w-6 h-0.5 bg-gray-800 dark:bg-white
                  transition-all duration-300
                  ${open ? "rotate-45" : "-translate-y-2"}
                `}
              />

              <span
                className={`
                  absolute w-6 h-0.5 bg-gray-800 dark:bg-white
                  transition-all duration-300
                  ${open ? "opacity-0" : ""}
                `}
              />

              <span
                className={`
                  absolute w-6 h-0.5 bg-gray-800 dark:bg-white
                  transition-all duration-300
                  ${open ? "-rotate-45" : "translate-y-2"}
                `}
              />
            </button>

          </div>

        </div>
      </header>

      {/* OVERLAY */}

      <div
        className={`
          fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity
          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        onClick={closeMenu}
      />

      {/* MOBILE DRAWER */}

      <aside
        className={`
          fixed top-0 right-0 h-full w-80 z-50
          bg-white dark:bg-black
          border-l border-gray-200 dark:border-gray-800
          shadow-2xl
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-6 flex flex-col h-full">

          {/* Drawer header */}

          <div className="flex justify-between items-center mb-8">

            <span className="font-semibold text-lg">
              Menu
            </span>

            <button
              onClick={closeMenu}
              aria-label="Close Menu"
            >
              <X size={20} />
            </button>

          </div>

          {/* Mobile Navigation */}

          <nav className="flex flex-col gap-6">

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                {item.name}
              </Link>
            ))}

          </nav>

          <div className="flex-grow" />

          {/* Affiliate block */}

          <div className="mt-10 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">

            <p className="text-sm font-medium mb-2">
              Sponsored
            </p>

            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
              Open a trading account with India’s top broker.
            </p>

            <Link
              href="/compare-brokers"
              onClick={closeMenu}
              className="block text-center px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
            >
              Open Free Account
            </Link>

          </div>

        </div>
      </aside>
    </>
  );
}