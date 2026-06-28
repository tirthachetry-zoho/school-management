'use client';

import React from 'react';
import { SchoolId } from '@/lib/types';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { Card, CardContent } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { getSchoolData } from '@/lib/data';
import { getSession } from '@/lib/storage';
import { useSchool } from '@/components/school/SchoolProvider';

function ParentFees() {
  const { schoolId, theme } = useSchool();
  const session = getSession(schoolId);
  const parents = getSchoolData(schoolId as SchoolId, 'parents');
  const students = getSchoolData(schoolId as SchoolId, 'students');
  const fees = getSchoolData(schoolId as SchoolId, 'fees');

  const parent = parents.find((p: any) => p.id === session?.userId);
  const parentChildren = students.filter((s: any) => parent?.childrenIds.includes(s.id));
  const childrenFees = fees.filter((f: any) => parent?.childrenIds.includes(f.studentId));

  const tableData = childrenFees.map((f: any) => {
    const student = students.find((s: any) => s.id === f.studentId);
    return [
      student ? `${student.firstName} ${student.lastName}` : f.studentId,
      f.type.charAt(0).toUpperCase() + f.type.slice(1),
      `$${f.amount}`,
      f.dueDate,
      f.paidDate || '-',
      f.status.charAt(0).toUpperCase() + f.status.slice(1),
    ];
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6" style={{ color: theme.text }}>Children's Fee Records</h2>
      <Card>
        <CardContent className="p-0">
          <Table
            headers={['Child', 'Type', 'Amount', 'Due Date', 'Paid Date', 'Status']}
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
      <ParentFees />
    </PortalLayout>
  );
}
