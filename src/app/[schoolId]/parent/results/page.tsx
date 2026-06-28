'use client';

import React from 'react';
import { SchoolId } from '@/lib/types';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { Card, CardContent } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { getSchoolData } from '@/lib/data';
import { getSession } from '@/lib/storage';
import { useSchool } from '@/components/school/SchoolProvider';

function ParentResults() {
  const { schoolId, theme } = useSchool();
  const session = getSession(schoolId);
  const parents = getSchoolData(schoolId as SchoolId, 'parents');
  const students = getSchoolData(schoolId as SchoolId, 'students');
  const results = getSchoolData(schoolId as SchoolId, 'results');

  const parent = parents.find((p: any) => p.id === session?.userId);
  const parentChildren = students.filter((s: any) => parent?.childrenIds.includes(s.id));
  const childrenResults = results.filter((r: any) => parent?.childrenIds.includes(r.studentId));

  const tableData = childrenResults.map((r: any) => {
    const student = students.find((s: any) => s.id === r.studentId);
    return [
      student ? `${student.firstName} ${student.lastName}` : r.studentId,
      r.subject,
      r.marksObtained.toString(),
      r.totalMarks.toString(),
      `${Math.round((r.marksObtained / r.totalMarks) * 100)}%`,
      r.grade,
    ];
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6" style={{ color: theme.text }}>Children's Results</h2>
      <Card>
        <CardContent className="p-0">
          <Table
            headers={['Child', 'Subject', 'Marks Obtained', 'Total Marks', 'Percentage', 'Grade']}
            data={tableData}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default function Page({ params }: { params: { schoolId: SchoolId } }) {
  return (
    <PortalLayout schoolId={params.schoolId} role="parent">
      <ParentResults />
    </PortalLayout>
  );
}
