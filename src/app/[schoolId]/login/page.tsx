'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SchoolId } from '@/lib/types';
import { SchoolProvider, useSchool } from '@/components/school/SchoolProvider';
import { SchoolLayout } from '@/components/school/SchoolLayout';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { setSession } from '@/lib/storage';
import { getSchoolData } from '@/lib/data';

function LoginPage() {
  const { schoolId, theme, settings } = useSchool();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Get school-specific background image
  const gallery = getSchoolData(schoolId as SchoolId, 'gallery');
  const backgroundImage = gallery.length > 0 ? gallery[0].url : 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&h=1080&fit=crop';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    await new Promise(resolve => setTimeout(resolve, 500));

    if (username === 'admin' && password === 'admin123') {
      setSession(schoolId as SchoolId, {
        schoolId: schoolId,
        userId: 'admin',
        role: 'admin',
        name: 'Administrator',
        email: `admin@${theme.id}.edu`,
        loginTime: new Date().toISOString(),
      });
      router.push(`/${schoolId}/admin`);
    } else if (username.startsWith('s') && password === 'student123') {
      const studentId = username;
      setSession(schoolId as SchoolId, {
        schoolId: schoolId,
        userId: studentId,
        role: 'student',
        name: 'Student',
        email: `${username}@student.${theme.id}.edu`,
        loginTime: new Date().toISOString(),
      });
      router.push(`/${schoolId}/student`);
    } else if (username.startsWith('t') && password === 'teacher123') {
      const teacherId = username;
      setSession(schoolId as SchoolId, {
        schoolId: schoolId,
        userId: teacherId,
        role: 'teacher',
        name: 'Teacher',
        email: `${username}@${theme.id}.edu`,
        loginTime: new Date().toISOString(),
      });
      router.push(`/${schoolId}/teacher`);
    } else if (username.startsWith('p') && password === 'parent123') {
      const parentId = username;
      setSession(schoolId as SchoolId, {
        schoolId: schoolId,
        userId: parentId,
        role: 'parent',
        name: 'Parent',
        email: `${username}@email.com`,
        loginTime: new Date().toISOString(),
      });
      router.push(`/${schoolId}/parent`);
    } else {
      setError('Invalid credentials');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-8 sm:py-12 md:py-16 px-4 relative">
      {/* Background Image with Light Opacity */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="School Background"
          className="w-full h-full object-cover"
          style={{ opacity: 0.15 }}
        />
      </div>
      
      <div className="w-full max-w-md relative z-10">
        <Card>
          <CardContent className="p-6 sm:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: theme.text }}>
                Login to {theme.name}
              </h1>
              <p className="text-sm sm:text-base" style={{ color: theme.textSecondary }}>
                Access your portal
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />

              {error && (
                <div className="text-red-600 text-sm">{error}</div>
              )}

              <Button
                type="submit"
                className="w-full"
                disabled={loading}
                style={{ background: theme.primary, color: 'white' }}
              >
                {loading ? 'Logging in...' : 'Login'}
              </Button>
            </form>

            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
              <p className="text-xs sm:text-sm text-gray-600 mb-2">Demo Credentials:</p>
              <div className="text-xs space-y-1 text-gray-500">
                <p>Admin: admin / admin123</p>
                <p>Student: s1 / student123</p>
                <p>Teacher: t1 / teacher123</p>
                <p>Parent: p1 / parent123</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function Page({ params }: { params: Promise<{ schoolId: SchoolId }> }) {
  const { schoolId } = React.use(params);
  return (
    <SchoolProvider schoolId={schoolId}>
      <SchoolLayout schoolId={schoolId}>
        <LoginPage />
      </SchoolLayout>
    </SchoolProvider>
  );
}
