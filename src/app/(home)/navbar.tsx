"use client";

import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavbarItemProps {
    href: string,
    children: React.ReactNode;
    isActive?: boolean;
};

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"],
    });

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
    return (
        <Button
            asChild
            variant="outline"
            className={cn(
                "rounded-full bg-transparent hover:bg-transparent hover:border-primary border-transparent px-3.5 text-lg",
                isActive && "bg-black text-white hover:bg-black hover:text-white"
                )}
        >
            <Link href={href}>
                {children}
            </Link>
        </Button>
    );
};

const navbarItems = [
    {href: "/", children: "Home"},
    {href: "/about", children: "About"},
    {href: "/features", children: "Features"},
    {href: "/Pricing", children: "Pricing"},
    {href: "/Contact", children: "Contact"}
];

export const Navbar = () => {
    const pathname = usePathname();

    return(
        <nav className="h-20 border-b flex justify-between font-medium bg-white">
            <Link href="/" className="pl-6 flex items-center">
                <span className={cn("text-5xl font-bold", poppins.className)}>
                    miloBazaar
                </span>
            </Link>

            <div className="items-center gap-4 hidden lg:flex">
                {navbarItems.map((item) => (
                    <NavbarItem
                    key={item.href}
                    href={item.href}
                    isActive={pathname === item.href}
                    >
                    {item.children}
                    </NavbarItem>
                ))}
            </div>
        </nav>
    );
};
