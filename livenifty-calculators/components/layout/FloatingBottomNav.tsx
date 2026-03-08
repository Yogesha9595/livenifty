"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calculator, BookOpen } from "lucide-react";

export default function FloatingBottomNav() {
  const pathname = usePathname();

  const nav = [
    { name: "Home", href: "/", icon: Home },
    { name: "Calculators", href: "/calculators", icon: Calculator },
    { name: "Blog", href: "/blog", icon: BookOpen },
  ];

  return (
    <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-xl rounded-2xl px-6 py-3 flex gap-8">
      {nav.map((item) => {
        const Icon = item.icon;
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center text-xs ${
              active
                ? "text-blue-600"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            <Icon size={18} />
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}