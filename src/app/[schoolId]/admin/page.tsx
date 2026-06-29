'use client';

import React from 'react';
import { SchoolId } from '@/lib/types';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { getSchoolData } from '@/lib/data';
import { useSchool } from '@/components/school/SchoolProvider';

function AdminDashboard() {
  const { schoolId, theme, settings } = useSchool();
  const students = getSchoolData(schoolId as SchoolId, 'students');
  const teachers = getSchoolData(schoolId as SchoolId, 'teachers');
  const parents = getSchoolData(schoolId as SchoolId, 'parents');
  const events = getSchoolData(schoolId as SchoolId, 'events');
  const fees = getSchoolData(schoolId as SchoolId, 'fees');

  const activeStudents = students.filter((s: any) => s.status === 'active').length;
  const activeTeachers = teachers.filter((t: any) => t.status === 'active').length;
  const pendingFees = fees.filter((f: any) => f.status === 'pending').reduce((sum: number, f: any) => sum + f.amount, 0);
  const upcomingEvents = events.filter((e: any) => new Date(e.date) >= new Date()).length;

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <Card>
          <CardHeader>
            <h3 className="text-xs sm:text-sm font-medium text-gray-500">Total Students</h3>
          </CardHeader>
          <CardContent>
            <div className="text-2xl sm:text-3xl font-bold" style={{ color: theme.primary }}>
              {activeStudents}
            </div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">Active students</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xs sm:text-sm font-medium text-gray-500">Total Teachers</h3>
          </CardHeader>
          <CardContent>
            <div className="text-2xl sm:text-3xl font-bold" style={{ color: theme.primary }}>
              {activeTeachers}
            </div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">Active teachers</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xs sm:text-sm font-medium text-gray-500">Pending Fees</h3>
          </CardHeader>
          <CardContent>
            <div className="text-2xl sm:text-3xl font-bold" style={{ color: theme.primary }}>
              ${pendingFees}
            </div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">Total pending</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xs sm:text-sm font-medium text-gray-500">Upcoming Events</h3>
          </CardHeader>
          <CardContent>
            <div className="text-2xl sm:text-3xl font-bold" style={{ color: theme.primary }}>
              {upcomingEvents}
            </div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">Scheduled events</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-base sm:text-lg font-bold" style={{ color: theme.text }}>School Overview</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium">School Name:</span> {settings.schoolName}</div>
              <div><span className="font-medium">Principal:</span> {settings.principalName}</div>
              <div><span className="font-medium">Academic Year:</span> {settings.academicYear}</div>
              <div><span className="font-medium">Established:</span> {settings.establishedYear}</div>
              <div><span className="font-medium">Total Parents:</span> {parents.length}</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-base sm:text-lg font-bold" style={{ color: theme.text }}>Quick Actions</h3>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <button
                className="p-3 sm:p-4 rounded-lg text-left transition-colors hover:opacity-80"
                style={{ background: theme.surface }}
              >
                <div className="font-semibold text-sm mb-1">Add Student</div>
                <div className="text-xs text-gray-500">Register new student</div>
              </button>
              <button
                className="p-3 sm:p-4 rounded-lg text-left transition-colors hover:opacity-80"
                style={{ background: theme.surface }}
              >
                <div className="font-semibold text-sm mb-1">Add Teacher</div>
                <div className="text-xs text-gray-500">Hire new teacher</div>
              </button>
              <button
                className="p-3 sm:p-4 rounded-lg text-left transition-colors hover:opacity-80"
                style={{ background: theme.surface }}
              >
                <div className="font-semibold text-sm mb-1">Create Event</div>
                <div className="text-xs text-gray-500">Schedule new event</div>
              </button>
              <button
                className="p-3 sm:p-4 rounded-lg text-left transition-colors hover:opacity-80"
                style={{ background: theme.surface }}
              >
                <div className="font-semibold text-sm mb-1">Send Notice</div>
                <div className="text-xs text-gray-500">Broadcast message</div>
              </button>
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
    <PortalLayout schoolId={schoolId} role="admin">
      <AdminDashboard />
    </PortalLayout>
  );
}
