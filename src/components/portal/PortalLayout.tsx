'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { SchoolId } from '@/lib/types';
import { schoolThemes } from '@/lib/schools';
import { getSession, clearSession } from '@/lib/storage';
import { SchoolProvider, useSchool } from '@/components/school/SchoolProvider';
import { Menu, X } from 'lucide-react';

interface PortalLayoutProps {
  children: React.ReactNode;
  schoolId: SchoolId;
  role: 'student' | 'teacher' | 'parent' | 'admin';
}

const navItems = {
  student: [
    { name: 'Dashboard', href: '/student' },
    { name: 'Homework', href: '/student/homework' },
    { name: 'Exams', href: '/student/exams' },
    { name: 'Results', href: '/student/results' },
    { name: 'Attendance', href: '/student/attendance' },
    { name: 'Fees', href: '/student/fees' },
  ],
  teacher: [
    { name: 'Dashboard', href: '/teacher' },
    { name: 'Students', href: '/teacher/students' },
    { name: 'Homework', href: '/teacher/homework' },
    { name: 'Attendance', href: '/teacher/attendance' },
    { name: 'Exams', href: '/teacher/exams' },
  ],
  parent: [
    { name: 'Dashboard', href: '/parent' },
    { name: 'Children', href: '/parent/children' },
    { name: 'Attendance', href: '/parent/attendance' },
    { name: 'Results', href: '/parent/results' },
    { name: 'Fees', href: '/parent/fees' },
  ],
  admin: [
    { name: 'Dashboard', href: '/admin' },
    { name: 'Students', href: '/admin/students' },
    { name: 'Teachers', href: '/admin/teachers' },
    { name: 'Parents', href: '/admin/parents' },
    { name: 'Events', href: '/admin/events' },
    { name: 'Gallery', href: '/admin/gallery' },
    { name: 'News', href: '/admin/news' },
    { name: 'Settings', href: '/admin/settings' },
  ],
};

function PortalLayoutInner({ children, role }: Omit<PortalLayoutProps, 'schoolId'>) {
  const { schoolId, theme } = useSchool();
  const pathname = usePathname();
  const router = useRouter();
  const session = getSession(schoolId);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    clearSession(schoolId);
    router.push(`/${schoolId}/login`);
  };

  const items = navItems[role].map((item) => ({
    ...item,
    href: `/${schoolId}${item.href}`,
  }));

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  if (!session) {
    router.push(`/${schoolId}/login`);
    return null;
  }

  return (
    <div
      className="min-h-screen flex"
      style={{
        backgroundColor: theme.background,
        fontFamily: theme.fontFamily,
      }}
    >
      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 flex-shrink-0 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          background: theme.gradient,
        }}
      >
        <div className="p-4 sm:p-6">
          <Link href={`/${schoolId}`} className="flex items-center space-x-2 mb-6 sm:mb-8">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center text-xl sm:text-2xl font-bold" style={{ color: theme.primary }}>
              {theme.name[0]}
            </div>
            <span className="text-white font-bold text-base sm:text-lg">{theme.name}</span>
          </Link>

          <nav className="space-y-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsSidebarOpen(false)}
                className={`block px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-white/20 text-white'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 w-64 p-4 sm:p-6">
          <button
            onClick={handleLogout}
            className="w-full px-3 sm:px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors text-xs sm:text-sm font-medium"
          >
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto w-full">
        <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold" style={{ color: theme.text }}>
                  {role.charAt(0).toUpperCase() + role.slice(1)} Portal
                </h1>
                <p className="text-xs sm:text-sm text-gray-500">Welcome, {session.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{ background: theme.primary }}>
                {session.name[0]}
              </div>
            </div>
          </div>
        </header>

        <div className="p-4 sm:p-6">{children}</div>
      </main>
    </div>
  );
}

export const PortalLayout: React.FC<PortalLayoutProps> = ({ children, schoolId, role }) => {
  return (
    <SchoolProvider schoolId={schoolId}>
      <PortalLayoutInner role={role}>{children}</PortalLayoutInner>
    </SchoolProvider>
  );
};
