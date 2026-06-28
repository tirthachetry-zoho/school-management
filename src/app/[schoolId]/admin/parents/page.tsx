'use client';

import React, { useState } from 'react';
import { SchoolId } from '@/lib/types';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { Table } from '@/components/ui/Table';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { Input, Textarea } from '@/components/ui/Input';
import { getSchoolData, setSchoolData } from '@/lib/data';
import { useSchool } from '@/components/school/SchoolProvider';

function AdminParents() {
  const { schoolId, theme } = useSchool();
  const [parents, setParents] = useState(getSchoolData(schoolId as SchoolId, 'parents'));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingParent, setEditingParent] = useState<any>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    occupation: '',
  });

  const handleAdd = () => {
    setEditingParent(null);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      occupation: '',
    });
    setIsModalOpen(true);
  };

  const handleEdit = (parent: any) => {
    setEditingParent(parent);
    setFormData({
      firstName: parent.firstName,
      lastName: parent.lastName,
      email: parent.email,
      phone: parent.phone,
      address: parent.address,
      occupation: parent.occupation,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this parent?')) {
      const updated = parents.filter((p: any) => p.id !== id);
      setParents(updated);
      setSchoolData(schoolId, 'parents', updated);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingParent) {
      const updated = parents.map((p: any) =>
        p.id === editingParent.id
          ? { ...p, ...formData }
          : p
      );
      setParents(updated);
      setSchoolData(schoolId, 'parents', updated);
    } else {
      const newParent = {
        id: `p${Date.now()}`,
        ...formData,
        childrenIds: [],
      };
      const updated = [...parents, newParent];
      setParents(updated);
      setSchoolData(schoolId, 'parents', updated);
    }
    setIsModalOpen(false);
  };

  const tableData = parents.map((p: any) => [
    `${p.firstName} ${p.lastName}`,
    p.email,
    p.phone,
    p.occupation,
    `${p.childrenIds.length} children`,
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold" style={{ color: theme.text }}>Parents Management</h2>
        <Button onClick={handleAdd} style={{ background: theme.primary, color: 'white' }}>
          Add Parent
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table
            headers={['Name', 'Email', 'Phone', 'Occupation', 'Children']}
            data={tableData}
          />
        </CardContent>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingParent ? 'Edit Parent' : 'Add Parent'}
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
          <Textarea
            label="Address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            rows={2}
          />
          <Input
            label="Occupation"
            value={formData.occupation}
            onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
            required
          />
          <Button type="submit" className="w-full" style={{ background: theme.primary, color: 'white' }}>
            {editingParent ? 'Update' : 'Add'} Parent
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
      <AdminParents />
    </PortalLayout>
  );
}
