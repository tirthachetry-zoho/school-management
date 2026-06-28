'use client';

import React, { useState } from 'react';
import { SchoolId } from '@/lib/types';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';
import { useSchool } from '@/components/school/SchoolProvider';

function AdminSettings() {
  const { schoolId, theme, settings } = useSchool();
  const [formData, setFormData] = useState(settings);

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6" style={{ color: theme.text }}>School Settings</h2>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-bold" style={{ color: theme.text }}>Basic Information</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                label="School Name"
                value={formData.schoolName}
                onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
              />
              <Input
                label="Principal Name"
                value={formData.principalName}
                onChange={(e) => setFormData({ ...formData, principalName: e.target.value })}
              />
              <Input
                label="Address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
              <Input
                label="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <Input
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-bold" style={{ color: theme.text }}>Academic Information</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                label="Academic Year"
                value={formData.academicYear}
                onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
              />
              <Input
                label="Established Year"
                type="number"
                value={formData.establishedYear.toString()}
                onChange={(e) => setFormData({ ...formData, establishedYear: parseInt(e.target.value) })}
              />
              <Input
                label="Total Students"
                type="number"
                value={formData.totalStudents.toString()}
                onChange={(e) => setFormData({ ...formData, totalStudents: parseInt(e.target.value) })}
              />
              <Input
                label="Total Teachers"
                type="number"
                value={formData.totalTeachers.toString()}
                onChange={(e) => setFormData({ ...formData, totalTeachers: parseInt(e.target.value) })}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-bold" style={{ color: theme.text }}>School Motto</h3>
          </CardHeader>
          <CardContent>
            <Textarea
              label="Motto"
              value={formData.motto}
              onChange={(e) => setFormData({ ...formData, motto: e.target.value })}
              rows={2}
            />
          </CardContent>
        </Card>

        <Button onClick={handleSave} style={{ background: theme.primary, color: 'white' }}>
          Save Settings
        </Button>
      </div>
    </div>
  );
}

export default function Page({ params }: { params: Promise<{ schoolId: SchoolId }> }) {
  const { schoolId } = React.use(params);
  return (
    <PortalLayout schoolId={schoolId} role="admin">
      <AdminSettings />
    </PortalLayout>
  );
}
