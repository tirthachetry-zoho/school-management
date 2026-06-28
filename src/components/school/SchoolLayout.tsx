'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SchoolId, SchoolTheme } from '@/lib/types';
import { schoolThemes, schoolSettings } from '@/lib/schools';

interface SchoolLayoutProps {
  children: React.ReactNode;
  schoolId: SchoolId;
}

export const SchoolLayout: React.FC<SchoolLayoutProps> = ({ children, schoolId }) => {
  const pathname = usePathname();
  const theme = schoolThemes[schoolId];
  const settings = schoolSettings[schoolId];

  const publicNavItems = [
    { name: 'Home', href: `/${schoolId}` },
    { name: 'About', href: `/${schoolId}/about` },
    { name: 'Admissions', href: `/${schoolId}/admissions` },
    { name: 'Academics', href: `/${schoolId}/academics` },
    { name: 'Faculty', href: `/${schoolId}/faculty` },
    { name: 'Gallery', href: `/${schoolId}/gallery` },
    { name: 'Contact', href: `/${schoolId}/contact` },
  ];

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: theme.background,
        fontFamily: theme.fontFamily,
      }}
    >
      <nav
        className="sticky top-0 z-50 shadow-lg"
        style={{
          background: theme.gradient,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href={`/${schoolId}`} className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-2xl font-bold" style={{ color: theme.primary }}>
                {theme.name[0]}
              </div>
              <span className="text-white font-bold text-xl">{theme.name}</span>
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              {publicNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-white/20 text-white'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <Link
                href={`/${schoolId}/login`}
                className="px-4 py-2 bg-white text-sm font-medium rounded-lg hover:bg-opacity-90 transition-colors"
                style={{ color: theme.primary }}
              >
                Login
              </Link>
            </div>

            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer
        className="mt-auto"
        style={{
          background: theme.gradient,
        }}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div>
              <h3 className="font-bold text-lg mb-4">{theme.name}</h3>
              <p className="text-white/80 text-sm">{settings.motto}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <p className="text-white/80 text-sm">{settings.address}</p>
              <p className="text-white/80 text-sm">{settings.phone}</p>
              <p className="text-white/80 text-sm">{settings.email}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <Link href={`/${schoolId}/admissions`} className="block text-white/80 hover:text-white">
                  Admissions
                </Link>
                <Link href={`/${schoolId}/academics`} className="block text-white/80 hover:text-white">
                  Academics
                </Link>
                <Link href={`/${schoolId}/contact`} className="block text-white/80 hover:text-white">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
            © {new Date().getFullYear()} {theme.name}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
