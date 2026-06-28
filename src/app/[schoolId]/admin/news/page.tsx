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

function AdminNews() {
  const { schoolId, theme } = useSchool();
  const [news, setNews] = useState(getSchoolData(schoolId as SchoolId, 'news'));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNews, setEditingNews] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    category: 'achievement',
    isFeatured: false,
  });

  const handleAdd = () => {
    setEditingNews(null);
    setFormData({
      title: '',
      content: '',
      author: '',
      category: 'achievement',
      isFeatured: false,
    });
    setIsModalOpen(true);
  };

  const handleEdit = (item: any) => {
    setEditingNews(item);
    setFormData({
      title: item.title,
      content: item.content,
      author: item.author,
      category: item.category,
      isFeatured: item.isFeatured,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this news article?')) {
      const updated = news.filter((n: any) => n.id !== id);
      setNews(updated);
      setSchoolData(schoolId, 'news', updated);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingNews) {
      const updated = news.map((n: any) =>
        n.id === editingNews.id
          ? { ...n, ...formData }
          : n
      );
      setNews(updated);
      setSchoolData(schoolId, 'news', updated);
    } else {
      const newArticle = {
        id: `n${Date.now()}`,
        ...formData,
        publishDate: new Date().toISOString().split('T')[0],
      };
      const updated = [...news, newArticle];
      setNews(updated);
      setSchoolData(schoolId, 'news', updated);
    }
    setIsModalOpen(false);
  };

  const tableData = news.map((n: any) => [
    n.title,
    n.author,
    n.publishDate,
    n.category.charAt(0).toUpperCase() + n.category.slice(1),
    n.isFeatured ? 'Yes' : 'No',
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold" style={{ color: theme.text }}>News Management</h2>
        <Button onClick={handleAdd} style={{ background: theme.primary, color: 'white' }}>
          Add News
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table
            headers={['Title', 'Author', 'Date', 'Category', 'Featured']}
            data={tableData}
          />
        </CardContent>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingNews ? 'Edit News' : 'Add News'}
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
          <Textarea
            label="Content"
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            rows={5}
          />
          <Input
            label="Author"
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            required
          />
          <Select
            label="Category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            options={[
              { value: 'achievement', label: 'Achievement' },
              { value: 'infrastructure', label: 'Infrastructure' },
              { value: 'admissions', label: 'Admissions' },
              { value: 'events', label: 'Events' },
              { value: 'general', label: 'General' },
            ]}
          />
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={formData.isFeatured}
              onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
              className="rounded"
            />
            <span>Featured Article</span>
          </label>
          <Button type="submit" className="w-full" style={{ background: theme.primary, color: 'white' }}>
            {editingNews ? 'Update' : 'Add'} News
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
      <AdminNews />
    </PortalLayout>
  );
}
