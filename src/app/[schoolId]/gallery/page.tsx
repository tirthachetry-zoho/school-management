'use client';

import React from 'react';
import { SchoolId } from '@/lib/types';
import { SchoolProvider, useSchool } from '@/components/school/SchoolProvider';
import { SchoolLayout } from '@/components/school/SchoolLayout';
import { getSchoolData } from '@/lib/data';

function GalleryPage() {
  const { schoolId, theme } = useSchool();
  const gallery = getSchoolData(schoolId as SchoolId, 'gallery');

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center" style={{ color: theme.text }}>
            Gallery
          </h1>

          <p className="text-lg text-center mb-12" style={{ color: theme.textSecondary }}>
            Explore our campus life through images
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image: any) => (
              <div
                key={image.id}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 bg-white">
                  <p className="font-semibold text-sm mb-1" style={{ color: theme.primary }}>
                    {image.category}
                  </p>
                  <p className="text-sm" style={{ color: theme.textSecondary }}>
                    {image.caption}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">{image.uploadDate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page({ params }: { params: Promise<{ schoolId: SchoolId }> }) {
  const { schoolId } = React.use(params);
  return (
    <SchoolProvider schoolId={schoolId}>
      <SchoolLayout schoolId={schoolId}>
        <GalleryPage />
      </SchoolLayout>
    </SchoolProvider>
  );
}
