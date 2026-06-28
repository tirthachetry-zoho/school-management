'use client';

import React from 'react';
import { SchoolId } from '@/lib/types';
import { SchoolProvider, useSchool } from '@/components/school/SchoolProvider';
import { SchoolLayout } from '@/components/school/SchoolLayout';
import { Card, CardContent } from '@/components/ui/Card';

function AcademicsPage() {
  const { theme, settings } = useSchool();

  const departments = [
    { name: 'STEM', subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science'] },
    { name: 'Humanities', subjects: ['English Literature', 'History', 'Geography', 'Philosophy'] },
    { name: 'Languages', subjects: ['English', 'Spanish', 'French', 'German'] },
    { name: 'Creative Arts', subjects: ['Visual Arts', 'Music', 'Drama', 'Design'] },
  ];

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center" style={{ color: theme.text }}>
            Academics
          </h1>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary }}>
              Academic Excellence
            </h2>
            <p className="text-lg" style={{ color: theme.textSecondary }}>
              At {settings.schoolName}, we offer a rigorous and comprehensive curriculum designed to
              challenge students and foster intellectual growth. Our academic programs are structured
              to prepare students for higher education and future careers.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6" style={{ color: theme.primary }}>
              Departments & Subjects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {departments.map((dept) => (
                <Card key={dept.name}>
                  <CardContent>
                    <h3 className="font-bold text-lg mb-3" style={{ color: theme.primary }}>
                      {dept.name}
                    </h3>
                    <ul className="space-y-1">
                      {dept.subjects.map((subject) => (
                        <li key={subject} style={{ color: theme.textSecondary }}>
                          • {subject}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6" style={{ color: theme.primary }}>
              Academic Calendar {settings.academicYear}
            </h2>
            <Card>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">First Term</span>
                    <span style={{ color: theme.textSecondary }}>September - December</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Winter Break</span>
                    <span style={{ color: theme.textSecondary }}>December - January</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Second Term</span>
                    <span style={{ color: theme.textSecondary }}>January - April</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Spring Break</span>
                    <span style={{ color: theme.textSecondary }}>April</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Third Term</span>
                    <span style={{ color: theme.textSecondary }}>April - June</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6" style={{ color: theme.primary }}>
              Assessment & Grading
            </h2>
            <Card>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold">A+</span>
                    <span className="ml-4" style={{ color: theme.textSecondary }}>90-100% (Outstanding)</span>
                  </div>
                  <div>
                    <span className="font-semibold">A</span>
                    <span className="ml-4" style={{ color: theme.textSecondary }}>85-89% (Excellent)</span>
                  </div>
                  <div>
                    <span className="font-semibold">B</span>
                    <span className="ml-4" style={{ color: theme.textSecondary }}>70-84% (Very Good)</span>
                  </div>
                  <div>
                    <span className="font-semibold">C</span>
                    <span className="ml-4" style={{ color: theme.textSecondary }}>60-69% (Good)</span>
                  </div>
                  <div>
                    <span className="font-semibold">D</span>
                    <span className="ml-4" style={{ color: theme.textSecondary }}>50-59% (Satisfactory)</span>
                  </div>
                  <div>
                    <span className="font-semibold">F</span>
                    <span className="ml-4" style={{ color: theme.textSecondary }}>Below 50% (Needs Improvement)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary }}>
              Extra-Curricular Activities
            </h2>
            <p className="text-lg" style={{ color: theme.textSecondary }}>
              We believe in holistic development. Students participate in various activities including
              sports, arts, music, debate clubs, science fairs, and community service programs.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default function Page({ params }: { params: Promise<{ schoolId: SchoolId }> }) {
  const { schoolId } = React.use(params);
  return (
    <SchoolProvider schoolId={schoolId}>
      <SchoolLayout schoolId={schoolId}>
        <AcademicsPage />
      </SchoolLayout>
    </SchoolProvider>
  );
}
