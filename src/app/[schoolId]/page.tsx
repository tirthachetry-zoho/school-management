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
  const featuredNews = news.filter((n: any) => n.isFeatured);
  const featuredEvents = events.filter((e: any) => e.isFeatured);

  return (
    <div>
      <section
        className="relative py-24 px-4"
        style={{
          background: theme.gradient,
        }}
      >
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: theme.fontFamily }}>
            {website.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            {website.heroSubtitle}
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href={`/${schoolId}/admissions`}
              className="px-8 py-3 bg-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
              style={{ color: theme.primary }}
            >
              Apply Now
            </Link>
            <Link
              href={`/${schoolId}/about`}
              className="px-8 py-3 border-2 border-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4" style={{ backgroundColor: theme.surface }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: theme.primary }}>
                {settings.totalStudents}
              </div>
              <div className="text-gray-600">Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: theme.primary }}>
                {settings.totalTeachers}
              </div>
              <div className="text-gray-600">Teachers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: theme.primary }}>
                {settings.establishedYear}
              </div>
              <div className="text-gray-600">Established</div>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: theme.text }}>
              About Our School
            </h2>
            <p className="text-lg" style={{ color: theme.textSecondary }}>
              {website.aboutContent}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: theme.text }}>
                Our Mission
              </h3>
              <p style={{ color: theme.textSecondary }}>{website.missionStatement}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: theme.text }}>
                Our Vision
              </h3>
              <p style={{ color: theme.textSecondary }}>{website.visionStatement}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: theme.text }}>
            Latest News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredNews.slice(0, 3).map((item: any) => (
              <Card key={item.id}>
                <CardContent>
                  <div className="text-sm text-gray-500 mb-2">{item.publishDate}</div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 line-clamp-3">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4" style={{ backgroundColor: theme.surface }}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: theme.text }}>
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.slice(0, 3).map((item: any) => (
              <Card key={item.id}>
                <CardContent>
                  <div className="text-sm font-semibold mb-2" style={{ color: theme.primary }}>
                    {item.date}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 line-clamp-2">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: theme.text }}>
            Ready to Join Us?
          </h2>
          <p className="text-lg mb-8" style={{ color: theme.textSecondary }}>
            Start your journey with {theme.name} today
          </p>
          <Link
            href={`/${schoolId}/admissions`}
            className="inline-block px-8 py-3 font-semibold rounded-lg text-white transition-colors hover:opacity-90"
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
