"use client";
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Header = () => {
  const path = usePathname(); // Get the current path

  return (
    <header className='p-6 px-10 flex justify-between shadow-sm fixed top-0 w-full z-10 bg-white'>
      <div className='flex gap-10 items-center'>
        <Image src="/assets/logo.svg" alt="Company Logo" width={40} height={40} />
        <ul className='hidden md:flex gap-10'>
          <li>
            <Link href="/about" className={`hover:text-primary font-medium text-sm transition-all ease-in-out ${path === '/about' ? 'text-primary' : ''}`}>
              For Sales
            </Link>
          </li>
          <li>
            <Link href="/rent" className={`hover:text-primary font-medium text-sm transition-all ease-in-out ${path === '/rent' ? 'text-primary' : ''}`}>
              For Rent
            </Link>
          </li>
          <li>
            <Link href="/agent-finder" className={`hover:text-primary font-medium text-sm transition-all ease-in-out ${path === '/agent-finder' ? 'text-primary' : ''}`}>
              Agent Finder
            </Link>
          </li>
        </ul>
      </div>
      <div className='flex gap-2'>
        <Button className="flex gap-2">
          <Plus className='h-5 w-5' />
          Post Your Ad
        </Button>
        <Button variant="outline">
          Login
        </Button>
      </div>
    </header>
  );
};

export default Header;
