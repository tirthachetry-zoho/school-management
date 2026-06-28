'use client';

import React from 'react';
import { SchoolId } from '@/lib/types';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { getSchoolData } from '@/lib/data';
import { getSession } from '@/lib/storage';
import { useSchool } from '@/components/school/SchoolProvider';

function TeacherDashboard() {
  const { schoolId, theme } = useSchool();
  const session = getSession(schoolId);
  const teachers = getSchoolData(schoolId as SchoolId, 'teachers');
  const students = getSchoolData(schoolId as SchoolId, 'students');
  const homework = getSchoolData(schoolId as SchoolId, 'homework');
  const attendance = getSchoolData(schoolId as SchoolId, 'attendance');

  const teacher = teachers.find((t: any) => t.id === session?.userId);
  const teacherStudents = students.filter((s: any) => s.grade === '10');
  const teacherHomework = homework.filter((h: any) => h.assignedBy === session?.userId);
  const todayAttendance = attendance.filter((a: any) => a.date === new Date().toISOString().split('T')[0]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader>
            <h3 className="text-sm font-medium text-gray-500">Total Students</h3>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold" style={{ color: theme.primary }}>
              {teacherStudents.length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-sm font-medium text-gray-500">Active Homework</h3>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold" style={{ color: theme.primary }}>
              {teacherHomework.filter((h: any) => h.status === 'active').length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-sm font-medium text-gray-500">Today's Attendance</h3>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold" style={{ color: theme.primary }}>
              {todayAttendance.length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-sm font-medium text-gray-500">Subject</h3>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold" style={{ color: theme.primary }}>
              {teacher?.subject}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-bold" style={{ color: theme.text }}>Teacher Information</h3>
          </CardHeader>
          <CardContent>
            {teacher && (
              <div className="space-y-2">
                <div><span className="font-medium">Name:</span> {teacher.firstName} {teacher.lastName}</div>
                <div><span className="font-medium">Subject:</span> {teacher.subject}</div>
                <div><span className="font-medium">Department:</span> {teacher.department}</div>
                <div><span className="font-medium">Email:</span> {teacher.email}</div>
                <div><span className="font-medium">Qualification:</span> {teacher.qualification}</div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-bold" style={{ color: theme.text }}>Recent Homework Assignments</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {teacherHomework.slice(0, 3).map((hw: any) => (
                <div key={hw.id} className="border-b pb-2 last:border-0">
                  <div className="font-medium">{hw.title}</div>
                  <div className="text-sm text-gray-500">Grade: {hw.grade} | Due: {hw.dueDate}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function Page({ params }: { params: Promise<{ schoolId: SchoolId }> }) {
  const { schoolId } = React.use(params);
  return (
    <PortalLayout schoolId={schoolId} role="teacher">
      <TeacherDashboard />
    </PortalLayout>
  );
}
