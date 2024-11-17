"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useMenuColor } from '@/context/MenuContext'; // Import the context

const Menu = () => {
  const { menuIsDark } = useMenuColor(); // Access the context
  console.log({menukooni : menuIsDark})

  return (
    <nav className={`shadow-md py-4 fixed w-full z-10 ${menuIsDark ? ' text-white' : 'bg-white text-gray-800'}`}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src={menuIsDark ? "/Logo.svg" : "/LogoDark.svg"} alt="menu logo" width={36} height={35} />
          <div className="text-xl font-semibold">KOPRU</div>
        </div>

        {/* Menu Items */}
        <ul className="flex items-center space-x-8">
          {['Home', 'Sustainability', 'Commodities'].map((item, index) => (
            <li key={index}>
              <Link href={`/${item === 'Home' ? '' : item}`} className="hover:text-blue-500">
                {item}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/Office" className={`border w-32 inline-block text-center border-gray-400 ${menuIsDark ? 'text-white' : 'text-gray-800'} px-4 py-2 rounded-md hover:bg-gray-100 hover:text-gray-800`}>
              Office
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
