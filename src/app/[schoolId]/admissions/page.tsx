'use client';

import React from 'react';
import { SchoolId } from '@/lib/types';
import { SchoolProvider, useSchool } from '@/components/school/SchoolProvider';
import { SchoolLayout } from '@/components/school/SchoolLayout';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

function AdmissionsPage() {
  const { theme, settings } = useSchool();

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center" style={{ color: theme.text }}>
            Admissions
          </h1>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary }}>
              Welcome to {settings.schoolName}
            </h2>
            <p className="text-lg mb-4" style={{ color: theme.textSecondary }}>
              We are delighted that you are considering {settings.schoolName} for your child's education.
              Our admissions process is designed to be straightforward and transparent.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6" style={{ color: theme.primary }}>
              Admission Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent>
                  <div className="font-bold text-lg mb-2" style={{ color: theme.primary }}>
                    Step 1
                  </div>
                  <h3 className="font-semibold mb-2">Submit Application</h3>
                  <p className="text-sm" style={{ color: theme.textSecondary }}>
                    Complete the online application form with all required documents.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="font-bold text-lg mb-2" style={{ color: theme.primary }}>
                    Step 2
                  </div>
                  <h3 className="font-semibold mb-2">Entrance Assessment</h3>
                  <p className="text-sm" style={{ color: theme.textSecondary }}>
                    Students take an entrance assessment to evaluate academic readiness.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="font-bold text-lg mb-2" style={{ color: theme.primary }}>
                    Step 3
                  </div>
                  <h3 className="font-semibold mb-2">Family Interview</h3>
                  <p className="text-sm" style={{ color: theme.textSecondary }}>
                    Meet with our admissions team to discuss your child's needs and goals.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="font-bold text-lg mb-2" style={{ color: theme.primary }}>
                    Step 4
                  </div>
                  <h3 className="font-semibold mb-2">Admission Decision</h3>
                  <p className="text-sm" style={{ color: theme.textSecondary }}>
                    Receive notification of admission decision within 2 weeks.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6" style={{ color: theme.primary }}>
              Required Documents
            </h2>
            <Card>
              <CardContent>
                <ul className="list-disc list-inside space-y-2" style={{ color: theme.textSecondary }}>
                  <li>Birth certificate</li>
                  <li>Previous academic transcripts (last 2 years)</li>
                  <li>Passport-size photographs (2 copies)</li>
                  <li>Proof of residence</li>
                  <li>Medical records and immunization certificate</li>
                  <li>Parent/guardian identification</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6" style={{ color: theme.primary }}>
              Grade Levels
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Grade 8', 'Grade 9', 'Grade 10', 'Grade 11'].map((grade) => (
                <div
                  key={grade}
                  className="p-4 rounded-lg text-center font-semibold"
                  style={{ backgroundColor: theme.surface, color: theme.text }}
                >
                  {grade}
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary }}>
              Ready to Apply?
            </h2>
            <p className="text-lg mb-6" style={{ color: theme.textSecondary }}>
              Start your application journey today
            </p>
            <Button size="lg" style={{ background: theme.primary, color: 'white' }}>
              Start Application
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default function Page({ params }: { params: { schoolId: SchoolId } }) {
  return (
    <SchoolProvider schoolId={params.schoolId}>
      <SchoolLayout schoolId={params.schoolId}>
        <AdmissionsPage />
      </SchoolLayout>
    </SchoolProvider>
  );
}
