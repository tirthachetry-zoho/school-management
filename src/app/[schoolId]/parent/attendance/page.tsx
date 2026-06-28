'use client';

import React from 'react';
import { SchoolId } from '@/lib/types';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { Card, CardContent } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { getSchoolData } from '@/lib/data';
import { getSession } from '@/lib/storage';
import { useSchool } from '@/components/school/SchoolProvider';

function ParentAttendance() {
  const { schoolId, theme } = useSchool();
  const session = getSession(schoolId);
  const parents = getSchoolData(schoolId as SchoolId, 'parents');
  const students = getSchoolData(schoolId as SchoolId, 'students');
  const attendance = getSchoolData(schoolId as SchoolId, 'attendance');

  const parent = parents.find((p: any) => p.id === session?.userId);
  const parentChildren = students.filter((s: any) => parent?.childrenIds.includes(s.id));
  const childrenAttendance = attendance.filter((a: any) => parent?.childrenIds.includes(a.studentId));

  const tableData = childrenAttendance.map((a: any) => {
    const student = students.find((s: any) => s.id === a.studentId);
    return [
      student ? `${student.firstName} ${student.lastName}` : a.studentId,
      a.date,
      a.status.charAt(0).toUpperCase() + a.status.slice(1),
    ];
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6" style={{ color: theme.text }}>Children's Attendance</h2>
      <Card>
        <CardContent className="p-0">
          <Table
            headers={['Child', 'Date', 'Status']}
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
    <PortalLayout schoolId={schoolId} role="parent">
      <ParentAttendance />
    </PortalLayout>
  );
}
