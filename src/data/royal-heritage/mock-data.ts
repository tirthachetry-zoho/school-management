import { Student, Teacher, Parent, Event, GalleryImage, NewsArticle, FeeRecord, AttendanceRecord, Homework, Exam, Result } from '@/lib/types';

export const students: Student[] = [
  { id: 's1', firstName: 'Aditya', lastName: 'Roy', email: 'aditya.r@royalheritage.in', phone: '+91 98765 63201', dateOfBirth: '2010-06-15', grade: '10', section: 'A', rollNumber: '101', parentId: 'p1', enrollmentDate: '2023-09-01', status: 'active' },
  { id: 's2', firstName: 'Riya', lastName: 'Chatterjee', email: 'riya.c@royalheritage.in', phone: '+91 98765 63202', dateOfBirth: '2010-11-22', grade: '10', section: 'A', rollNumber: '102', parentId: 'p2', enrollmentDate: '2023-09-01', status: 'active' },
  { id: 's3', firstName: 'Arjun', lastName: 'Mukherjee', email: 'arjun.m@royalheritage.in', phone: '+91 98765 63203', dateOfBirth: '2011-03-10', grade: '9', section: 'B', rollNumber: '201', parentId: 'p3', enrollmentDate: '2022-09-01', status: 'active' },
  { id: 's4', firstName: 'Sanya', lastName: 'Banerjee', email: 'sanya.b@royalheritage.in', phone: '+91 98765 63204', dateOfBirth: '2009-12-30', grade: '11', section: 'A', rollNumber: '301', parentId: 'p4', enrollmentDate: '2021-09-01', status: 'active' },
  { id: 's5', firstName: 'Rohan', lastName: 'Das', email: 'rohan.d@royalheritage.in', phone: '+91 98765 63205', dateOfBirth: '2011-07-18', grade: '9', section: 'A', rollNumber: '202', parentId: 'p5', enrollmentDate: '2023-09-01', status: 'active' },
];

export const teachers: Teacher[] = [
  { id: 't1', firstName: 'Vikram', lastName: 'Singh', email: 'vikram.s@royalheritage.in', phone: '+91 98765 64201', subject: 'History', department: 'Humanities', joinDate: '1995-09-01', status: 'active', bio: 'Headmaster with 30 years of experience in classical education and leadership.', qualification: 'Ph.D. History, JNU' },
  { id: 't2', firstName: 'Shreya', lastName: 'Ghosh', email: 'shreya.g@royalheritage.in', phone: '+91 98765 64202', subject: 'Mathematics', department: 'STEM', joinDate: '2005-09-01', status: 'active', bio: 'Former IIT mathematics professor with a passion for classical geometry.', qualification: 'Ph.D. Mathematics, IIT' },
  { id: 't3', firstName: 'Ravi', lastName: 'Sharma', email: 'ravi.s@royalheritage.in', phone: '+91 98765 64203', subject: 'Biology', department: 'Sciences', joinDate: '2010-09-01', status: 'active', bio: 'Expert in evolutionary biology and natural sciences with field research experience.', qualification: 'Ph.D. Biology, Delhi University' },
  { id: 't4', firstName: 'Madhuri', lastName: 'Sen', email: 'madhuri.s@royalheritage.in', phone: '+91 98765 64204', subject: 'English Literature', department: 'Humanities', joinDate: '2012-09-01', status: 'active', bio: 'Scholar of 19th-century literature and creative writing specialist.', qualification: 'M.A. English Literature, Jadavpur University' },
  { id: 't5', firstName: 'Amit', lastName: 'Bose', email: 'amit.b@royalheritage.in', phone: '+91 98765 64205', subject: 'Physics', department: 'STEM', joinDate: '2015-09-01', status: 'active', bio: 'Physics enthusiast focusing on classical mechanics and astronomy.', qualification: 'Ph.D. Physics, IISc' },
];

export const parents: Parent[] = [
  { id: 'p1', firstName: 'Rajat', lastName: 'Roy', email: 'rajat.roy@email.com', phone: '+91 98765 65201', childrenIds: ['s1'], address: 'Alipore, Kolkata', occupation: 'Banker' },
  { id: 'p2', firstName: 'Priyanka', lastName: 'Chatterjee', email: 'priyanka.chatterjee@email.com', phone: '+91 98765 65202', childrenIds: ['s2'], address: 'Ballygunge, Kolkata', occupation: 'Lawyer' },
  { id: 'p3', firstName: 'Sourav', lastName: 'Mukherjee', email: 'sourav.mukherjee@email.com', phone: '+91 98765 65203', childrenIds: ['s3'], address: 'Salt Lake, Kolkata', occupation: 'Diplomat' },
  { id: 'p4', firstName: 'Deepak', lastName: 'Banerjee', email: 'deepak.banerjee@email.com', phone: '+91 98765 65204', childrenIds: ['s4'], address: 'Park Street, Kolkata', occupation: 'Business Executive' },
  { id: 'p5', firstName: 'Rita', lastName: 'Das', email: 'rita.das@email.com', phone: '+91 98765 65205', childrenIds: ['s5'], address: 'Gariahat, Kolkata', occupation: 'Doctor' },
];

export const events: Event[] = [
  { id: 'e1', title: 'Annual Founder\'s Day Ceremony', description: 'Commemorating the founding of Royal Heritage School with traditional ceremonies and awards.', date: '2026-03-20', category: 'cultural', isFeatured: true },
  { id: 'e2', title: 'Debating Championship', description: 'Inter-school debating competition focusing on classical rhetoric and modern issues.', date: '2026-04-15', category: 'academic', isFeatured: true },
  { id: 'e3', title: 'Cricket Tournament', description: 'Annual cricket tournament against rival schools.', date: '2026-05-05', endDate: '2026-05-10', category: 'sports', isFeatured: true },
  { id: 'e4', title: 'Classical Music Concert', description: 'Student performances of classical compositions.', date: '2026-06-12', category: 'cultural', isFeatured: true },
];

export const gallery: GalleryImage[] = [
  { id: 'g1', url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop', caption: 'Historic Heritage School Building', category: 'campus', uploadDate: '2025-09-01' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop', caption: 'Traditional Library with Rare Collections', category: 'facilities', uploadDate: '2025-09-15' },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop', caption: 'Founder Day Celebration Ceremony', category: 'cultural', uploadDate: '2025-10-20' },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop', caption: 'Grand Assembly Hall', category: 'facilities', uploadDate: '2025-11-05' },
  { id: 'g5', url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop', caption: 'Cricket Team Practice Session', category: 'sports', uploadDate: '2025-12-10' },
  { id: 'g6', url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop', caption: 'Classical Music Recital', category: 'cultural', uploadDate: '2026-01-15' },
  { id: 'g7', url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop', caption: 'Debate Competition Finals', category: 'academics', uploadDate: '2026-02-20' },
  { id: 'g8', url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop', caption: 'Traditional Art Classes', category: 'cultural', uploadDate: '2026-03-10' },
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
