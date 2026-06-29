import { Student, Teacher, Parent, Event, GalleryImage, NewsArticle, FeeRecord, AttendanceRecord, Homework, Exam, Result } from '@/lib/types';

export const students: Student[] = [
  { id: 's1', firstName: 'Aditi', lastName: 'Sharma', email: 'aditi.s@greenvalley.in', phone: '+91 98765 53201', dateOfBirth: '2010-05-20', grade: '10', section: 'A', rollNumber: '101', parentId: 'p1', enrollmentDate: '2023-09-01', status: 'active' },
  { id: 's2', firstName: 'Rahul', lastName: 'Patel', email: 'rahul.p@greenvalley.in', phone: '+91 98765 53202', dateOfBirth: '2010-09-14', grade: '10', section: 'B', rollNumber: '102', parentId: 'p2', enrollmentDate: '2023-09-01', status: 'active' },
  { id: 's3', firstName: 'Sneha', lastName: 'Nair', email: 'sneha.n@greenvalley.in', phone: '+91 98765 53203', dateOfBirth: '2011-02-28', grade: '9', section: 'A', rollNumber: '201', parentId: 'p3', enrollmentDate: '2022-09-01', status: 'active' },
  { id: 's4', firstName: 'Arnav', lastName: 'Iyer', email: 'arnav.i@greenvalley.in', phone: '+91 98765 53204', dateOfBirth: '2009-12-03', grade: '11', section: 'A', rollNumber: '301', parentId: 'p4', enrollmentDate: '2021-09-01', status: 'active' },
  { id: 's5', firstName: 'Kavya', lastName: 'Reddy', email: 'kavya.r@greenvalley.in', phone: '+91 98765 53205', dateOfBirth: '2011-08-17', grade: '9', section: 'B', rollNumber: '202', parentId: 'p5', enrollmentDate: '2023-09-01', status: 'active' },
  { id: 's6', firstName: 'Vivaan', lastName: 'Das', email: 'vivaan.d@greenvalley.in', phone: '+91 98765 53206', dateOfBirth: '2012-04-09', grade: '8', section: 'A', rollNumber: '401', parentId: 'p1', enrollmentDate: '2023-09-01', status: 'active' },
];

export const teachers: Teacher[] = [
  { id: 't1', firstName: 'Rajesh', lastName: 'Kumar', email: 'rajesh.k@greenvalley.in', phone: '+91 98765 54201', subject: 'Environmental Science', department: 'Sciences', joinDate: '2008-08-01', status: 'active', bio: 'Principal and environmental educator with a passion for sustainable learning.', qualification: 'Ph.D. Environmental Education' },
  { id: 't2', firstName: 'Sunita', lastName: 'Menon', email: 'sunita.m@greenvalley.in', phone: '+91 98765 54202', subject: 'Mathematics', department: 'STEM', joinDate: '2016-08-01', status: 'active', bio: 'Makes mathematics come alive through real-world problem solving.', qualification: 'M.Sc. Applied Mathematics' },
  { id: 't3', firstName: 'Venkat', lastName: 'Rao', email: 'venkat.r@greenvalley.in', phone: '+91 98765 54203', subject: 'World Languages', department: 'Humanities', joinDate: '2014-08-01', status: 'active', bio: 'Trilingual educator specializing in immersive language learning.', qualification: 'M.A. Linguistics' },
  { id: 't4', firstName: 'Lakshmi', lastName: 'Sharma', email: 'lakshmi.s@greenvalley.in', phone: '+91 98765 54204', subject: 'Biology', department: 'Sciences', joinDate: '2017-08-01', status: 'active', bio: 'Marine biology enthusiast bringing ocean conservation to the classroom.', qualification: 'M.Sc. Marine Biology' },
  { id: 't5', firstName: 'Deepak', lastName: 'Verma', email: 'deepak.v@greenvalley.in', phone: '+91 98765 54205', subject: 'Art & Design', department: 'Creative Arts', joinDate: '2019-08-01', status: 'active', bio: 'Contemporary artist integrating digital and traditional media.', qualification: 'M.F.A. Visual Arts' },
];

export const parents: Parent[] = [
  { id: 'p1', firstName: 'Ramesh', lastName: 'Sharma', email: 'ramesh.sharma@email.com', phone: '+91 98765 55201', childrenIds: ['s1', 's6'], address: 'Electronic City, Bangalore', occupation: 'Software Engineer' },
  { id: 'p2', firstName: 'Meena', lastName: 'Patel', email: 'meena.patel@email.com', phone: '+91 98765 55202', childrenIds: ['s2'], address: 'Koramangala, Bangalore', occupation: 'Doctor' },
  { id: 'p3', firstName: 'Suresh', lastName: 'Nair', email: 'suresh.nair@email.com', phone: '+91 98765 55203', childrenIds: ['s3'], address: 'Indiranagar, Bangalore', occupation: 'Software Developer' },
  { id: 'p4', firstName: 'Anita', lastName: 'Iyer', email: 'anita.iyer@email.com', phone: '+91 98765 55204', childrenIds: ['s4'], address: 'HSR Layout, Bangalore', occupation: 'Journalist' },
  { id: 'p5', firstName: 'Krishna', lastName: 'Reddy', email: 'krishna.reddy@email.com', phone: '+91 98765 55205', childrenIds: ['s5'], address: 'Whitefield, Bangalore', occupation: 'Musician' },
];

export const events: Event[] = [
  { id: 'e1', title: 'Earth Day Eco-Fair', description: 'Annual environmental awareness event featuring student-led sustainability projects.', date: '2026-04-22', category: 'cultural', isFeatured: true },
  { id: 'e2', title: 'International Food Festival', description: 'Celebrating global cuisines and cultures represented in our diverse community.', date: '2026-03-25', category: 'cultural', isFeatured: true },
  { id: 'e3', title: 'Nature Trek & Outdoor Learning', description: 'Full-day outdoor education experience at Saguaro National Park.', date: '2026-05-10', category: 'academic', isFeatured: true },
  { id: 'e4', title: 'Mid-Year Assessments', description: 'Comprehensive evaluations for all grades.', date: '2026-02-15', endDate: '2026-02-28', category: 'exam', isFeatured: false },
];

export const gallery: GalleryImage[] = [
  { id: 'g1', url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=600&fit=crop', caption: 'Eco-Friendly School Campus', category: 'campus', uploadDate: '2025-09-01' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop', caption: 'Botanical Garden Learning Center', category: 'facilities', uploadDate: '2025-09-15' },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop', caption: 'International Food Festival 2025', category: 'festivals', uploadDate: '2025-10-20' },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop', caption: 'Art and Design Studio', category: 'facilities', uploadDate: '2025-11-05' },
  { id: 'g5', url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop', caption: 'Yoga and Meditation Session', category: 'wellness', uploadDate: '2025-12-10' },
  { id: 'g6', url: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&h=600&fit=crop', caption: 'Environmental Science Field Trip', category: 'academics', uploadDate: '2026-01-15' },
  { id: 'g7', url: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69799?w=800&h=600&fit=crop', caption: 'Organic School Garden', category: 'facilities', uploadDate: '2026-02-20' },
  { id: 'g8', url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop', caption: 'Sports and Athletics Training', category: 'sports', uploadDate: '2026-03-10' },
];

export const news: NewsArticle[] = [
  { id: 'n1', title: 'Green Valley Wins National Sustainability Award', content: 'Our school has been recognized with the prestigious National Green School Award for our zero-waste initiative and solar-powered campus.', author: 'Robert Chen', publishDate: '2026-01-18', category: 'achievement', isFeatured: true },
  { id: 'n2', title: 'New Organic School Garden Launches', content: 'Students will grow their own vegetables in our new 5-acre organic garden, learning about sustainable agriculture firsthand.', author: 'Admin Office', publishDate: '2026-01-10', category: 'infrastructure', isFeatured: true },
];

export const fees: FeeRecord[] = [
  { id: 'f1', studentId: 's1', amount: 4500, type: 'tuition', dueDate: '2026-01-15', paidDate: '2026-01-12', status: 'paid', academicYear: '2025-2026' },
  { id: 'f2', studentId: 's2', amount: 4500, type: 'tuition', dueDate: '2026-01-15', status: 'pending', academicYear: '2025-2026' },
  { id: 'f3', studentId: 's3', amount: 4500, type: 'tuition', dueDate: '2026-01-15', paidDate: '2026-01-14', status: 'paid', academicYear: '2025-2026' },
  { id: 'f4', studentId: 's4', amount: 400, type: 'exam', dueDate: '2026-02-01', status: 'pending', academicYear: '2025-2026' },
];

export const attendance: AttendanceRecord[] = [
  { id: 'a1', studentId: 's1', date: '2026-01-20', status: 'present' },
  { id: 'a2', studentId: 's2', date: '2026-01-20', status: 'present' },
  { id: 'a3', studentId: 's3', date: '2026-01-20', status: 'present' },
  { id: 'a4', studentId: 's4', date: '2026-01-20', status: 'late' },
  { id: 'a5', studentId: 's5', date: '2026-01-20', status: 'present' },
  { id: 'a6', studentId: 's1', date: '2026-01-21', status: 'absent' },
  { id: 'a7', studentId: 's2', date: '2026-01-21', status: 'present' },
];

export const homework: Homework[] = [
  { id: 'h1', title: 'Ecosystem Food Web Project', description: 'Create a detailed food web diagram for a local ecosystem.', subject: 'Environmental Science', grade: '10', assignedBy: 't1', assignedDate: '2026-01-18', dueDate: '2026-01-28', status: 'active' },
  { id: 'h2', title: 'Statistics Problem Set', description: 'Complete the probability and statistics worksheet.', subject: 'Mathematics', grade: '10', assignedBy: 't2', assignedDate: '2026-01-17', dueDate: '2026-01-25', status: 'active' },
];

export const exams: Exam[] = [
  { id: 'ex1', name: 'Mid-Term Environmental Science', subject: 'Environmental Science', grade: '10', date: '2026-02-15', duration: '2 hours', totalMarks: 100, type: 'midterm' },
  { id: 'ex2', name: 'Mid-Term Mathematics', subject: 'Mathematics', grade: '10', date: '2026-02-18', duration: '2 hours', totalMarks: 100, type: 'midterm' },
];

export const results: Result[] = [
  { id: 'r1', studentId: 's1', examId: 'ex1', subject: 'Environmental Science', marksObtained: 95, totalMarks: 100, grade: 'A' },
  { id: 'r2', studentId: 's2', examId: 'ex1', subject: 'Environmental Science', marksObtained: 82, totalMarks: 100, grade: 'B' },
  { id: 'r3', studentId: 's1', examId: 'ex2', subject: 'Mathematics', marksObtained: 78, totalMarks: 100, grade: 'B' },
];