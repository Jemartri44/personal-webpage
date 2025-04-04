"use client"

import { Norican } from "next/font/google";
import Link from "next/link";
import * as React from "react";

import { siteConfig } from "@/config/site";
import { useLockBody } from "@/hooks/use-lock-body";
import { cn } from "@/lib/utils";

import { useDownloadCV } from "@/utils/cv-download";
import { useTranslation } from "@/utils/client-translation";

interface MobileNavProps {
  items: any[];
  children?: React.ReactNode;
  onLinkClick?: () => void; // Add this prop
}

export function MobileNav({ items, children, onLinkClick }: MobileNavProps) {
  const { t } = useTranslation();
  const downloadCV = useDownloadCV();
  
  // Lock body scroll when menu is open
  useLockBody();

  // Helper to close menu after any navigation
  const handleNavigation = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <>
      {/* Backdrop - position this first in the DOM with lower z-index */}
      <div className="fixed inset-0 top-16 z-40 bg-background/80 backdrop-blur-sm md:hidden" />
      
      {/* Menu content - position this after the backdrop with higher z-index */}
      <div className="fixed inset-x-0 top-16 z-50 md:hidden">
        <div className="relative rounded-b-lg bg-background border border-border/50 p-4 text-foreground shadow-lg">
          <nav className="grid grid-flow-row auto-rows-max text-sm gap-2">
            {/* Home option with click handler */}
            <div className="border-b border-border/50 py-1">
              <Link
                href="/"
                className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:bg-accent"
                onClick={handleNavigation}
              >
                {t("navbar.home") || "Home"}
              </Link>
            </div>
            
            {/* Original navigation items with click handlers */}
            {items.map((item, index) => (
              <div key={index} className="border-b border-border/50 last:border-0 py-1">
                {item.titleKey === "navbar.cv" ? (
                  <button
                    onClick={() => {
                      downloadCV();
                      handleNavigation();
                    }}
                    className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:bg-accent"
                  >
                    {t(item.titleKey)}
                  </button>
                ) : (
                  <Link
                    href={item.disabled ? "#" : item.href}
                    className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:bg-accent"
                    onClick={handleNavigation}
                  >
                    {item.titleKey ? t(item.titleKey) : item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          {children}
        </div>
      </div>
    </>
  );
}