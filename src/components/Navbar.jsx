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

      {/* Center Navigation Pills */}
      <div className=" hidden lg:flex bg-white/90 backdrop-blur-md rounded-full px-2 py-1 shadow-lg border border-gray-100">
        <div className="flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveTab(item.name)}
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

      <div className="hidden lg:flex bg-white/90 rounded-full px-2 py-1 shadow-lg border border-gray-100   cursor-pointer">
        <div className="p-2 rounded-full flex items-center  justify-center hover:bg-gray-50">
          <a href="mailto:rathinakumar825@gmail.com" className="no-underline">
            <button className="text-gray-900 text-sm flex gap-1.5 justify-center items-center cursor-pointer">
              <Coffee className="text-gray-900 w-5 h-5" />
              Hire Me
            </button>
          </a>
        </div>
      </div>

      {/* Mobile Menu Button / Desktop Menu Icon */}
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
            className="bg-white w-30 h-60 p-0 rounded-2xl right-5 top-10"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Navigation */}
              <div className="flex flex-col p-2 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      setActiveTab(item.name);
                      setIsOpen(false);
                    }}
                    className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      activeTab === item.name
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
