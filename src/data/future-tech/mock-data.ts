import { Student, Teacher, Parent, Event, GalleryImage, NewsArticle, FeeRecord, AttendanceRecord, Homework, Exam, Result } from '@/lib/types';

export const students: Student[] = [
  { id: 's1', firstName: 'Karthik', lastName: 'Reddy', email: 'karthik.r@futuretechacademy.in', phone: '+91 98765 73201', dateOfBirth: '2010-04-20', grade: '10', section: 'A', rollNumber: '101', parentId: 'p1', enrollmentDate: '2023-09-01', status: 'active' },
  { id: 's2', firstName: 'Sneha', lastName: 'Patel', email: 'sneha.p@futuretechacademy.in', phone: '+91 98765 73202', dateOfBirth: '2010-08-15', grade: '10', section: 'A', rollNumber: '102', parentId: 'p2', enrollmentDate: '2023-09-01', status: 'active' },
  { id: 's3', firstName: 'Arjun', lastName: 'Sharma', email: 'arjun.s@futuretechacademy.in', phone: '+91 98765 73203', dateOfBirth: '2011-01-10', grade: '9', section: 'B', rollNumber: '201', parentId: 'p3', enrollmentDate: '2022-09-01', status: 'active' },
  { id: 's4', firstName: 'Ishita', lastName: 'Verma', email: 'ishita.v@futuretechacademy.in', phone: '+91 98765 73204', dateOfBirth: '2009-11-25', grade: '11', section: 'A', rollNumber: '301', parentId: 'p4', enrollmentDate: '2021-09-01', status: 'active' },
  { id: 's5', firstName: 'Rohan', lastName: 'Kumar', email: 'rohan.k@futuretechacademy.in', phone: '+91 98765 73205', dateOfBirth: '2011-06-18', grade: '9', section: 'A', rollNumber: '202', parentId: 'p5', enrollmentDate: '2023-09-01', status: 'active' },
];

export const teachers: Teacher[] = [
  { id: 't1', firstName: 'Priya', lastName: 'Reddy', email: 'priya.r@futuretechacademy.in', phone: '+91 98765 74201', subject: 'Computer Science', department: 'Technology', joinDate: '2018-09-01', status: 'active', bio: 'Former Google engineer with expertise in AI and machine learning. Passionate about teaching the next generation of tech leaders.', qualification: 'Ph.D. Computer Science, IIT Bombay' },
  { id: 't2', firstName: 'Rahul', lastName: 'Sharma', email: 'rahul.s@futuretechacademy.in', phone: '+91 98765 74202', subject: 'Robotics', department: 'Engineering', joinDate: '2019-09-01', status: 'active', bio: 'Robotics specialist with experience in industrial automation and competitive robotics.', qualification: 'M.S. Robotics Engineering, IISc' },
  { id: 't3', firstName: 'Lakshmi', lastName: 'Patel', email: 'lakshmi.p@futuretechacademy.in', phone: '+91 98765 74203', subject: 'Data Science', department: 'Technology', joinDate: '2020-09-01', status: 'active', bio: 'Data scientist with background in big data analytics and visualization.', qualification: 'Ph.D. Statistics, ISI Bangalore' },
  { id: 't4', firstName: 'Amit', lastName: 'Verma', email: 'amit.v@futuretechacademy.in', phone: '+91 98765 74204', subject: 'Cybersecurity', department: 'Technology', joinDate: '2021-09-01', status: 'active', bio: 'Security consultant specializing in ethical hacking and network security.', qualification: 'M.S. Information Security, IIT Delhi' },
  { id: 't5', firstName: 'Sneha', lastName: 'Gupta', email: 'sneha.g@futuretechacademy.in', phone: '+91 98765 74205', subject: 'Digital Arts', department: 'Creative', joinDate: '2022-09-01', status: 'active', bio: 'Digital artist and UI/UX designer with experience in game development.', qualification: 'M.F.A. Digital Media, NID' },
];

export const parents: Parent[] = [
  { id: 'p1', firstName: 'Ramesh', lastName: 'Reddy', email: 'ramesh.reddy@email.com', phone: '+91 98765 75201', childrenIds: ['s1'], address: 'Hitech City, Hyderabad', occupation: 'Software Engineer' },
  { id: 'p2', firstName: 'Meena', lastName: 'Patel', email: 'meena.patel@email.com', phone: '+91 98765 75202', childrenIds: ['s2'], address: 'Madhapur, Hyderabad', occupation: 'Product Manager' },
  { id: 'p3', firstName: 'Suresh', lastName: 'Sharma', email: 'suresh.sharma@email.com', phone: '+91 98765 75203', childrenIds: ['s3'], address: 'Gachibowli, Hyderabad', occupation: 'Venture Capitalist' },
  { id: 'p4', firstName: 'Anil', lastName: 'Verma', email: 'anil.verma@email.com', phone: '+91 98765 75204', childrenIds: ['s4'], address: 'Kondapur, Hyderabad', occupation: 'Data Scientist' },
  { id: 'p5', firstName: 'Kavita', lastName: 'Kumar', email: 'kavita.kumar@email.com', phone: '+91 98765 75205', childrenIds: ['s5'], address: 'Jubilee Hills, Hyderabad', occupation: 'Tech Entrepreneur' },
];

export const events: Event[] = [
  { id: 'e1', title: 'AI & Machine Learning Hackathon', description: '48-hour hackathon to build AI-powered solutions for real-world problems.', date: '2026-03-10', endDate: '2026-03-12', category: 'academic', isFeatured: true },
  { id: 'e2', title: 'Robotics Competition', description: 'Annual robotics competition featuring autonomous and remote-controlled robots.', date: '2026-04-20', category: 'sports', isFeatured: true },
  { id: 'e3', title: 'Tech Career Fair', description: 'Meet representatives from top tech companies and explore career opportunities.', date: '2026-05-15', category: 'academic', isFeatured: true },
  { id: 'e4', title: 'Virtual Reality Expo', description: 'Showcase of student VR projects and immersive experiences.', date: '2026-06-01', category: 'cultural', isFeatured: true },
];

export const gallery: GalleryImage[] = [
  { id: 'g1', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop', caption: 'Modern Tech Campus Building', category: 'campus', uploadDate: '2025-09-01' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop', caption: 'Advanced Robotics Laboratory', category: 'facilities', uploadDate: '2025-09-15' },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1504384308090-c54be3852f33?w=800&h=600&fit=crop', caption: 'AI Hackathon Winners 2025', category: 'academics', uploadDate: '2025-10-20' },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1592478411213-61535fdd861d?w=800&h=600&fit=crop', caption: 'Virtual Reality Learning Lab', category: 'facilities', uploadDate: '2025-11-05' },
  { id: 'g5', url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop', caption: '3D Printing Workshop', category: 'academics', uploadDate: '2025-12-10' },
  { id: 'g6', url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop', caption: 'Cybersecurity Training Session', category: 'academics', uploadDate: '2026-01-15' },
  { id: 'g7', url: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&h=600&fit=crop', caption: 'Coding Competition Finals', category: 'academics', uploadDate: '2026-02-20' },
  { id: 'g8', url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop', caption: 'Tech Career Fair 2025', category: 'cultural', uploadDate: '2026-03-10' },
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
