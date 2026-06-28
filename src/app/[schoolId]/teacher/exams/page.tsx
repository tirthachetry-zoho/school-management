'use client';

import React from 'react';
import { SchoolId } from '@/lib/types';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { Card, CardContent } from '@/components/ui/Card';
import { getSchoolData } from '@/lib/data';
import { useSchool } from '@/components/school/SchoolProvider';

function TeacherExams() {
  const { schoolId, theme } = useSchool();
  const exams = getSchoolData(schoolId as SchoolId, 'exams');

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6" style={{ color: theme.text }}>Scheduled Exams</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {exams.map((exam: any) => (
          <Card key={exam.id}>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">{exam.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{exam.subject} - Grade {exam.grade}</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span className="font-medium">{exam.date}</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium">{exam.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Marks:</span>
                  <span className="font-medium">{exam.totalMarks}</span>
                </div>
                <div className="flex justify-between">
                  <span>Type:</span>
                  <span className="font-medium capitalize">{exam.type}</span>
                </div>
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
    <PortalLayout schoolId={schoolId} role="teacher">
      <TeacherExams />
    </PortalLayout>
  );
}
