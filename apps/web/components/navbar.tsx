"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, Brain, Trophy, ExternalLink } from "lucide-react";
import { Button } from "components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "components/ui/sheet";
import { ConnectButton } from "components/connect-button";

const navLinks = [
  { name: "Home", href: "/", icon: Zap },
  // { name: "Play", href: "/play", icon: Brain },
  // { name: "Tournaments", href: "/tournaments", icon: Trophy },
  {
    name: "Docs",
    href: "https://docs.celo.org",
    external: true,
    icon: ExternalLink,
  },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/70 shadow-sm">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            {/* Mobile Sheet Content */}
            <SheetContent
              side="left"
              className="w-[85vw] max-w-sm p-0 bg-white/95"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-md">
                    <Brain className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="font-bold text-lg">Quiz Arena</span>
                    <p className="text-xs text-muted-foreground">
                      Powered by Celo
                    </p>
                  </div>
                </div>

                <SheetClose asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-full hover:bg-destructive/10 hover:text-destructive"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </SheetClose>
              </div>

              {/* Animated Nav Links */}
              <nav className="flex flex-col gap-2 px-4 py-4">
                <AnimatePresence>
                  {navLinks.map((link, i) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;

                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <SheetClose asChild>
                          <Link
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={
                              link.external ? "noopener noreferrer" : undefined
                            }
                            className={`flex items-center gap-4 px-4 py-3 text-base font-medium rounded-xl transition-all group ${
                              isActive
                                ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                                : "text-foreground/80 hover:bg-primary/10"
                            }`}
                          >
                            <div
                              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                                isActive
                                  ? "bg-primary-foreground/20"
                                  : "bg-muted/40 group-hover:bg-primary/20"
                              }`}
                            >
                              <Icon
                                className={`h-5 w-5 ${
                                  isActive
                                    ? "text-primary-foreground"
                                    : "text-foreground group-hover:text-primary"
                                }`}
                              />
                            </div>
                            <span>{link.name}</span>
                            {link.external && (
                              <ExternalLink className="h-4 w-4 opacity-50" />
                            )}
                          </Link>
                        </SheetClose>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </nav>

              {/* Mobile Connect Section */}
              <div className="p-4 border-t">
                <ConnectButton />
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity group"
          >
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Brain className="h-5 w-5 text-primary" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg leading-tight block">
                Quiz Arena
              </span>
              <span className="text-[10px] text-muted-foreground leading-tight">
                Celo Edition
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all relative group ${
                  isActive
                    ? "text-primary bg-primary/10 font-semibold"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
              >
                <Icon
                  className={`h-4 w-4 ${
                    isActive
                      ? "text-primary"
                      : "opacity-60 group-hover:opacity-100"
                  }`}
                />
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeLink"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            );
          })}

          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-border/50">
            <ConnectButton />
          </div>
        </nav>
      </div>
    </header>
  );
}
