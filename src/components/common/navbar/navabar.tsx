"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // <-- import this
import { Menu, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Container from "@/components/shared/Container";
import { useDispatch } from "react-redux";
import { openLogoutModal } from "@/redux/features/logoutModalSlice";

export function Navbar() {
  const [hasScroll, setHasScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // <-- get current path

  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      setHasScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "For Employers", href: "/for-employers" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b border-border bg-bg-white transition-shadow duration-300 ${
        hasScroll ? "shadow-sm" : ""
      }`}
    >
      <Container>
        <div className="flex h-auto py-4 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex flex-col items-center text-[#2C3E50]">
              <Image src="/logo-icon.png" alt="logo" width={65} height={65} />
              <span className="font-semibold text-base">DMVJOBS.ai</span>
              <span className="text-[5px]">
                Empowering Careers — Strengthening the DMV
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-base text-[#2C3E50] hover:text-secondary transition-colors ${
                  pathname === item.href ? "text-secondary" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Signup Button */}
            <Link
              href="/auth"
              className="hidden sm:inline-flex bg-secondary hover:bg-secondary/90 text-white py-[10px] px-4 text-base rounded-md transition cursor-pointer"
            >
              Signup
            </Link>
            <Link
              href="/auth/login"
              className="hidden sm:inline-flex bg-secondary hover:bg-secondary/90 text-white py-[10px] px-4 text-base rounded-md transition cursor-pointer"
            >
              Sign In
            </Link>
            {/* Log Out */}
            {/* <Button
              variant="destructive"
              onClick={() => dispatch(openLogoutModal())}>
              Log out
            </Button> */}
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="hidden sm:flex gap-2 text-foreground hover:bg-muted px-3 py-[10px] rounded-md transition cursor-pointer">
                  <Globe size={24} />
                  <span>English</span>
                  <IoMdArrowDropdown size={24} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuItem className="text-md">English</DropdownMenuItem>
                <DropdownMenuItem className="text-md">Spanish</DropdownMenuItem>
                <DropdownMenuItem className="text-md">French</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu - Sheet Drawer */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-muted">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 p-0">
                <div className="flex flex-col h-full">
                  {/* Sheet Header */}
                  <div className="border-b border-border p-4">
                    <Link
                      href="/"
                      className="flex items-center gap-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <Image
                        src="/logo-icon.png"
                        alt="logo"
                        width={50}
                        height={50}
                      />
                      <span className="text-sm font-semibold text-caption">
                        DMV.JOBS.ai
                      </span>
                    </Link>
                  </div>

                  {/* Sheet Navigation Items */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={`block px-3 py-2 text-md font-medium text-[#2C3E50] hover:bg-secondary hover:text-white rounded-md transition-colors ${
                          pathname === item.href
                            ? "font-bold bg-secondary text-white"
                            : ""
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  {/* Sheet Footer */}
                  <div className="border-t border-border px-6 py-4">
                    <Link
                      href="/auth"
                      className="min-w-full bg-secondary block hover:bg-secondary/90 text-center text-md text-white p-2 rounded mb-3"
                    >
                      Signup
                    </Link>
                    {/* Log Out */}
                    <Button
                      variant="destructive"
                      onClick={() => dispatch(openLogoutModal())}
                    >
                      Log out
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full gap-2 bg-transparent text-md"
                        >
                          <Globe className="h-4 w-4" />
                          <span>English</span>
                          <ChevronDown className="h-4 w-4 ml-auto" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="center" className="w-56">
                        <DropdownMenuItem className="text-md">
                          English
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-md">
                          Spanish
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-md">
                          French
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </nav>
  );
}
