'use client';

import React from 'react';
import { SchoolId } from '@/lib/types';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { getSchoolData } from '@/lib/data';
import { getSession } from '@/lib/storage';
import { useSchool } from '@/components/school/SchoolProvider';

function ParentDashboard() {
  const { schoolId, theme } = useSchool();
  const session = getSession(schoolId);
  const parents = getSchoolData(schoolId as SchoolId, 'parents');
  const students = getSchoolData(schoolId as SchoolId, 'students');
  const attendance = getSchoolData(schoolId as SchoolId, 'attendance');
  const fees = getSchoolData(schoolId as SchoolId, 'fees');

  const parent = parents.find((p: any) => p.id === session?.userId);
  const parentChildren = students.filter((s: any) => parent?.childrenIds.includes(s.id));
  const childrenAttendance = attendance.filter((a: any) => parent?.childrenIds.includes(a.studentId));
  const childrenFees = fees.filter((f: any) => parent?.childrenIds.includes(f.studentId));

  const presentCount = childrenAttendance.filter((a: any) => a.status === 'present').length;
  const pendingFees = childrenFees.filter((f: any) => f.status === 'pending').reduce((sum: number, f: any) => sum + f.amount, 0);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader>
            <h3 className="text-sm font-medium text-gray-500">Children</h3>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold" style={{ color: theme.primary }}>
              {parentChildren.length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-sm font-medium text-gray-500">Attendance Rate</h3>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold" style={{ color: theme.primary }}>
              {childrenAttendance.length > 0 ? Math.round((presentCount / childrenAttendance.length) * 100) : 0}%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-sm font-medium text-gray-500">Pending Fees</h3>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold" style={{ color: theme.primary }}>
              ${pendingFees}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-sm font-medium text-gray-500">Total Paid</h3>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold" style={{ color: theme.primary }}>
              ${childrenFees.filter((f: any) => f.status === 'paid').reduce((sum: number, f: any) => sum + f.amount, 0)}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-bold" style={{ color: theme.text }}>Parent Information</h3>
          </CardHeader>
          <CardContent>
            {parent && (
              <div className="space-y-2">
                <div><span className="font-medium">Name:</span> {parent.firstName} {parent.lastName}</div>
                <div><span className="font-medium">Email:</span> {parent.email}</div>
                <div><span className="font-medium">Phone:</span> {parent.phone}</div>
                <div><span className="font-medium">Address:</span> {parent.address}</div>
                <div><span className="font-medium">Occupation:</span> {parent.occupation}</div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-bold" style={{ color: theme.text }}>Your Children</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {parentChildren.map((child: any) => (
                <div key={child.id} className="border-b pb-2 last:border-0">
                  <div className="font-medium">{child.firstName} {child.lastName}</div>
                  <div className="text-sm text-gray-500">Grade {child.grade} - {child.section} | Roll: {child.rollNumber}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function Page({ params }: { params: { schoolId: SchoolId } }) {
  return (
    <PortalLayout schoolId={params.schoolId} role="parent">
      <ParentDashboard />
    </PortalLayout>
  );
}
