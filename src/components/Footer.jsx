import React from 'react';
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 text-white py-8">
      <div className="flex flex-col items-center gap-2">
        <TextHoverEffect text="RATHINAKUMAR"/>
        <p className="text-sm text-zinc-400">Full Stack Web Developer</p>
        <p className="text-xs text-zinc-500 mt-2">&copy; {new Date().getFullYear()} Rathinakumar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
