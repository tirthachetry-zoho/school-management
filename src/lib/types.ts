// Core entity types for the multi-tenant school management platform

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  grade: string;
  section: string;
  rollNumber: string;
  parentId: string;
  avatar?: string;
  enrollmentDate: string;
  status: 'active' | 'inactive';
}

export interface Teacher {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  department: string;
  avatar?: string;
  joinDate: string;
  status: 'active' | 'inactive';
  bio: string;
  qualification: string;
}

export interface Parent {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  childrenIds: string[];
  address: string;
  occupation: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  endDate?: string;
  imageUrl?: string;
  category: 'academic' | 'sports' | 'cultural' | 'exam' | 'holiday';
  isFeatured: boolean;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  category: string;
  uploadDate: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  author: string;
  publishDate: string;
  category: string;
  isFeatured: boolean;
}

export interface FeeRecord {
  id: string;
  studentId: string;
  amount: number;
  type: 'tuition' | 'exam' | 'transport' | 'library' | 'other';
  dueDate: string;
  paidDate?: string;
  status: 'paid' | 'pending' | 'overdue';
  academicYear: string;
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  date: string;
  status: 'present' | 'absent' | 'late' | 'excused';
  subject?: string;
}

export interface Homework {
  id: string;
  title: string;
  description: string;
  subject: string;
  grade: string;
  assignedBy: string;
  assignedDate: string;
  dueDate: string;
  status: 'active' | 'submitted' | 'graded' | 'overdue';
}

export interface Exam {
  id: string;
  name: string;
  subject: string;
  grade: string;
  date: string;
  duration: string;
  totalMarks: number;
  type: 'unit' | 'midterm' | 'final' | 'quiz';
}

export interface Result {
  id: string;
  studentId: string;
  examId: string;
  subject: string;
  marksObtained: number;
  totalMarks: number;
  grade: string;
}

export interface SchoolSettings {
  schoolName: string;
  address: string;
  phone: string;
  email: string;
  establishedYear: number;
  motto: string;
  principalName: string;
  totalStudents: number;
  totalTeachers: number;
  academicYear: string;
}

export interface SchoolWebsite {
  heroTitle: string;
  heroSubtitle: string;
  heroImageUrl?: string;
  aboutContent: string;
  missionStatement: string;
  visionStatement: string;
  footerText: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
}

export interface SchoolTheme {
  name: string;
  id: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  gradient: string;
  fontFamily: string;
  borderRadius: string;
}

export interface SchoolData {
  theme: SchoolTheme;
  settings: SchoolSettings;
  website: SchoolWebsite;
  students: Student[];
  teachers: Teacher[];
  parents: Parent[];
  events: Event[];
  gallery: GalleryImage[];
  news: NewsArticle[];
  fees: FeeRecord[];
  attendance: AttendanceRecord[];
  homework: Homework[];
  exams: Exam[];
  results: Result[];
}

export type SchoolId = 'springfield' | 'green-valley' | 'royal-heritage' | 'future-tech';

export interface UserSession {
  schoolId: SchoolId;
  userId: string;
  role: 'admin' | 'student' | 'teacher' | 'parent';
  name: string;
  email: string;
  loginTime: string;
}