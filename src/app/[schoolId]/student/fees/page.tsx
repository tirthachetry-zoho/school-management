'use client';

import React from 'react';
import { SchoolId } from '@/lib/types';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { Card, CardContent } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { getSchoolData } from '@/lib/data';
import { getSession } from '@/lib/storage';
import { useSchool } from '@/components/school/SchoolProvider';

function StudentFees() {
  const { schoolId, theme } = useSchool();
  const session = getSession(schoolId);
  const fees = getSchoolData(schoolId as SchoolId, 'fees');

  const studentFees = fees.filter((f:any) => f.studentId === session?.userId);

  const tableData = studentFees.map((f: any) => [
    f.type.charAt(0).toUpperCase() + f.type.slice(1),
    `$${f.amount}`,
    f.dueDate,
    f.paidDate || '-',
    f.status.charAt(0).toUpperCase() + f.status.slice(1),
  ]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6" style={{ color: theme.text }}>Fee Records</h2>
      <Card>
        <CardContent className="p-0">
          <Table
            headers={['Type', 'Amount', 'Due Date', 'Paid Date', 'Status']}
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
      <StudentFees />
    </PortalLayout>
  );
}
