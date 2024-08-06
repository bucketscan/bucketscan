import Image from "next/image";
import { BasejumpUserSession, SignedIn, SignedOut } from "@usebasejump/next";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import React from "react";
import LogoutButton from "./Logout";

export const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Only appear until the mobile menu
  const menuItems: string[] = ["Pricing"];

  return (
    <Navbar
      isBordered
      position="sticky"
      className="bg-white shadow-md"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Link href="/">
          <NavbarBrand className="flex items-center gap-2">
            <Image
              src="/logo.png"
              width={40}
              height={40}
              alt="Bucketscan Logo"
            />
            <p className="font-bold text-xl text-blue-600">Bucketscan</p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item}>
            <Link
              color="primary"
              href={`/${item.toLowerCase()}`}
              className="text-lg"
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end" className="gap-4">
        <NavbarItem>
          <BasejumpUserSession>
            <SignedIn>
              <div className="flex items-center gap-2">
                <Link href="/dashboard" className="text-lg">
                  Dashboard
                </Link>
                <LogoutButton />
              </div>
            </SignedIn>
            <SignedOut>
              <Link href="/sign-in">
                <Button>Sign In</Button>
              </Link>
            </SignedOut>
          </BasejumpUserSession>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full text-lg"
              href={`/${item.toLowerCase()}`}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
