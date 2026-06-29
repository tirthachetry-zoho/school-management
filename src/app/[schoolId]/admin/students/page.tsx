'use client';

import React, { useState } from 'react';
import { SchoolId } from '@/lib/types';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { Table } from '@/components/ui/Table';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { Input, Select } from '@/components/ui/Input';
import { getSchoolData, setSchoolData } from '@/lib/data';
import { useSchool } from '@/components/school/SchoolProvider';

function AdminStudents() {
  const { schoolId, theme } = useSchool();
  const [students, setStudents] = useState(getSchoolData(schoolId as SchoolId, 'students'));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<any>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    grade: '10',
    section: 'A',
    rollNumber: '',
    parentId: '',
  });

  const handleAdd = () => {
    setEditingStudent(null);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      grade: '10',
      section: 'A',
      rollNumber: '',
      parentId: '',
    });
    setIsModalOpen(true);
  };

  const handleEdit = (student: any) => {
    setEditingStudent(student);
    setFormData({
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      phone: student.phone,
      grade: student.grade,
      section: student.section,
      rollNumber: student.rollNumber,
      parentId: student.parentId,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this student?')) {
      const updated = students.filter((s: any) => s.id !== id);
      setStudents(updated);
      setSchoolData(schoolId, 'students', updated);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingStudent) {
      const updated = students.map((s: any) =>
        s.id === editingStudent.id
          ? { ...s, ...formData }
          : s
      );
      setStudents(updated);
      setSchoolData(schoolId, 'students', updated);
    } else {
      const newStudent = {
        id: `s${Date.now()}`,
        ...formData,
        dateOfBirth: '2010-01-01',
        status: 'active',
        enrollmentDate: new Date().toISOString().split('T')[0],
      };
      const updated = [...students, newStudent];
      setStudents(updated);
      setSchoolData(schoolId, 'students', updated);
    }
    setIsModalOpen(false);
  };

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
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl sm:text-2xl font-bold" style={{ color: theme.text }}>Students Management</h2>
        <Button onClick={handleAdd} className="w-full sm:w-auto" style={{ background: theme.primary, color: 'white' }}>
          Add Student
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table
            headers={['Name', 'Grade', 'Section', 'Roll No', 'Email', 'Status']}
            data={tableData}
          />
        </CardContent>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingStudent ? 'Edit Student' : 'Add Student'}
      >
        <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto p-2">
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
          <Select
            label="Grade"
            value={formData.grade}
            onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
            options={[
              { value: '8', label: 'Grade 8' },
              { value: '9', label: 'Grade 9' },
              { value: '10', label: 'Grade 10' },
              { value: '11', label: 'Grade 11' },
            ]}
          />
          <Select
            label="Section"
            value={formData.section}
            onChange={(e) => setFormData({ ...formData, section: e.target.value })}
            options={[
              { value: 'A', label: 'Section A' },
              { value: 'B', label: 'Section B' },
            ]}
          />
          <Input
            label="Roll Number"
            value={formData.rollNumber}
            onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
            required
          />
          <Input
            label="Parent ID"
            value={formData.parentId}
            onChange={(e) => setFormData({ ...formData, parentId: e.target.value })}
            required
          />
          <Button type="submit" className="w-full" style={{ background: theme.primary, color: 'white' }}>
            {editingStudent ? 'Update' : 'Add'} Student
          </Button>
        </form>
      </Modal>
    </div>
  );
}

export default function Page({ params }: { params: Promise<{ schoolId: SchoolId }> }) {
  const { schoolId } = React.use(params);
  return (
    <PortalLayout schoolId={schoolId} role="admin">
      <AdminStudents />
    </PortalLayout>
  );
}
