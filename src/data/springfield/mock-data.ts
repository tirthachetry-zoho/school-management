import { Student, Teacher, Parent, Event, GalleryImage, NewsArticle, FeeRecord, AttendanceRecord, Homework, Exam, Result } from '@/lib/types';

export const students: Student[] = [
  { id: 's1', firstName: 'Aarav', lastName: 'Sharma', email: 'aarav.s@delhipublicacademy.in', phone: '+91 98765 43210', dateOfBirth: '2010-03-15', grade: '10', section: 'A', rollNumber: '101', parentId: 'p1', enrollmentDate: '2023-09-01', status: 'active' },
  { id: 's2', firstName: 'Vihaan', lastName: 'Patel', email: 'vihaan.p@delhipublicacademy.in', phone: '+91 98765 43211', dateOfBirth: '2010-07-22', grade: '10', section: 'A', rollNumber: '102', parentId: 'p2', enrollmentDate: '2023-09-01', status: 'active' },
  { id: 's3', firstName: 'Diya', lastName: 'Singh', email: 'diya.s@delhipublicacademy.in', phone: '+91 98765 43212', dateOfBirth: '2011-01-10', grade: '9', section: 'B', rollNumber: '201', parentId: 'p3', enrollmentDate: '2022-09-01', status: 'active' },
  { id: 's4', firstName: 'Arjun', lastName: 'Kumar', email: 'arjun.k@delhipublicacademy.in', phone: '+91 98765 43213', dateOfBirth: '2009-11-30', grade: '11', section: 'A', rollNumber: '301', parentId: 'p4', enrollmentDate: '2021-09-01', status: 'active' },
  { id: 's5', firstName: 'Ananya', lastName: 'Verma', email: 'ananya.v@delhipublicacademy.in', phone: '+91 98765 43214', dateOfBirth: '2011-05-18', grade: '9', section: 'A', rollNumber: '202', parentId: 'p5', enrollmentDate: '2023-09-01', status: 'active' },
  { id: 's6', firstName: 'Kabir', lastName: 'Gupta', email: 'kabir.g@delhipublicacademy.in', phone: '+91 98765 43215', dateOfBirth: '2012-09-25', grade: '8', section: 'A', rollNumber: '401', parentId: 'p1', enrollmentDate: '2023-09-01', status: 'active' },
  { id: 's7', firstName: 'Ishita', lastName: 'Mehta', email: 'ishita.m@delhipublicacademy.in', phone: '+91 98765 43216', dateOfBirth: '2010-04-12', grade: '10', section: 'B', rollNumber: '103', parentId: 'p6', enrollmentDate: '2022-09-01', status: 'active' },
  { id: 's8', firstName: 'Rohan', lastName: 'Jain', email: 'rohan.j@delhipublicacademy.in', phone: '+91 98765 43217', dateOfBirth: '2009-08-07', grade: '11', section: 'B', rollNumber: '302', parentId: 'p7', enrollmentDate: '2021-09-01', status: 'inactive' },
];

export const teachers: Teacher[] = [
  { id: 't1', firstName: 'Anjali', lastName: 'Sharma', email: 'anjali.s@delhipublicacademy.in', phone: '+91 98765 43201', subject: 'Mathematics', department: 'STEM', joinDate: '2010-08-01', status: 'active', bio: 'Principal and Mathematics Department Head with 20+ years of experience in education leadership.', qualification: 'Ph.D. Mathematics Education' },
  { id: 't2', firstName: 'Rajesh', lastName: 'Verma', email: 'rajesh.v@delhipublicacademy.in', phone: '+91 98765 43202', subject: 'Physics', department: 'STEM', joinDate: '2015-08-01', status: 'active', bio: 'Passionate about making physics accessible through hands-on experiments.', qualification: 'M.Sc. Physics' },
  { id: 't3', firstName: 'Priya', lastName: 'Singh', email: 'priya.s@delhipublicacademy.in', phone: '+91 98765 43203', subject: 'English Literature', department: 'Humanities', joinDate: '2012-08-01', status: 'active', bio: 'Award-winning literature teacher and school debate club advisor.', qualification: 'M.A. English Literature' },
  { id: 't4', firstName: 'Vikram', lastName: 'Chopra', email: 'vikram.c@delhipublicacademy.in', phone: '+91 98765 43204', subject: 'Computer Science', department: 'STEM', joinDate: '2018-08-01', status: 'active', bio: 'Former software engineer bringing real-world tech experience to the classroom.', qualification: 'M.S. Computer Science' },
  { id: 't5', firstName: 'Meera', lastName: 'Reddy', email: 'meera.r@delhipublicacademy.in', phone: '+91 98765 43205', subject: 'Biology', department: 'STEM', joinDate: '2016-08-01', status: 'active', bio: 'Environmental science advocate and biology olympiad coach.', qualification: 'M.Sc. Biology' },
  { id: 't6', firstName: 'Amit', lastName: 'Desai', email: 'amit.d@delhipublicacademy.in', phone: '+91 98765 43206', subject: 'History', department: 'Humanities', joinDate: '2014-08-01', status: 'active', bio: 'Specializes in modern world history and critical thinking development.', qualification: 'Ph.D. History' },
];

export const parents: Parent[] = [
  { id: 'p1', firstName: 'Rajesh', lastName: 'Sharma', email: 'rajesh.sharma@email.com', phone: '+91 98765 43001', childrenIds: ['s1', 's6'], address: 'Sector 15, Rohini, New Delhi', occupation: 'Engineer' },
  { id: 'p2', firstName: 'Sunita', lastName: 'Patel', email: 'sunita.patel@email.com', phone: '+91 98765 43002', childrenIds: ['s2'], address: 'Sector 18, Rohini, New Delhi', occupation: 'Doctor' },
  { id: 'p3', firstName: 'Vikram', lastName: 'Singh', email: 'vikram.singh@email.com', phone: '+91 98765 43003', childrenIds: ['s3'], address: 'Sector 7, Rohini, New Delhi', occupation: 'Teacher' },
  { id: 'p4', firstName: 'Amit', lastName: 'Kumar', email: 'amit.kumar@email.com', phone: '+91 98765 43004', childrenIds: ['s4'], address: 'Sector 9, Rohini, New Delhi', occupation: 'Lawyer' },
  { id: 'p5', firstName: 'Neha', lastName: 'Verma', email: 'neha.verma@email.com', phone: '+91 98765 43005', childrenIds: ['s5'], address: 'Sector 12, Rohini, New Delhi', occupation: 'Architect' },
  { id: 'p6', firstName: 'Sanjay', lastName: 'Mehta', email: 'sanjay.mehta@email.com', phone: '+91 98765 43006', childrenIds: ['s7'], address: 'Sector 14, Rohini, New Delhi', occupation: 'Business Owner' },
  { id: 'p7', firstName: 'Kavita', lastName: 'Jain', email: 'kavita.jain@email.com', phone: '+91 98765 43007', childrenIds: ['s8'], address: 'Sector 16, Rohini, New Delhi', occupation: 'Nurse' },
];

export const events: Event[] = [
  { id: 'e1', title: 'Annual Science Fair', description: 'Showcasing student innovations and scientific projects across all grades.', date: '2026-03-15', category: 'academic', isFeatured: true },
  { id: 'e2', title: 'Spring Sports Day', description: 'Inter-house athletic competitions including track, field events, and team sports.', date: '2026-04-10', endDate: '2026-04-11', category: 'sports', isFeatured: true },
  { id: 'e3', title: 'Cultural Festival - Unity in Diversity', description: 'Celebrating the rich cultural heritage of our student body through performances and exhibitions.', date: '2026-05-20', category: 'cultural', isFeatured: true },
  { id: 'e4', title: 'Mid-Term Examinations', description: 'Mid-term assessments for grades 8-11.', date: '2026-02-01', endDate: '2026-02-15', category: 'exam', isFeatured: false },
  { id: 'e5', title: 'Summer Break', description: 'School closed for summer vacation.', date: '2026-06-01', endDate: '2026-08-31', category: 'holiday', isFeatured: false },
];

export const gallery: GalleryImage[] = [
  { id: 'g1', url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop', caption: 'School Campus During Diwali Celebration', category: 'festivals', uploadDate: '2025-11-01' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop', caption: 'Annual Sports Day - March Past Ceremony', category: 'sports', uploadDate: '2025-12-15' },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop', caption: 'Students Performing Classical Dance', category: 'cultural', uploadDate: '2025-10-20' },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop', caption: 'Modern Science Laboratory', category: 'facilities', uploadDate: '2025-09-10' },
  { id: 'g5', url: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop', caption: 'Holi Festival Celebration', category: 'festivals', uploadDate: '2025-03-25' },
  { id: 'g6', url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop', caption: 'Digital Library with E-Resources', category: 'facilities', uploadDate: '2025-08-15' },
  { id: 'g7', url: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&h=600&fit=crop', caption: 'Independence Day Celebration', category: 'cultural', uploadDate: '2025-08-15' },
  { id: 'g8', url: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop', caption: 'Robotics Workshop', category: 'academics', uploadDate: '2025-11-20' },
  { id: 'g9', url: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=600&fit=crop', caption: 'Inter-School Cricket Tournament', category: 'sports', uploadDate: '2025-01-10' },
  { id: 'g10', url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop', caption: 'Smart Classroom with Interactive Boards', category: 'facilities', uploadDate: '2025-07-01' },
  { id: 'g11', url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop', caption: 'Music and Arts Performance', category: 'cultural', uploadDate: '2025-09-25' },
  { id: 'g12', url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&h=600&fit=crop', caption: 'Annual Science Exhibition', category: 'academics', uploadDate: '2025-02-10' },
];

export const news: NewsArticle[] = [
  { id: 'n1', title: 'Springfield Academy Ranks #1 in State Science Competition', content: 'Our students dominated the state-level science competition, bringing home 5 gold medals and 3 silver medals. Principal Dr. Johnson praised the dedication of both students and faculty.', author: 'Barbara Johnson', publishDate: '2026-01-20', category: 'achievement', isFeatured: true },
  { id: 'n2', title: 'New STEM Wing Inauguration', content: 'We are proud to announce the inauguration of our new $2M STEM wing featuring robotics labs, 3D printing facilities, and an AI research center.', author: 'Admin Office', publishDate: '2026-01-15', category: 'infrastructure', isFeatured: true },
  { id: 'n3', title: 'Admissions Open for 2026-2027', content: 'Springfield Academy now accepts applications for the upcoming academic year. Early bird registration offers a 10% scholarship.', author: 'Admissions Office', publishDate: '2025-12-01', category: 'admissions', isFeatured: false },
];

export const fees: FeeRecord[] = [
  { id: 'f1', studentId: 's1', amount: 5000, type: 'tuition', dueDate: '2026-01-15', paidDate: '2026-01-10', status: 'paid', academicYear: '2025-2026' },
  { id: 'f2', studentId: 's2', amount: 5000, type: 'tuition', dueDate: '2026-01-15', paidDate: '2026-01-14', status: 'paid', academicYear: '2025-2026' },
  { id: 'f3', studentId: 's3', amount: 5000, type: 'tuition', dueDate: '2026-01-15', status: 'pending', academicYear: '2025-2026' },
  { id: 'f4', studentId: 's4', amount: 500, type: 'exam', dueDate: '2026-02-01', status: 'pending', academicYear: '2025-2026' },
  { id: 'f5', studentId: 's5', amount: 5000, type: 'tuition', dueDate: '2025-12-15', status: 'overdue', academicYear: '2025-2026' },
  { id: 'f6', studentId: 's1', amount: 800, type: 'transport', dueDate: '2026-01-15', paidDate: '2026-01-12', status: 'paid', academicYear: '2025-2026' },
];

export const attendance: AttendanceRecord[] = [
  { id: 'a1', studentId: 's1', date: '2026-01-20', status: 'present' },
  { id: 'a2', studentId: 's2', date: '2026-01-20', status: 'present' },
  { id: 'a3', studentId: 's3', date: '2026-01-20', status: 'absent' },
  { id: 'a4', studentId: 's4', date: '2026-01-20', status: 'present' },
  { id: 'a5', studentId: 's5', date: '2026-01-20', status: 'late' },
  { id: 'a6', studentId: 's1', date: '2026-01-21', status: 'present' },
  { id: 'a7', studentId: 's2', date: '2026-01-21', status: 'present' },
  { id: 'a8', studentId: 's3', date: '2026-01-21', status: 'present' },
  { id: 'a9', studentId: 's4', date: '2026-01-21', status: 'excused' },
  { id: 'a10', studentId: 's5', date: '2026-01-21', status: 'present' },
];

export const homework: Homework[] = [
  { id: 'h1', title: 'Quadratic Equations Practice', description: 'Complete exercises 5.1 through 5.4 from the textbook.', subject: 'Mathematics', grade: '10', assignedBy: 't1', assignedDate: '2026-01-18', dueDate: '2026-01-25', status: 'active' },
  { id: 'h2', title: 'Essay: Shakespeare\'s Influence', description: 'Write a 1000-word essay analyzing the lasting impact of Shakespeare on modern literature.', subject: 'English Literature', grade: '11', assignedBy: 't3', assignedDate: '2026-01-15', dueDate: '2026-01-28', status: 'active' },
  { id: 'h3', title: 'Physics Lab Report', description: 'Submit the lab report for the pendulum experiment conducted last week.', subject: 'Physics', grade: '10', assignedBy: 't2', assignedDate: '2026-01-17', dueDate: '2026-01-24', status: 'active' },
  { id: 'h4', title: 'Python Programming Assignment', description: 'Build a simple web scraper using Python requests and BeautifulSoup libraries.', subject: 'Computer Science', grade: '11', assignedBy: 't4', assignedDate: '2026-01-10', dueDate: '2026-01-22', status: 'active' },
];

export const exams: Exam[] = [
  { id: 'ex1', name: 'Mid-Term Mathematics', subject: 'Mathematics', grade: '10', date: '2026-02-10', duration: '2 hours', totalMarks: 100, type: 'midterm' },
  { id: 'ex2', name: 'Mid-Term Physics', subject: 'Physics', grade: '10', date: '2026-02-12', duration: '2 hours', totalMarks: 100, type: 'midterm' },
  { id: 'ex3', name: 'Unit Test - English Literature', subject: 'English Literature', grade: '11', date: '2026-02-08', duration: '1.5 hours', totalMarks: 50, type: 'unit' },
];

export const results: Result[] = [
  { id: 'r1', studentId: 's1', examId: 'ex1', subject: 'Mathematics', marksObtained: 92, totalMarks: 100, grade: 'A' },
  { id: 'r2', studentId: 's2', examId: 'ex1', subject: 'Mathematics', marksObtained: 85, totalMarks: 100, grade: 'A' },
  { id: 'r3', studentId: 's7', examId: 'ex1', subject: 'Mathematics', marksObtained: 78, totalMarks: 100, grade: 'B' },
  { id: 'r4', studentId: 's1', examId: 'ex2', subject: 'Physics', marksObtained: 88, totalMarks: 100, grade: 'A' },
  { id: 'r5', studentId: 's2', examId: 'ex2', subject: 'Physics', marksObtained: 72, totalMarks: 100, grade: 'B' },
];