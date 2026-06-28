'use client';

import React from 'react';
import { SchoolId } from '@/lib/types';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { Card, CardContent } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { getSchoolData } from '@/lib/data';
import { useSchool } from '@/components/school/SchoolProvider';

function TeacherAttendance() {
  const { schoolId, theme } = useSchool();
  const students = getSchoolData(schoolId as SchoolId, 'students');
  const attendance = getSchoolData(schoolId as SchoolId, 'attendance');

  const tableData = students.map((s: any) => {
    const studentAttendance = attendance.filter((a: any) => a.studentId === s.id);
    const presentCount = studentAttendance.filter((a: any) => a.status === 'present').length;
    const rate = studentAttendance.length > 0 ? Math.round((presentCount / studentAttendance.length) * 100) : 0;
    return [
      `${s.firstName} ${s.lastName}`,
      s.grade,
      s.rollNumber,
      `${rate}%`,
    ];
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6" style={{ color: theme.text }}>Student Attendance Overview</h2>
      <Card>
        <CardContent className="p-0">
          <Table
            headers={['Name', 'Grade', 'Roll No', 'Attendance Rate']}
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
    <PortalLayout schoolId={schoolId} role="teacher">
      <TeacherAttendance />
    </PortalLayout>
  );
}
