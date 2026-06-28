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

function AdminEvents() {
  const { schoolId, theme } = useSchool();
  const [events, setEvents] = useState(getSchoolData(schoolId as SchoolId, 'events'));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    endDate: '',
    category: 'academic',
    isFeatured: false,
  });

  const handleAdd = () => {
    setEditingEvent(null);
    setFormData({
      title: '',
      description: '',
      date: '',
      endDate: '',
      category: 'academic',
      isFeatured: false,
    });
    setIsModalOpen(true);
  };

  const handleEdit = (event: any) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      description: event.description,
      date: event.date,
      endDate: event.endDate || '',
      category: event.category,
      isFeatured: event.isFeatured,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this event?')) {
      const updated = events.filter((e: any) => e.id !== id);
      setEvents(updated);
      setSchoolData(schoolId, 'events', updated);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingEvent) {
      const updated = events.map((e: any) =>
        e.id === editingEvent.id
          ? { ...e, ...formData }
          : e
      );
      setEvents(updated);
      setSchoolData(schoolId, 'events', updated);
    } else {
      const newEvent = {
        id: `e${Date.now()}`,
        ...formData,
      };
      const updated = [...events, newEvent];
      setEvents(updated);
      setSchoolData(schoolId, 'events', updated);
    }
    setIsModalOpen(false);
  };

  const tableData = events.map((e: any) => [
    e.title,
    e.date,
    e.category.charAt(0).toUpperCase() + e.category.slice(1),
    e.isFeatured ? 'Yes' : 'No',
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold" style={{ color: theme.text }}>Events Management</h2>
        <Button onClick={handleAdd} style={{ background: theme.primary, color: 'white' }}>
          Add Event
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table
            headers={['Title', 'Date', 'Category', 'Featured']}
            data={tableData}
          />
        </CardContent>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingEvent ? 'Edit Event' : 'Add Event'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
          <Textarea
            label="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={3}
          />
          <Input
            label="Date"
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
          <Input
            label="End Date (Optional)"
            type="date"
            value={formData.endDate}
            onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
          />
          <Select
            label="Category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            options={[
              { value: 'academic', label: 'Academic' },
              { value: 'sports', label: 'Sports' },
              { value: 'cultural', label: 'Cultural' },
              { value: 'exam', label: 'Exam' },
              { value: 'holiday', label: 'Holiday' },
            ]}
          />
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={formData.isFeatured}
              onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
              className="rounded"
            />
            <span>Featured Event</span>
          </label>
          <Button type="submit" className="w-full" style={{ background: theme.primary, color: 'white' }}>
            {editingEvent ? 'Update' : 'Add'} Event
          </Button>
        </form>
      </Modal>
    </div>
  );
}

export default function Page({ params }: { params: { schoolId: SchoolId } }) {
  return (
    <PortalLayout schoolId={params.schoolId} role="admin">
      <AdminEvents />
    </PortalLayout>
  );
}
