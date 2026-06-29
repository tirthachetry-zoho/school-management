'use client';

import React, { useEffect } from 'react';
import { SchoolId } from '@/lib/types';
import { SchoolProvider, useSchool } from '@/components/school/SchoolProvider';
import { SchoolLayout } from '@/components/school/SchoolLayout';
import { Card, CardContent } from '@/components/ui/Card';
import { initializeSchoolData, getSchoolData } from '@/lib/data';
import Link from 'next/link';

function SchoolHomePage() {
  const { schoolId, theme, settings, website } = useSchool();

  useEffect(() => {
    initializeSchoolData(schoolId);
  }, [schoolId]);

  const news = getSchoolData(schoolId as SchoolId, 'news');
  const events = getSchoolData(schoolId as SchoolId, 'events');
  const gallery = getSchoolData(schoolId as SchoolId, 'gallery');
  const featuredNews = news.filter((n: any) => n.isFeatured);
  const featuredEvents = events.filter((e: any) => e.isFeatured);
  const featuredGallery = gallery.slice(0, 6);

  return (
    <div>
      <section
        className="relative py-12 md:py-24 px-4"
        style={{
          background: theme.gradient,
        }}
      >
        <div className="container mx-auto text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: theme.fontFamily }}>
            {website.heroTitle}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-white/90">
            {website.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href={`/${schoolId}/admissions`}
              className="px-6 py-3 md:px-8 md:py-3 bg-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors text-center"
              style={{ color: theme.primary }}
            >
              Apply Now
            </Link>
            <Link
              href={`/${schoolId}/about`}
              className="px-6 py-3 md:px-8 md:py-3 border-2 border-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4" style={{ backgroundColor: theme.surface }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: theme.primary }}>
                {settings.totalStudents}
              </div>
              <div className="text-sm sm:text-base text-gray-600">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: theme.primary }}>
                {settings.totalTeachers}
              </div>
              <div className="text-sm sm:text-base text-gray-600">Teachers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: theme.primary }}>
                {settings.establishedYear}
              </div>
              <div className="text-sm sm:text-base text-gray-600">Established</div>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: theme.text }}>
              About Our School
            </h2>
            <p className="text-base sm:text-lg" style={{ color: theme.textSecondary }}>
              {website.aboutContent}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: theme.text }}>
                Our Mission
              </h3>
              <p style={{ color: theme.textSecondary }}>{website.missionStatement}</p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: theme.text }}>
                Our Vision
              </h3>
              <p style={{ color: theme.textSecondary }}>{website.visionStatement}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 text-center" style={{ color: theme.text }}>
            Latest News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {featuredNews.slice(0, 3).map((item: any) => (
              <Card key={item.id}>
                <CardContent className="p-4 md:p-6">
                  <div className="text-xs sm:text-sm text-gray-500 mb-2">{item.publishDate}</div>
                  <h3 className="font-bold text-base sm:text-lg mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 line-clamp-3">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4" style={{ backgroundColor: theme.surface }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 text-center" style={{ color: theme.text }}>
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {featuredEvents.slice(0, 3).map((item: any) => (
              <Card key={item.id}>
                <CardContent className="p-4 md:p-6">
                  <div className="text-xs sm:text-sm font-semibold mb-2" style={{ color: theme.primary }}>
                    {item.date}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 line-clamp-2">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4" style={{ color: theme.text }}>
              Campus Life Gallery
            </h2>
            <p className="text-base sm:text-lg" style={{ color: theme.textSecondary }}>
              Glimpses of our vibrant school community
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {featuredGallery.map((image: any, index: number) => (
              <div
                key={image.id}
                className="group relative rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                onClick={() => window.location.href=`/${schoolId}/gallery`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3">
                    <p className="text-white font-medium text-xs sm:text-sm line-clamp-2">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 md:mt-8">
            <Link
              href={`/${schoolId}/gallery`}
              className="inline-block px-5 py-3 md:px-6 md:py-3 font-semibold rounded-lg text-white transition-colors hover:opacity-90"
              style={{ background: theme.primary }}
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4" style={{ color: theme.text }}>
            Ready to Join Us?
          </h2>
          <p className="text-base sm:text-lg mb-6 md:mb-8" style={{ color: theme.textSecondary }}>
            Start your journey with {theme.name} today
          </p>
          <Link
            href={`/${schoolId}/admissions`}
            className="inline-block px-6 py-3 md:px-8 md:py-3 font-semibold rounded-lg text-white transition-colors hover:opacity-90"
            style={{ background: theme.primary }}
          >
            Apply for Admission
          </Link>
        </div>
      </section>
    </div>
  );
}

export default function Page({ params }: { params: Promise<{ schoolId: SchoolId }> }) {
  const { schoolId } = React.use(params);
  return (
    <SchoolProvider schoolId={schoolId}>
      <SchoolLayout schoolId={schoolId}>
        <SchoolHomePage />
      </SchoolLayout>
    </SchoolProvider>
  );
}
