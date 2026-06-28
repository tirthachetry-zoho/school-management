'use client';

import React from 'react';
import { SchoolId } from '@/lib/types';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { Card, CardContent } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { getSchoolData } from '@/lib/data';
import { useSchool } from '@/components/school/SchoolProvider';

function TeacherStudents() {
  const { schoolId, theme } = useSchool();
  const students = getSchoolData(schoolId as SchoolId, 'students');

  const tableData = students.map((s: any) => [
    `${s.firstName} ${s.lastName}`,
    s.grade,
    s.section,
    s.rollNumber,
    s.email,
    s.status.charAt(0).toUpperCase() + s.status.slice(1),
  ]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6" style={{ color: theme.text }}>All Students</h2>
      <Card>
        <CardContent className="p-0">
          <Table
            headers={['Name', 'Grade', 'Section', 'Roll No', 'Email', 'Status']}
            data={tableData}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default function Page({ params }: { params: { schoolId: SchoolId } }) {
  return (
    <PortalLayout schoolId={params.schoolId} role="teacher">
      <TeacherStudents />
    </PortalLayout>
  );
}
