'use client';

import React from 'react';
import { SchoolId } from '@/lib/types';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { Card, CardContent } from '@/components/ui/Card';
import { getSchoolData } from '@/lib/data';
import { getSession } from '@/lib/storage';
import { useSchool } from '@/components/school/SchoolProvider';

function ParentChildren() {
  const { schoolId, theme } = useSchool();
  const session = getSession(schoolId);
  const parents = getSchoolData(schoolId as SchoolId, 'parents');
  const students = getSchoolData(schoolId as SchoolId, 'students');

  const parent = parents.find((p: any) => p.id === session?.userId);
  const parentChildren = students.filter((s: any) => parent?.childrenIds.includes(s.id));

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6" style={{ color: theme.text }}>Your Children</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {parentChildren.map((child: any) => (
          <Card key={child.id}>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white mr-4"
                  style={{ background: theme.primary }}
                >
                  {child.firstName[0]}{child.lastName[0]}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{child.firstName} {child.lastName}</h3>
                  <p className="text-sm text-gray-500">Grade {child.grade} - {child.section}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div><span className="font-medium">Roll Number:</span> {child.rollNumber}</div>
                <div><span className="font-medium">Email:</span> {child.email}</div>
                <div><span className="font-medium">Phone:</span> {child.phone}</div>
                <div><span className="font-medium">Status:</span> {child.status}</div>
                <div><span className="font-medium">Enrolled:</span> {child.enrollmentDate}</div>
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
    <PortalLayout schoolId={schoolId} role="parent">
      <ParentChildren />
    </PortalLayout>
  );
}
