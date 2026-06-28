'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { SchoolId } from '@/lib/types';
import { schoolThemes } from '@/lib/schools';
import { getSession, clearSession } from '@/lib/storage';
import { SchoolProvider, useSchool } from '@/components/school/SchoolProvider';

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
      <aside
        className="w-64 flex-shrink-0"
        style={{
          background: theme.gradient,
        }}
      >
        <div className="p-6">
          <Link href={`/${schoolId}`} className="flex items-center space-x-2 mb-8">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-2xl font-bold" style={{ color: theme.primary }}>
              {theme.name[0]}
            </div>
            <span className="text-white font-bold text-lg">{theme.name}</span>
          </Link>

          <nav className="space-y-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
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

        <div className="absolute bottom-0 left-0 w-64 p-6">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors text-sm font-medium"
          >
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold" style={{ color: theme.text }}>
                {role.charAt(0).toUpperCase() + role.slice(1)} Portal
              </h1>
              <p className="text-sm text-gray-500">Welcome, {session.name}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white" style={{ background: theme.primary }}>
                {session.name[0]}
              </div>
            </div>
          </div>
        </header>

        <div className="p-6">{children}</div>
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
