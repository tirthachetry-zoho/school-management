'use client';

import React, { useState } from 'react';
import { SchoolId } from '@/lib/types';
import { SchoolProvider, useSchool } from '@/components/school/SchoolProvider';
import { SchoolLayout } from '@/components/school/SchoolLayout';
import { getSchoolData } from '@/lib/data';
import { X, ZoomIn } from 'lucide-react';

function GalleryPage() {
  const { schoolId, theme } = useSchool();
  const gallery = getSchoolData(schoolId as SchoolId, 'gallery');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const categories = ['all', ...Array.from(new Set(gallery.map((img: any) => img.category)))];
  const filteredGallery = selectedCategory === 'all' 
    ? gallery 
    : gallery.filter((img: any) => img.category === selectedCategory);

  return (
    <div className="min-h-screen py-12 md:py-16 px-4" style={{ backgroundColor: theme.surface }}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4" style={{ color: theme.text, fontFamily: theme.fontFamily }}>
              Our Gallery
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8" style={{ color: theme.textSecondary }}>
              Capturing moments of excellence, tradition, and celebration
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 md:px-6 md:py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                style={{
                  backgroundColor: selectedCategory === category ? theme.primary : undefined,
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
            {filteredGallery.map((image: any, index: number) => (
              <div
                key={image.id}
                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                    <span className="inline-block px-2 py-1 md:px-3 md:py-1 text-xs font-semibold text-white rounded-full mb-2" style={{ backgroundColor: theme.primary }}>
                      {image.category}
                    </span>
                    <p className="text-white font-medium text-xs sm:text-sm line-clamp-2">{image.caption}</p>
                    <div className="flex items-center gap-2 mt-2 md:mt-3">
                      <ZoomIn className="w-3 h-3 md:w-4 md:h-4 text-white" />
                      <span className="text-white text-xs">View Full Size</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-6xl max-h-[90vh] w-full">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                  className="absolute -top-10 md:-top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
                >
                  <X className="w-6 h-6 md:w-8 md:h-8" />
                </button>
                <img
                  src={selectedImage.url}
                  alt={selectedImage.caption}
                  className="w-full h-full object-contain rounded-lg shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                  <span className="inline-block px-2 py-1 md:px-3 md:py-1 text-xs font-semibold text-white rounded-full mb-2" style={{ backgroundColor: theme.primary }}>
                    {selectedImage.category}
                  </span>
                  <p className="text-white font-medium text-base md:text-lg">{selectedImage.caption}</p>
                  <p className="text-gray-300 text-xs sm:text-sm mt-1">{selectedImage.uploadDate}</p>
                </div>
              </div>
            </div>
          )}
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
