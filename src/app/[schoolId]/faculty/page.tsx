'use client';

import React from 'react';
import { SchoolId } from '@/lib/types';
import { SchoolProvider, useSchool } from '@/components/school/SchoolProvider';
import { SchoolLayout } from '@/components/school/SchoolLayout';
import { Card, CardContent } from '@/components/ui/Card';
import { getSchoolData } from '@/lib/data';

function FacultyPage() {
  const { schoolId, theme } = useSchool();
  const teachers = getSchoolData(schoolId as SchoolId, 'teachers');

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center" style={{ color: theme.text }}>
            Our Faculty
          </h1>

          <p className="text-lg text-center mb-12" style={{ color: theme.textSecondary }}>
            Meet our dedicated team of educators who inspire and guide our students
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map((teacher: any) => (
              <Card key={teacher.id}>
                <CardContent>
                  <div className="flex items-start mb-4">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mr-4"
                      style={{ background: theme.primary }}
                    >
                      {teacher.firstName[0]}{teacher.lastName[0]}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">
                        {teacher.firstName} {teacher.lastName}
                      </h3>
                      <p className="text-sm" style={{ color: theme.primary }}>
                        {teacher.subject}
                      </p>
                      <p className="text-xs text-gray-500">{teacher.department}</p>
                    </div>
                  </div>
                  <p className="text-sm mb-3" style={{ color: theme.textSecondary }}>
                    {teacher.bio}
                  </p>
                  <div className="text-xs text-gray-500">
                    <span className="font-semibold">Qualification:</span> {teacher.qualification}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page({ params }: { params: { schoolId: SchoolId } }) {
  return (
    <SchoolProvider schoolId={params.schoolId}>
      <SchoolLayout schoolId={params.schoolId}>
        <FacultyPage />
      </SchoolLayout>
    </SchoolProvider>
  );
}
