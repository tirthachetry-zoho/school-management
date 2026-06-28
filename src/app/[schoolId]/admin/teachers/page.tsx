'use client';

import React, { useState } from 'react';
import { SchoolId } from '@/lib/types';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { Table } from '@/components/ui/Table';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { Input, Select, Textarea } from '@/components/ui/Input';
import { getSchoolData, setSchoolData } from '@/lib/data';
import { useSchool } from '@/components/school/SchoolProvider';

function AdminTeachers() {
  const { schoolId, theme } = useSchool();
  const [teachers, setTeachers] = useState(getSchoolData(schoolId as SchoolId, 'teachers'));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState<any>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    department: '',
    bio: '',
    qualification: '',
  });

  const handleAdd = () => {
    setEditingTeacher(null);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      department: '',
      bio: '',
      qualification: '',
    });
    setIsModalOpen(true);
  };

  const handleEdit = (teacher: any) => {
    setEditingTeacher(teacher);
    setFormData({
      firstName: teacher.firstName,
      lastName: teacher.lastName,
      email: teacher.email,
      phone: teacher.phone,
      subject: teacher.subject,
      department: teacher.department,
      bio: teacher.bio,
      qualification: teacher.qualification,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this teacher?')) {
      const updated = teachers.filter((t: any) => t.id !== id);
      setTeachers(updated);
      setSchoolData(schoolId, 'teachers', updated);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTeacher) {
      const updated = teachers.map((t: any) =>
        t.id === editingTeacher.id
          ? { ...t, ...formData }
          : t
      );
      setTeachers(updated);
      setSchoolData(schoolId, 'teachers', updated);
    } else {
      const newTeacher = {
        id: `t${Date.now()}`,
        ...formData,
        joinDate: new Date().toISOString().split('T')[0],
        status: 'active',
      };
      const updated = [...teachers, newTeacher];
      setTeachers(updated);
      setSchoolData(schoolId, 'teachers', updated);
    }
    setIsModalOpen(false);
  };

  const tableData = teachers.map((t: any) => [
    `${t.firstName} ${t.lastName}`,
    t.subject,
    t.department,
    t.email,
    t.status.charAt(0).toUpperCase() + t.status.slice(1),
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold" style={{ color: theme.text }}>Teachers Management</h2>
        <Button onClick={handleAdd} style={{ background: theme.primary, color: 'white' }}>
          Add Teacher
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table
            headers={['Name', 'Subject', 'Department', 'Email', 'Status']}
            data={tableData}
          />
        </CardContent>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingTeacher ? 'Edit Teacher' : 'Add Teacher'}
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="First Name"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            required
          />
          <Input
            label="Last Name"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            required
          />
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <Input
            label="Phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
          <Input
            label="Subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            required
          />
          <Select
            label="Department"
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            options={[
              { value: 'STEM', label: 'STEM' },
              { value: 'Humanities', label: 'Humanities' },
              { value: 'Sciences', label: 'Sciences' },
              { value: 'Creative Arts', label: 'Creative Arts' },
              { value: 'Technology', label: 'Technology' },
              { value: 'Engineering', label: 'Engineering' },
            ]}
          />
          <Textarea
            label="Bio"
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            rows={3}
          />
          <Input
            label="Qualification"
            value={formData.qualification}
            onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
            required
          />
          <Button type="submit" className="w-full" style={{ background: theme.primary, color: 'white' }}>
            {editingTeacher ? 'Update' : 'Add'} Teacher
          </Button>
        </form>
      </Modal>
    </div>
  );
}

export default function Page({ params }: { params: { schoolId: SchoolId } }) {
  return (
    <PortalLayout schoolId={params.schoolId} role="admin">
      <AdminTeachers />
    </PortalLayout>
  );
}
