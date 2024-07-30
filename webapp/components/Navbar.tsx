import Image from "next/image";
import { BasejumpUserSession, SignedIn, SignedOut } from "@usebasejump/next";
import UserProfileButton from "./basejump/UserAccountButton";
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

export const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Only appear until the mobile menu
  const menuItems: string[] = ["Pricing"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src="/logo.png" width={50} height={50} alt="Bucketscan Logo" />
          <p className="font-bold text-inherit">Bucketscan</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/pricing">
            Pricing
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <BasejumpUserSession>
            <SignedIn>
              <UserProfileButton />
            </SignedIn>
            <SignedOut>
              <Link href="/login">Login</Link>
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
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
