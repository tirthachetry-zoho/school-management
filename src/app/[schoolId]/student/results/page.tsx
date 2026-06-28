'use client';

import React from 'react';
import { SchoolId } from '@/lib/types';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { Card, CardContent } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { getSchoolData } from '@/lib/data';
import { getSession } from '@/lib/storage';
import { useSchool } from '@/components/school/SchoolProvider';

function StudentResults() {
  const { schoolId, theme } = useSchool();
  const session = getSession(schoolId);
  const results = getSchoolData(schoolId as SchoolId, 'results');

  const studentResults = results.filter((r: any) => r.studentId === session?.userId);

  const tableData = studentResults.map((r: any) => [
    r.subject,
    r.marksObtained.toString(),
    r.totalMarks.toString(),
    `${Math.round((r.marksObtained / r.totalMarks) * 100)}%`,
    r.grade,
  ]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6" style={{ color: theme.text }}>Exam Results</h2>
      <Card>
        <CardContent className="p-0">
          <Table
            headers={['Subject', 'Marks Obtained', 'Total Marks', 'Percentage', 'Grade']}
            data={tableData}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default function Page({ params }: { params: Promise<{ schoolId: SchoolId }> }) {
  const { schoolId } = React.use(params);
  return (
    <PortalLayout schoolId={schoolId} role="student">
      <StudentResults />
    </PortalLayout>
  );
}
