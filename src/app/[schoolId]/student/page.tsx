'use client';

import React from 'react';
import { SchoolId } from '@/lib/types';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { getSchoolData } from '@/lib/data';
import { getSession } from '@/lib/storage';
import { useSchool } from '@/components/school/SchoolProvider';

function StudentDashboard() {
  const { schoolId, theme } = useSchool();
  const session = getSession(schoolId);
  const students = getSchoolData(schoolId as SchoolId, 'students');
  const homework = getSchoolData(schoolId as SchoolId, 'homework');
  const attendance = getSchoolData(schoolId as SchoolId, 'attendance');
  const fees = getSchoolData(schoolId as SchoolId, 'fees');
  const exams = getSchoolData(schoolId as SchoolId, 'exams');

  const student = students.find((s: any) => s.id === session?.userId);
  const studentHomework = homework.filter((h: any) => h.grade === student?.grade);
  const studentAttendance = attendance.filter((a: any) => a.studentId === session?.userId);
  const studentFees = fees.filter((f: any) => f.studentId === session?.userId);
  const studentExams = exams.filter((e: any) => e.grade === student?.grade);

  const presentCount = studentAttendance.filter((a: any) => a.status === 'present').length;
  const pendingFees = studentFees.filter((f: any) => f.status === 'pending').reduce((sum: number, f: any) => sum + f.amount, 0);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader>
            <h3 className="text-sm font-medium text-gray-500">Attendance Rate</h3>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold" style={{ color: theme.primary }}>
              {studentAttendance.length > 0 ? Math.round((presentCount / studentAttendance.length) * 100) : 0}%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-sm font-medium text-gray-500">Pending Homework</h3>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold" style={{ color: theme.primary }}>
              {studentHomework.filter((h: any) => h.status === 'active').length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-sm font-medium text-gray-500">Upcoming Exams</h3>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold" style={{ color: theme.primary }}>
              {studentExams.length}
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
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-bold" style={{ color: theme.text }}>Student Information</h3>
          </CardHeader>
          <CardContent>
            {student && (
              <div className="space-y-2">
                <div><span className="font-medium">Name:</span> {student.firstName} {student.lastName}</div>
                <div><span className="font-medium">Grade:</span> {student.grade} - {student.section}</div>
                <div><span className="font-medium">Roll Number:</span> {student.rollNumber}</div>
                <div><span className="font-medium">Email:</span> {student.email}</div>
                <div><span className="font-medium">Status:</span> {student.status}</div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-bold" style={{ color: theme.text }}>Recent Homework</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {studentHomework.slice(0, 3).map((hw: any) => (
                <div key={hw.id} className="border-b pb-2 last:border-0">
                  <div className="font-medium">{hw.title}</div>
                  <div className="text-sm text-gray-500">Due: {hw.dueDate}</div>
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
    <PortalLayout schoolId={params.schoolId} role="student">
      <StudentDashboard />
    </PortalLayout>
  );
}
