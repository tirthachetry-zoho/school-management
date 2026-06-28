'use client';

import React from 'react';
import { SchoolId } from '@/lib/types';
import { SchoolProvider, useSchool } from '@/components/school/SchoolProvider';
import { SchoolLayout } from '@/components/school/SchoolLayout';
import { Card, CardContent } from '@/components/ui/Card';
import { Input, Textarea } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

function ContactPage() {
  const { theme, settings } = useSchool();

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center" style={{ color: theme.text }}>
            Contact Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent>
                <h2 className="text-xl font-bold mb-6" style={{ color: theme.primary }}>
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p style={{ color: theme.textSecondary }}>{settings.address}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p style={{ color: theme.textSecondary }}>{settings.phone}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p style={{ color: theme.textSecondary }}>{settings.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h2 className="text-xl font-bold mb-6" style={{ color: theme.primary }}>
                  Office Hours
                </h2>
                <div className="space-y-3" style={{ color: theme.textSecondary }}>
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent>
              <h2 className="text-xl font-bold mb-6" style={{ color: theme.primary }}>
                Send us a Message
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label="First Name" placeholder="John" />
                  <Input label="Last Name" placeholder="Doe" />
                </div>
                <Input label="Email" type="email" placeholder="john@example.com" />
                <Input label="Subject" placeholder="How can we help?" />
                <Textarea
                  label="Message"
                  placeholder="Your message..."
                  rows={5}
                />
                <Button
                  type="submit"
                  style={{ background: theme.primary, color: 'white' }}
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
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
        <ContactPage />
      </SchoolLayout>
    </SchoolProvider>
  );
}
