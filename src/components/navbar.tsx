'use client';

import { HomeIcon, PlusIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { use, useState } from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const links = [
  { name: 'Accueil', href: '/', icon: HomeIcon },
  { name: 'Nouvelle Partie', href: '/newgame', icon: PlusIcon },
  { name: 'À propos', href: '/about', icon: InformationCircleIcon },
];

const Navbar = () => {
  var path=usePathname();
  const [currentPath, setCurrentPath] = useState(path);

  return (
    <>
      <nav className="bg-blue-700 p-4">
        <div className="mx-auto">
          <ul className="flex">
            <Link href="/">
            <Image 
            src="/icone.png" 
            alt="logo" 
            width="50" 
            height="50" 
            className='border-2 border-white rounded-full bg-white mr-9' 
            onMouseLeave={() => setCurrentPath(path)}
            />
            </Link>
            {links.map((link) => (
              <li key={link.name}>
                <div className={clsx('px-4 py-2 border-r transition-colors duration-500 hover:border-blue-700 hover:bg-white', currentPath === link.href && 'border-blue-700 bg-white')}>
                  <Link href={link.href}>
                    <span
                      className={clsx("flex font-bold transition-colors duration-500 hover:text-blue-700 hover:bg-white", currentPath === link.href && 'text-blue-700 bg-white')}
                      onMouseEnter={() => setCurrentPath(link.href)}
                      onMouseLeave={() => setCurrentPath(path)}
                    >
                      <link.icon className="w-6" />
                      <p className="ml-4 hidden md:block">{link.name}</p>
                    </span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <br />
    </>
  );
};

export default Navbar;
