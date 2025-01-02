"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "./container";

const NavBar = () => {
  const location = usePathname();
  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Nosotros",
      href: "/nosotros",
    },
    {
      name: "Características",
      href: "/caracteristicas",
    },
    {
      name: "Demo",
      href: "/demo",
    },
    {
      name: "Restaurantes",
      href: "/restaurantes",
    },
    {
      name: "Repartidor",
      href: "/repartidor",
    },
  ].map((item) => ({
    ...item,
    className:
      item.href == location
        ? "xs:max-lg:font-bold underline pointer-events-none text-dgreen lg:-translate-y-1 lg:px-2 lg:py-6"
        : "xs:max-lg:font-bold hover:font-bold transition-all text-black hover:-translate-y-2 lg:px-2 lg:py-6",
  }));

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', function(e) {
        if(e.key == 'Escape' && isOpen){
          setIsOpen(false)
        } 
    })
  })

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="">
    <div className="hidden lg:flex fixed -top-1 w-full z-[888]">
      <Container id="navbar" className="w-full max-w-screen-xl top-0 my-0 mb-12 flex justify-between items-center px-12 border border-[#dedede] subpixel-antialiased shadow-2xl rounded-b-xl bg-[#e5e5e5] navbar-box-shadow">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="M2Go Logo"
            loading="eager"
            width={60}
            height={60}
            className="my-2"
          />
        </Link>
          <div className="hidden lg:flex md:gap-8">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href} className={item.className}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="text-sm hidden lg:block rounded-lg bg-dgreen text-white cursor-pointer px-6 py-2 hover:scale-[1.05] hover:-translate-y-1 transition-all">
            <a href="https://app.manjar2go.com">
              Acceder
            </a>
          </div>
      </Container>
    </div>

    <Image
            src="/logo.png"
            alt="M2Go Logo"
            loading="eager"
            width={60}
            height={60}
            className="block lg:hidden fixed top-12 left-8 z-[100]"
          />

      <button
        onClick={toggleMenu}
        className="block lg:hidden fixed shadow-xl top-8 right-8 z-[100] p-2 rounded-md bg-dgreen text-white"
        aria-label="Toggle menu"
      >
        <Menu size={42} />
      </button>

      {/* Full-screen canvas */}
      <div
        className={`z-[9999] fixed inset-0 bg-white text-white overflow-hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Top-right close button */}

        {isOpen && (
          <button
            onClick={toggleMenu}
            className="absolute top-8 right-6 p-2 rounded-md text-muted z-[100]"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>
        )}

        {/* Menu options */}
        <ul className="flex flex-col items-center justify-center h-full text-2xl">
          {navItems.map((item, index) => {
            return (
              <li key={index} className="my-8 text-3xl font-bold" onClick={() => toggleMenu()}>
                <Link href={item.href} className={item.className}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
