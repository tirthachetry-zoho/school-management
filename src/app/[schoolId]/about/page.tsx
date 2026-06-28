'use client';

import React from 'react';
import { SchoolId } from '@/lib/types';
import { SchoolProvider, useSchool } from '@/components/school/SchoolProvider';
import { SchoolLayout } from '@/components/school/SchoolLayout';
import { Card, CardContent } from '@/components/ui/Card';

function AboutPage() {
  const { theme, settings, website } = useSchool();

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center" style={{ color: theme.text }}>
            About {theme.name}
          </h1>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary }}>
              Our Story
            </h2>
            <p className="text-lg mb-4" style={{ color: theme.textSecondary }}>
              {website.aboutContent}
            </p>
            <p className="text-lg" style={{ color: theme.textSecondary }}>
              Since our establishment in {settings.establishedYear}, we have been committed to
              providing exceptional education that prepares students for success in an ever-changing world.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary }}>
              Mission & Vision
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent>
                  <h3 className="font-bold text-lg mb-2">Mission</h3>
                  <p style={{ color: theme.textSecondary }}>{website.missionStatement}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h3 className="font-bold text-lg mb-2">Vision</h3>
                  <p style={{ color: theme.textSecondary }}>{website.visionStatement}</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary }}>
              School Information
            </h2>
            <Card>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Principal</h4>
                    <p style={{ color: theme.textSecondary }}>{settings.principalName}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Academic Year</h4>
                    <p style={{ color: theme.textSecondary }}>{settings.academicYear}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Total Students</h4>
                    <p style={{ color: theme.textSecondary }}>{settings.totalStudents}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Total Teachers</h4>
                    <p style={{ color: theme.textSecondary }}>{settings.totalTeachers}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-semibold mb-2">Address</h4>
                    <p style={{ color: theme.textSecondary }}>{settings.address}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Phone</h4>
                    <p style={{ color: theme.textSecondary }}>{settings.phone}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Email</h4>
                    <p style={{ color: theme.textSecondary }}>{settings.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary }}>
              Our Motto
            </h2>
            <div
              className="text-center py-8 rounded-lg"
              style={{ backgroundColor: theme.surface, border: `2px solid ${theme.primary}` }}
            >
              <p className="text-2xl font italic" style={{ color: theme.primary }}>
                "{settings.motto}"
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default function Page({ params }: { params: { schoolId: SchoolId } }) {
  return (
    <SchoolProvider schoolId={params.schoolId}>
      <SchoolLayout schoolId={params.schoolId}>
        <AboutPage />
      </SchoolLayout>
    </SchoolProvider>
  );
}
