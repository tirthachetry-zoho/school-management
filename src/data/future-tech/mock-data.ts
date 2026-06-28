import { Student, Teacher, Parent, Event, GalleryImage, NewsArticle, FeeRecord, AttendanceRecord, Homework, Exam, Result } from '@/lib/types';

export const students: Student[] = [
  { id: 's1', firstName: 'Alex', lastName: 'Chen', email: 'alex.c@futuretechacademy.io', phone: '+1 (555) 421-7801', dateOfBirth: '2010-04-20', grade: '10', section: 'A', rollNumber: '101', parentId: 'p1', enrollmentDate: '2023-09-01', status: 'active' },
  { id: 's2', firstName: 'Sofia', lastName: 'Rodriguez', email: 'sofia.r@futuretechacademy.io', phone: '+1 (555) 421-7802', dateOfBirth: '2010-08-15', grade: '10', section: 'A', rollNumber: '102', parentId: 'p2', enrollmentDate: '2023-09-01', status: 'active' },
  { id: 's3', firstName: 'Marcus', lastName: 'Johnson', email: 'marcus.j@futuretechacademy.io', phone: '+1 (555) 421-7803', dateOfBirth: '2011-01-10', grade: '9', section: 'B', rollNumber: '201', parentId: 'p3', enrollmentDate: '2022-09-01', status: 'active' },
  { id: 's4', firstName: 'Emma', lastName: 'Kim', email: 'emma.k@futuretechacademy.io', phone: '+1 (555) 421-7804', dateOfBirth: '2009-11-25', grade: '11', section: 'A', rollNumber: '301', parentId: 'p4', enrollmentDate: '2021-09-01', status: 'active' },
  { id: 's5', firstName: 'Jordan', lastName: 'Patel', email: 'jordan.p@futuretechacademy.io', phone: '+1 (555) 421-7805', dateOfBirth: '2011-06-18', grade: '9', section: 'A', rollNumber: '202', parentId: 'p5', enrollmentDate: '2023-09-01', status: 'active' },
];

export const teachers: Teacher[] = [
  { id: 't1', firstName: 'Sarah', lastName: 'Nakamura', email: 's.nakamura@futuretechacademy.io', phone: '+1 (555) 421-7901', subject: 'Computer Science', department: 'Technology', joinDate: '2018-09-01', status: 'active', bio: 'Former Google engineer with expertise in AI and machine learning. Passionate about teaching the next generation of tech leaders.', qualification: 'Ph.D. Computer Science, Stanford' },
  { id: 't2', firstName: 'David', lastName: 'Park', email: 'd.park@futuretechacademy.io', phone: '+1 (555) 421-7902', subject: 'Robotics', department: 'Engineering', joinDate: '2019-09-01', status: 'active', bio: 'Robotics specialist with experience in industrial automation and competitive robotics.', qualification: 'M.S. Robotics Engineering, MIT' },
  { id: 't3', firstName: 'Lisa', lastName: 'Chang', email: 'l.chang@futuretechacademy.io', phone: '+1 (555) 421-7903', subject: 'Data Science', department: 'Technology', joinDate: '2020-09-01', status: 'active', bio: 'Data scientist with background in big data analytics and visualization.', qualification: 'Ph.D. Statistics, Berkeley' },
  { id: 't4', firstName: 'Michael', lastName: 'O\'Brien', email: 'm.obrien@futuretechacademy.io', phone: '+1 (555) 421-7904', subject: 'Cybersecurity', department: 'Technology', joinDate: '2021-09-01', status: 'active', bio: 'Security consultant specializing in ethical hacking and network security.', qualification: 'M.S. Information Security, Carnegie Mellon' },
  { id: 't5', firstName: 'Rachel', lastName: 'Garcia', email: 'r.garcia@futuretechacademy.io', phone: '+1 (555) 421-7905', subject: 'Digital Arts', department: 'Creative', joinDate: '2022-09-01', status: 'active', bio: 'Digital artist and UI/UX designer with experience in game development.', qualification: 'M.F.A. Digital Media, RISD' },
];

export const parents: Parent[] = [
  { id: 'p1', firstName: 'Kevin', lastName: 'Chen', email: 'k.chen@email.com', phone: '+1 (555) 421-7001', childrenIds: ['s1'], address: '500 Tech Park Drive, Mountain View', occupation: 'Software Engineer' },
  { id: 'p2', firstName: 'Maria', lastName: 'Rodriguez', email: 'm.rodriguez@email.com', phone: '+1 (555) 421-7002', childrenIds: ['s2'], address: '250 Innovation Way, Palo Alto', occupation: 'Product Manager' },
  { id: 'p3', firstName: 'James', lastName: 'Johnson', email: 'j.johnson@email.com', phone: '+1 (555) 421-7003', childrenIds: ['s3'], address: '100 Startup Blvd, Sunnyvale', occupation: 'Venture Capitalist' },
  { id: 'p4', firstName: 'Daniel', lastName: 'Kim', email: 'd.kim@email.com', phone: '+1 (555) 421-7004', childrenIds: ['s4'], address: '75 AI Street, Redwood City', occupation: 'Data Scientist' },
  { id: 'p5', firstName: 'Priya', lastName: 'Patel', email: 'p.patel@email.com', phone: '+1 (555) 421-7005', childrenIds: ['s5'], address: '300 Cloud Avenue, San Jose', occupation: 'Tech Entrepreneur' },
];

export const events: Event[] = [
  { id: 'e1', title: 'AI & Machine Learning Hackathon', description: '48-hour hackathon to build AI-powered solutions for real-world problems.', date: '2026-03-10', endDate: '2026-03-12', category: 'academic', isFeatured: true },
  { id: 'e2', title: 'Robotics Competition', description: 'Annual robotics competition featuring autonomous and remote-controlled robots.', date: '2026-04-20', category: 'sports', isFeatured: true },
  { id: 'e3', title: 'Tech Career Fair', description: 'Meet representatives from top tech companies and explore career opportunities.', date: '2026-05-15', category: 'academic', isFeatured: true },
  { id: 'e4', title: 'Virtual Reality Expo', description: 'Showcase of student VR projects and immersive experiences.', date: '2026-06-01', category: 'cultural', isFeatured: true },
];

export const gallery: GalleryImage[] = [
  { id: 'g1', url: 'https://placehold.co/600x400/4f46e5/ffffff?text=Tech+Campus', caption: 'Modern Tech Campus', category: 'campus', uploadDate: '2025-09-01' },
  { id: 'g2', url: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Robotics+Lab', caption: 'Robotics Laboratory', category: 'facilities', uploadDate: '2025-09-15' },
  { id: 'g3', url: 'https://placehold.co/600x400/06b6d4/ffffff?text=Hackathon', caption: 'AI Hackathon 2025', category: 'events', uploadDate: '2025-10-20' },
  { id: 'g4', url: 'https://placehold.co/600x400/4f46e5/ffffff?text=VR+Lab', caption: 'Virtual Reality Lab', category: 'facilities', uploadDate: '2025-11-05' },
];

export const news: NewsArticle[] = [
  { id: 'n1', title: 'Future Tech Students Win International AI Competition', content: 'Our team of students has won first place at the International AI Challenge, defeating teams from 50 countries with their innovative healthcare AI solution.', author: 'Sarah Nakamura', publishDate: '2026-01-25', category: 'achievement', isFeatured: true },
  { id: 'n2', title: 'New Quantum Computing Lab Opens', content: 'We are excited to announce the opening of our state-of-the-art quantum computing lab, making us one of the first high schools to offer quantum education.', author: 'Admin Office', publishDate: '2026-01-18', category: 'infrastructure', isFeatured: true },
];

export const fees: FeeRecord[] = [
  { id: 'f1', studentId: 's1', amount: 12000, type: 'tuition', dueDate: '2026-01-15', paidDate: '2026-01-12', status: 'paid', academicYear: '2025-2026' },
  { id: 'f2', studentId: 's2', amount: 12000, type: 'tuition', dueDate: '2026-01-15', status: 'pending', academicYear: '2025-2026' },
  { id: 'f3', studentId: 's3', amount: 12000, type: 'tuition', dueDate: '2026-01-15', paidDate: '2026-01-14', status: 'paid', academicYear: '2025-2026' },
  { id: 'f4', studentId: 's4', amount: 1500, type: 'exam', dueDate: '2026-02-01', status: 'pending', academicYear: '2025-2026' },
];

export const attendance: AttendanceRecord[] = [
  { id: 'a1', studentId: 's1', date: '2026-01-20', status: 'present' },
  { id: 'a2', studentId: 's2', date: '2026-01-20', status: 'present' },
  { id: 'a3', studentId: 's3', date: '2026-01-20', status: 'present' },
  { id: 'a4', studentId: 's4', date: '2026-01-20', status: 'present' },
  { id: 'a5', studentId: 's5', date: '2026-01-20', status: 'late' },
  { id: 'a6', studentId: 's1', date: '2026-01-21', status: 'present' },
  { id: 'a7', studentId: 's2', date: '2026-01-21', status: 'present' },
];

export const homework: Homework[] = [
  { id: 'h1', title: 'Build a Neural Network', description: 'Implement a simple neural network from scratch using Python and NumPy.', subject: 'Computer Science', grade: '10', assignedBy: 't1', assignedDate: '2026-01-18', dueDate: '2026-01-28', status: 'active' },
  { id: 'h2', title: 'Robot Arm Programming', description: 'Program the robotic arm to perform a pick-and-place task.', subject: 'Robotics', grade: '10', assignedBy: 't2', assignedDate: '2026-01-17', dueDate: '2026-01-25', status: 'active' },
];

export const exams: Exam[] = [
  { id: 'ex1', name: 'Mid-Term Computer Science', subject: 'Computer Science', grade: '10', date: '2026-02-15', duration: '2 hours', totalMarks: 100, type: 'midterm' },
  { id: 'ex2', name: 'Mid-Term Data Science', subject: 'Data Science', grade: '10', date: '2026-02-18', duration: '2 hours', totalMarks: 100, type: 'midterm' },
];

export const results: Result[] = [
  { id: 'r1', studentId: 's1', examId: 'ex1', subject: 'Computer Science', marksObtained: 99, totalMarks: 100, grade: 'A+' },
  { id: 'r2', studentId: 's2', examId: 'ex1', subject: 'Computer Science', marksObtained: 94, totalMarks: 100, grade: 'A' },
  { id: 'r3', studentId: 's1', examId: 'ex2', subject: 'Data Science', marksObtained: 96, totalMarks: 100, grade: 'A' },
];
