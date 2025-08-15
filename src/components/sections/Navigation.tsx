"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronDown,
  Menu,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    isDropdown: true,
    items: [
      { label: "Business Social Media Management", href: "#" },
      { label: "Search Engine Optimization & Marketing", href: "#" },
      { label: "Brand Reputation Management", href: "#" },
      { label: "Email Marketing", href: "#" },
      { label: "Graphic Design", href: "#" },
      { label: "Web Development", href: "#" },
    ],
  },
  { label: "Plans & Pricing", href: "#" },
  { label: "AI Writer", href: "#", isActive: true },
  {
    label: "About",
    isDropdown: true,
    items: [
      { label: "AntsQ Colony", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", href: "https://web.facebook.com/people/Antsq_media/100088118868015/?mibextid=LQQJ4d", Icon: Facebook },
  { name: "Twitter", href: "https://twitter.com/antsq4smm", Icon: Twitter },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/antsq/", Icon: Linkedin },
  { name: "Instagram", href: "https://www.instagram.com/antsq_media/", Icon: Instagram },
];

const DesktopNavLinks = () => (
    <nav className="flex items-center space-x-8">
      {navItems.map((item) =>
        item.isDropdown ? (
          <DropdownMenu key={item.label}>
            <DropdownMenuTrigger asChild>
              <button className="relative flex items-center text-dark-gray hover:text-primary-red transition-colors text-base font-medium after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2 after:bg-primary-red after:transition-all after:duration-300 hover:after:w-full">
                {item.label}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {item.items?.map((subItem) => (
                <DropdownMenuItem key={subItem.label} asChild>
                  <Link href={subItem.href}>{subItem.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            key={item.label}
            href={item.href}
            className={`relative text-base font-medium transition-colors ${
              item.isActive
                ? "text-primary-red"
                : "text-dark-gray hover:text-primary-red after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2 after:bg-primary-red after:transition-all after:duration-300 hover:after:w-full"
            }`}
          >
            {item.label}
          </Link>
        )
      )}
    </nav>
);

const MobileNavLinks = () => (
    <nav className="flex flex-col space-y-6">
      {navItems.map((item) =>
        item.isDropdown ? (
            <DropdownMenu key={item.label}>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center justify-center text-dark-gray hover:text-primary-red transition-colors text-lg font-medium">
                {item.label}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {item.items?.map((subItem) => (
                <DropdownMenuItem key={subItem.label} asChild>
                  <Link href={subItem.href}>{subItem.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            key={item.label}
            href={item.href}
            className={`text-lg font-medium text-center transition-colors ${
              item.isActive ? "text-primary-red" : "text-dark-gray hover:text-primary-red"
            }`}
          >
            {item.label}
          </Link>
        )
      )}
    </nav>
);


const SocialIcons = () => (
  <div className="flex items-center space-x-3">
    {socialLinks.map(({ name, href, Icon }) => (
      <Link key={name} href={href} target="_blank" aria-label={name}>
        <Icon className="h-5 w-5 text-primary-red hover:text-coral-pink transition-colors" />
      </Link>
    ))}
  </div>
);

export default function Navigation() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:z-[9999] focus:top-4 focus:left-4 focus:bg-white focus:p-4 focus:rounded-md focus:shadow-lg">
        Skip to content
      </a>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSticky ? "bg-white/95 shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="https://antsq.com/wp-content/uploads/2022/09/22617_antsQ_mp_1-01-e1665622886899.png"
                alt="AntsQ Logo"
                width={130}
                height={47}
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
                <DesktopNavLinks />
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <Button asChild className="bg-primary-red hover:bg-[#a11f1f] text-white font-medium rounded-sm px-5 py-2.5 text-base">
                <Link href="#">Get Started</Link>
              </Button>
              <SocialIcons />
            </div>

            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6 text-dark-gray" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-white px-4 pt-10 pb-8 w-full max-w-sm">
                  <div className="flex flex-col h-full">
                    <div className="flex-grow flex flex-col items-center justify-center space-y-8">
                        <MobileNavLinks />
                    </div>
                    <div className="mt-8 space-y-6">
                        <Button asChild className="w-full bg-primary-red hover:bg-[#a11f1f] text-white font-medium rounded-sm py-3 text-base">
                            <Link href="#">Get Started</Link>
                        </Button>
                        <div className="flex justify-center">
                            <SocialIcons />
                        </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}