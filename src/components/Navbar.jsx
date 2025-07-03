"use client";

import React, { useState } from "react";
import { Menu, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Terminal } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle navigation click for both desktop and mobile
  const handleNavClick = (e, item) => {
    e.preventDefault(); // Prevent default anchor behavior
    setActiveTab(item.name);
    setIsOpen(false); // Close mobile menu

    // Handle smooth scrolling for hash links
    if (item.href.startsWith("#")) {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else if (item.href === "/") {
      // Handle home navigation
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex items-center justify-between px-6 max-w-7xl mx-auto">
      {/* Avatar/Logo */}
      <div className="bg-white/90 rounded-full p-2 shadow-lg border border-gray-100">
        <div className="w-12 h-6 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-50">
          <span className="text-black text-sm font-semibold flex">
            <Terminal />
          </span>
        </div>
      </div>

      {/* Center Navigation Pills - Desktop */}
      <div className="hidden lg:flex bg-white/90 backdrop-blur-md rounded-full px-2 py-1 shadow-lg border border-gray-100">
        <div className="flex items-center space-x-1">
          {navItems.map((item) => (
            
             <a key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item)}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === item.name
                  ? "bg-gray-100 text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Hire Me Button - Desktop */}
      <div className="hidden lg:flex bg-white/90 rounded-full px-2 py-1 shadow-lg border border-gray-100 cursor-pointer">
        <div className="p-2 rounded-full flex items-center justify-center hover:bg-gray-50">
          <a href="mailto:rathinakumar825@gmail.com" className="no-underline">
            <button className="text-gray-900 text-sm flex gap-1.5 justify-center items-center cursor-pointer">
              <Coffee className="text-gray-900 w-5 h-5" />
              Hire Me
            </button>
          </a>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="bg-white rounded-full p-2 me-2 shadow-lg flex lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0 hover:bg-gray-100 rounded-full"
            >
              <Menu className="h-5 w-5 text-gray-700" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-white w-80 h-auto p-0 rounded-2xl right-5 top-10"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Navigation */}
              <div className="flex flex-col p-4 space-y-2">
                {navItems.map((item) => (
                  
                   <a key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeTab === item.name
                        ? "bg-gray-100 text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
                
                {/* Mobile Hire Me Button */}
                <div className="pt-2 border-t border-gray-100 mt-2">
                  <a 
                    href="mailto:rathinakumar825@gmail.com" 
                    className="no-underline"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="px-3 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 flex items-center gap-1.5">
                      <Coffee className="w-4 h-4" />
                      Hire Me
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;