'use client';

import React from 'react';
import { SchoolId } from '@/lib/types';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { Card, CardContent } from '@/components/ui/Card';
import { getSchoolData } from '@/lib/data';
import { getSession } from '@/lib/storage';
import { useSchool } from '@/components/school/SchoolProvider';

function StudentHomework() {
  const { schoolId, theme } = useSchool();
  const session = getSession(schoolId);
  const students = getSchoolData(schoolId as SchoolId, 'students');
  const homework = getSchoolData(schoolId as SchoolId, 'homework');

  const student = students.find((s: any) => s.id === session?.userId);
  const studentHomework = homework.filter((h: any) => h.grade === student?.grade);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6" style={{ color: theme.text }}>Homework Assignments</h2>
      <div className="grid grid-cols-1 gap-4">
        {studentHomework.map((hw: any) => (
          <Card key={hw.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg">{hw.title}</h3>
                  <p className="text-sm text-gray-500">{hw.subject}</p>
                </div>
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: hw.status === 'active' ? theme.primary + '20' : '#22c55e20',
                    color: hw.status === 'active' ? theme.primary : '#22c55e',
                  }}
                >
                  {hw.status}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{hw.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Assigned: {hw.assignedDate}</span>
                <span>Due: {hw.dueDate}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default function Page({ params }: { params: Promise<{ schoolId: SchoolId }> }) {
  const { schoolId } = React.use(params);
  return (
    <PortalLayout schoolId={schoolId} role="student">
      <StudentHomework />
    </PortalLayout>
  );
}
