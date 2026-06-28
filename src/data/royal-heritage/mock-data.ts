import { Student, Teacher, Parent, Event, GalleryImage, NewsArticle, FeeRecord, AttendanceRecord, Homework, Exam, Result } from '@/lib/types';

export const students: Student[] = [
  { id: 's1', firstName: 'William', lastName: 'Cumberland', email: 'william.c@royalheritage.ac.uk', phone: '+44 20 7946 1001', dateOfBirth: '2010-06-15', grade: '10', section: 'A', rollNumber: '101', parentId: 'p1', enrollmentDate: '2023-09-01', status: 'active' },
  { id: 's2', firstName: 'Victoria', lastName: 'Sterling', email: 'victoria.s@royalheritage.ac.uk', phone: '+44 20 7946 1002', dateOfBirth: '2010-11-22', grade: '10', section: 'A', rollNumber: '102', parentId: 'p2', enrollmentDate: '2023-09-01', status: 'active' },
  { id: 's3', firstName: 'Arthur', lastName: 'Pendleton', email: 'arthur.p@royalheritage.ac.uk', phone: '+44 20 7946 1003', dateOfBirth: '2011-03-10', grade: '9', section: 'B', rollNumber: '201', parentId: 'p3', enrollmentDate: '2022-09-01', status: 'active' },
  { id: 's4', firstName: 'Elizabeth', lastName: 'Windsor', email: 'elizabeth.w@royalheritage.ac.uk', phone: '+44 20 7946 1004', dateOfBirth: '2009-12-30', grade: '11', section: 'A', rollNumber: '301', parentId: 'p4', enrollmentDate: '2021-09-01', status: 'active' },
  { id: 's5', firstName: 'Henry', lastName: 'Tudor', email: 'henry.t@royalheritage.ac.uk', phone: '+44 20 7946 1005', dateOfBirth: '2011-07-18', grade: '9', section: 'A', rollNumber: '202', parentId: 'p5', enrollmentDate: '2023-09-01', status: 'active' },
];

export const teachers: Teacher[] = [
  { id: 't1', firstName: 'Edward', lastName: 'Whitmore', email: 'e.whitmore@royalheritage.ac.uk', phone: '+44 20 7946 2001', subject: 'History', department: 'Humanities', joinDate: '1995-09-01', status: 'active', bio: 'Headmaster with 30 years of experience in classical education and leadership.', qualification: 'Ph.D. History, Oxford' },
  { id: 't2', firstName: 'Margaret', lastName: 'Thatcher', email: 'm.thatcher@royalheritage.ac.uk', phone: '+44 20 7946 2002', subject: 'Mathematics', department: 'STEM', joinDate: '2005-09-01', status: 'active', bio: 'Former Cambridge mathematics professor with a passion for classical geometry.', qualification: 'Ph.D. Mathematics, Cambridge' },
  { id: 't3', firstName: 'Charles', lastName: 'Darwin', email: 'c.darwin@royalheritage.ac.uk', phone: '+44 20 7946 2003', subject: 'Biology', department: 'Sciences', joinDate: '2010-09-01', status: 'active', bio: 'Expert in evolutionary biology and natural sciences with field research experience.', qualification: 'Ph.D. Biology, Imperial College' },
  { id: 't4', firstName: 'Jane', lastName: 'Austen', email: 'j.austen@royalheritage.ac.uk', phone: '+44 20 7946 2004', subject: 'English Literature', department: 'Humanities', joinDate: '2012-09-01', status: 'active', bio: 'Scholar of 19th-century literature and creative writing specialist.', qualification: 'M.A. English Literature, Oxford' },
  { id: 't5', firstName: 'Isaac', lastName: 'Newton', email: 'i.newton@royalheritage.ac.uk', phone: '+44 20 7946 2005', subject: 'Physics', department: 'STEM', joinDate: '2015-09-01', status: 'active', bio: 'Physics enthusiast focusing on classical mechanics and astronomy.', qualification: 'Ph.D. Physics, Cambridge' },
];

export const parents: Parent[] = [
  { id: 'p1', firstName: 'James', lastName: 'Cumberland', email: 'j.cumberland@email.com', phone: '+44 20 7946 3001', childrenIds: ['s1'], address: '15 Kensington Palace Gardens, London', occupation: 'Banker' },
  { id: 'p2', firstName: 'Diana', lastName: 'Sterling', email: 'd.sterling@email.com', phone: '+44 20 7946 3002', childrenIds: ['s2'], address: '22 Buckingham Gate, London', occupation: 'Lawyer' },
  { id: 'p3', firstName: 'Richard', lastName: 'Pendleton', email: 'r.pendleton@email.com', phone: '+44 20 7946 3003', childrenIds: ['s3'], address: '8 St James Square, London', occupation: 'Diplomat' },
  { id: 'p4', firstName: 'Philip', lastName: 'Windsor', email: 'p.windsor@email.com', phone: '+44 20 7946 3004', childrenIds: ['s4'], address: '31 Pall Mall, London', occupation: 'Business Executive' },
  { id: 'p5', firstName: 'Catherine', lastName: 'Tudor', email: 'c.tudor@email.com', phone: '+44 20 7946 3005', childrenIds: ['s5'], address: '5 Carlton House Terrace, London', occupation: 'Doctor' },
];

export const events: Event[] = [
  { id: 'e1', title: 'Annual Founder\'s Day Ceremony', description: 'Commemorating the founding of Royal Heritage School with traditional ceremonies and awards.', date: '2026-03-20', category: 'cultural', isFeatured: true },
  { id: 'e2', title: 'Debating Championship', description: 'Inter-school debating competition focusing on classical rhetoric and modern issues.', date: '2026-04-15', category: 'academic', isFeatured: true },
  { id: 'e3', title: 'Cricket Tournament', description: 'Annual cricket tournament against rival schools.', date: '2026-05-05', endDate: '2026-05-10', category: 'sports', isFeatured: true },
  { id: 'e4', title: 'Classical Music Concert', description: 'Student performances of classical compositions.', date: '2026-06-12', category: 'cultural', isFeatured: true },
];

export const gallery: GalleryImage[] = [
  { id: 'g1', url: 'https://placehold.co/600x400/7c2d12/ffffff?text=Royal+Campus', caption: 'Historic Main Building', category: 'campus', uploadDate: '2025-09-01' },
  { id: 'g2', url: 'https://placehold.co/600x400/ea580c/ffffff?text=Library', caption: 'The Whitmore Library', category: 'facilities', uploadDate: '2025-09-15' },
  { id: 'g3', url: 'https://placehold.co/600x400/fbbf24/000000?text=Founder+Day', caption: 'Founder\'s Day Celebration', category: 'events', uploadDate: '2025-10-20' },
  { id: 'g4', url: 'https://placehold.co/600x400/ea580c/ffffff?text=Hall', caption: 'Great Hall', category: 'facilities', uploadDate: '2025-11-05' },
];

export const news: NewsArticle[] = [
  { id: 'n1', title: 'Royal Heritage Student Wins National Latin Competition', content: 'Master William Cumberland has secured first place in the National Latin Translation Competition, continuing our tradition of academic excellence.', author: 'Edward Whitmore', publishDate: '2026-01-22', category: 'achievement', isFeatured: true },
  { id: 'n2', title: 'Restoration of Historic Chapel Complete', content: 'The school chapel, dating back to 1952, has undergone extensive restoration preserving its architectural heritage.', author: 'Admin Office', publishDate: '2026-01-15', category: 'infrastructure', isFeatured: true },
];

export const fees: FeeRecord[] = [
  { id: 'f1', studentId: 's1', amount: 15000, type: 'tuition', dueDate: '2026-01-15', paidDate: '2026-01-10', status: 'paid', academicYear: '2025-2026' },
  { id: 'f2', studentId: 's2', amount: 15000, type: 'tuition', dueDate: '2026-01-15', status: 'pending', academicYear: '2025-2026' },
  { id: 'f3', studentId: 's3', amount: 15000, type: 'tuition', dueDate: '2026-01-15', paidDate: '2026-01-14', status: 'paid', academicYear: '2025-2026' },
  { id: 'f4', studentId: 's4', amount: 2000, type: 'exam', dueDate: '2026-02-01', status: 'pending', academicYear: '2025-2026' },
];

export const attendance: AttendanceRecord[] = [
  { id: 'a1', studentId: 's1', date: '2026-01-20', status: 'present' },
  { id: 'a2', studentId: 's2', date: '2026-01-20', status: 'present' },
  { id: 'a3', studentId: 's3', date: '2026-01-20', status: 'present' },
  { id: 'a4', studentId: 's4', date: '2026-01-20', status: 'late' },
  { id: 'a5', studentId: 's5', date: '2026-01-20', status: 'present' },
  { id: 'a6', studentId: 's1', date: '2026-01-21', status: 'present' },
  { id: 'a7', studentId: 's2', date: '2026-01-21', status: 'excused' },
];

export const homework: Homework[] = [
  { id: 'h1', title: 'Latin Translation Exercise', description: 'Translate Book IV of Virgil\'s Aeneid from Latin to English.', subject: 'Latin', grade: '10', assignedBy: 't4', assignedDate: '2026-01-18', dueDate: '2026-01-28', status: 'active' },
  { id: 'h2', title: 'Calculus Problem Set', description: 'Complete differentiation and integration exercises.', subject: 'Mathematics', grade: '10', assignedBy: 't2', assignedDate: '2026-01-17', dueDate: '2026-01-25', status: 'active' },
];

export const exams: Exam[] = [
  { id: 'ex1', name: 'Mid-Term History', subject: 'History', grade: '10', date: '2026-02-15', duration: '2 hours', totalMarks: 100, type: 'midterm' },
  { id: 'ex2', name: 'Mid-Term Mathematics', subject: 'Mathematics', grade: '10', date: '2026-02-18', duration: '2 hours', totalMarks: 100, type: 'midterm' },
];

export const results: Result[] = [
  { id: 'r1', studentId: 's1', examId: 'ex1', subject: 'History', marksObtained: 98, totalMarks: 100, grade: 'A+' },
  { id: 'r2', studentId: 's2', examId: 'ex1', subject: 'History', marksObtained: 92, totalMarks: 100, grade: 'A' },
  { id: 'r3', studentId: 's1', examId: 'ex2', subject: 'Mathematics', marksObtained: 95, totalMarks: 100, grade: 'A' },
];
