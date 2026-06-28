'use client';

import React, { useState } from 'react';
import { SchoolId } from '@/lib/types';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { Input, Select, Textarea } from '@/components/ui/Input';
import { getSchoolData, setSchoolData } from '@/lib/data';
import { useSchool } from '@/components/school/SchoolProvider';

function AdminGallery() {
  const { schoolId, theme } = useSchool();
  const [gallery, setGallery] = useState(getSchoolData(schoolId as SchoolId, 'gallery'));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    url: '',
    caption: '',
    category: 'campus',
  });

  const handleAdd = () => {
    setFormData({
      url: '',
      caption: '',
      category: 'campus',
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this image?')) {
      const updated = gallery.filter((g: any) => g.id !== id);
      setGallery(updated);
      setSchoolData(schoolId, 'gallery', updated);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newImage = {
      id: `g${Date.now()}`,
      ...formData,
      uploadDate: new Date().toISOString().split('T')[0],
    };
    const updated = [...gallery, newImage];
    setGallery(updated);
    setSchoolData(schoolId, 'gallery', updated);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold" style={{ color: theme.text }}>Gallery Management</h2>
        <Button onClick={handleAdd} style={{ background: theme.primary, color: 'white' }}>
          Add Image
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gallery.map((image: any) => (
          <Card key={image.id}>
            <CardContent className="p-0">
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <p className="font-semibold text-sm mb-1" style={{ color: theme.primary }}>
                  {image.category}
                </p>
                <p className="text-sm mb-2">{image.caption}</p>
                <p className="text-xs text-gray-400 mb-3">{image.uploadDate}</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(image.id)}
                  className="w-full"
                >
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add Image to Gallery"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Image URL"
            value={formData.url}
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
            required
          />
          <Textarea
            label="Caption"
            value={formData.caption}
            onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
            rows={2}
          />
          <Select
            label="Category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            options={[
              { value: 'campus', label: 'Campus' },
              { value: 'facilities', label: 'Facilities' },
              { value: 'events', label: 'Events' },
              { value: 'activities', label: 'Activities' },
            ]}
          />
          <Button type="submit" className="w-full" style={{ background: theme.primary, color: 'white' }}>
            Add Image
          </Button>
        </form>
      </Modal>
    </div>
  );
}

export default function Page({ params }: { params: { schoolId: SchoolId } }) {
  return (
    <PortalLayout schoolId={params.schoolId} role="admin">
      <AdminGallery />
    </PortalLayout>
  );
}
