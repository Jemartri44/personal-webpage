"use client";

import { motion } from "framer-motion";
import { Montaga } from "next/font/google";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { MobileNav } from "@/components/common/mobile-nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/utils/client-translation";
import { useDownloadCV } from "@/utils/cv-download";

interface MainNavProps {
  items?: any[];
  children?: React.ReactNode;
}

const norican = Montaga({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

// Animation variants for the navigation items
const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const pathname = usePathname();
  const { t } = useTranslation();
  const downloadCV = useDownloadCV();

  React.useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  return (
    <div className="flex gap-6 md:gap-10 items-center"> {/* Added items-center */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <span className={cn(norican.className, "text-2xl")}>
            {siteConfig.authorName}
          </span>
        </Link>
      </motion.div>
      
      {/* Updated wrapper div with padding-top */}
      <div className="hidden md:flex gap-6 items-center pt-2"> {/* Added pt-2 and items-center */}
        {items?.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.titleKey === "navbar.cv" ? (
              <button
                onClick={downloadCV}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm text-foreground/60",
                  "py-1" // Added vertical padding
                )}
              >
                {t(item.titleKey)}
              </button>
            ) : (
              <Link
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                  "py-1", // Added vertical padding
                  item.href.startsWith(`/${segment}`)
                    ? "text-foreground"
                    : "text-foreground/60",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.titleKey ? t(item.titleKey) : item.title}
              </Link>
            )}
          </motion.div>
        ))}
      </div>
      
      {/* Mobile menu button */}
      <motion.button
        className="flex items-center space-x-2 ml-auto md:hidden" // Added ml-auto to push it to right
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.menu />}
        <span className="font-bold">{"menu"}</span>
      </motion.button>
      
      {showMobileMenu && items && (
      <MobileNav 
        items={items}
        onLinkClick={() => setShowMobileMenu(false)}
      >
        {children}
      </MobileNav>
    )}
    </div>
  );
}
