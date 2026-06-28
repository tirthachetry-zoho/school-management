import Link from 'next/link';
import { SCHOOL_IDS, schoolThemes, schoolSettings } from '@/lib/schools';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            School Management Platform
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Select a school to visit their website
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {SCHOOL_IDS.map((schoolId) => {
            const theme = schoolThemes[schoolId];
            const settings = schoolSettings[schoolId];
            return (
              <Link
                key={schoolId}
                href={`/${schoolId}`}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                style={{
                  background: theme.gradient,
                }}
              >
                <div className="p-8 text-white">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: theme.fontFamily }}>
                        {theme.name}
                      </h2>
                      <p className="text-white/90 text-sm">{settings.motto}</p>
                    </div>
                  </div>

                  <p className="text-white/80 mb-6 line-clamp-2">
                    {settings.address}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-6 text-sm">
                      <div>
                        <span className="font-semibold">{settings.totalStudents}</span>
                        <span className="text-white/70 ml-1">Students</span>
                      </div>
                      <div>
                        <span className="font-semibold">{settings.totalTeachers}</span>
                        <span className="text-white/70 ml-1">Teachers</span>
                      </div>
                    </div>
                    <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-90">
                      Visit Website
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
