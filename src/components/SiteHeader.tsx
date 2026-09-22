"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { createPageUrl } from "@/utils/createPageUrl";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar, ChevronDown, Menu, Phone } from "lucide-react";
import { navigationItems } from "@/config/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-white/70 backdrop-blur-md border-b border-white/70 sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-0 sm:px-0 lg:px-0">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0 cursor-pointer">
            <Image
              src="/every.png"
              alt="Everything Auto - Expert Auto Repair in Franklin Square, NY"
              width={200}
              height={80}
              className="header-logo"
            />
          </Link>

          <nav className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-6 xl:space-x-8 2xl:space-x-10">
              {navigationItems.map((item) => {
                const targetPath = `/${item.path.toLowerCase()}`;
                const isActive =
                  pathname === targetPath || (item.path === "/" && pathname === "/");
                return (
                  <div key={item.name} className="relative group">
                    <Link
                      href={createPageUrl(item.path)}
                      className={`font-semibold transition-colors py-2 flex items-center space-x-1.5 text-sm xl:text-base 2xl:text-lg ${
                        isActive ? "text-[var(--color-primary)]" : ""
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.submenu && (
                        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                      )}
                    </Link>
                    {item.submenu && (
                      <div
                        className="absolute left-1/2 -translate-x-1/2 w-64 bg-white shadow-2xl rounded-lg py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-[var(--color-border)]"
                        style={{ top: "100%", minWidth: "200px" }}
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={createPageUrl(subItem.path)}
                            className="block px-5 py-2.5 transition-colors duration-200 text-black hover:text-white hover:bg-[var(--color-primary)]"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>

          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <a href="tel:516-775-9724">
              <Button
                style={{
                  boxShadow:
                    "inset 0 -2px 5px rgba(249, 195, 195, 0.65), inset 0 2px 5px rgba(19, 19, 19, 0.4), 0 2px 5px rgba(0, 0, 0, 0.11)",
                }}
                className="action-button action-button-call px-4 py-2 text-sm xl:px-6 xl:py-3 xl:text-base flex items-center"
              >
                <Phone className="w-4 h-4 mr-1" />
                CALL NOW
              </Button>
            </a>
            <a href="https://myalp.io/nqc45n" target="_blank" rel="noopener noreferrer">
              <Button
                style={{
                  boxShadow:
                    "inset 0 -2px 5px rgba(138, 193, 252, 0.57), inset 0 2px 5px rgba(19, 19, 19, 0.4), 0 2px 5px rgba(0, 0, 0, 0.11)",
                }}
                className="action-button action-button-book px-4 py-2 text-sm xl:px-6 xl:py-3 xl:text-base"
              >
                <Calendar className="w-4 h-4 mr-1" />
                Book Appointment
              </Button>
            </a>
          </div>

          <div className="lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-80">
                <nav className="flex flex-col space-y-2 mt-8">
                  <Accordion type="single" collapsible className="w-full">
                    {navigationItems.map((item) =>
                      item.submenu ? (
                        <AccordionItem value={item.name} key={item.name}>
                          <AccordionTrigger className="font-bold text-lg hover:no-underline text-gray-900">
                            {item.name}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col space-y-1 pl-4">
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={createPageUrl(subItem.path)}
                                  className="block py-2 text-gray-600 hover:text-[var(--color-primary)]"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <Link
                          key={item.name}
                          href={createPageUrl(item.path)}
                          className={`block py-3 font-bold text-lg border-b ${
                            pathname === `/${item.path.toLowerCase()}` ||
                            (item.path === "/" && pathname === "/")
                              ? "text-[var(--color-primary)]"
                              : "text-gray-800 hover:text-[var(--color-primary)]"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                  </Accordion>
                </nav>
                <div className="mt-8 space-y-3">
                  <a href="tel:516-775-9724" className="w-full block">
                    <Button className="action-button action-button-call w-full px-4 py-2 text-lg xl:px-6 xl:py-3 flex items-center justify-center space-x-1">
                      <Phone className="w-4 h-4" />
                      <span>(516) 775-9724</span>
                    </Button>
                  </a>
                  <a
                    href="https://myalp.io/nqc45n"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block"
                  >
                    <Button className="action-button action-button-book w-full px-4 py-2 text-lg xl:px-6 xl:py-3">
                      <Calendar className="w-4 h-4" />
                      Book Appointment
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;


