'use client';

import React from 'react';
import { SchoolId } from '@/lib/types';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { Card, CardContent } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { getSchoolData } from '@/lib/data';
import { getSession } from '@/lib/storage';
import { useSchool } from '@/components/school/SchoolProvider';

function StudentAttendance() {
  const { schoolId, theme } = useSchool();
  const session = getSession(schoolId);
  const attendance = getSchoolData(schoolId as SchoolId, 'attendance');

  const studentAttendance = attendance.filter((a: any) => a.studentId === session?.userId);

  const tableData = studentAttendance.map((a: any) => [
    a.date,
    a.status.charAt(0).toUpperCase() + a.status.slice(1),
  ]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6" style={{ color: theme.text }}>Attendance Record</h2>
      <Card>
        <CardContent className="p-0">
          <Table
            headers={['Date', 'Status']}
            data={tableData}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default function Page({ params }: { params: { schoolId: SchoolId } }) {
  return (
    <PortalLayout schoolId={params.schoolId} role="student">
      <StudentAttendance />
    </PortalLayout>
  );
}
