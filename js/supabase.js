import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const mockData = {
  courses: [
    {
      id: '1',
      title: 'Introduction to Computer Science',
      description: 'Learn the fundamentals of computer science including algorithms, data structures, and programming concepts',
      category: 'Computer Science',
      level: 'Beginner',
      thumbnail_url: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      instructor: 'Dr. Sarah Johnson',
      duration: 120,
      enrolled_count: 1250,
      rating: 4.8
    },
    {
      id: '2',
      title: 'Advanced Mathematics',
      description: 'Master calculus, linear algebra, and discrete mathematics for engineering students',
      category: 'Mathematics',
      level: 'Advanced',
      thumbnail_url: 'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg',
      instructor: 'Prof. Michael Chen',
      duration: 180,
      enrolled_count: 890,
      rating: 4.9
    },
    {
      id: '3',
      title: 'Digital Marketing Fundamentals',
      description: 'Comprehensive guide to SEO, social media, and content marketing strategies',
      category: 'Business',
      level: 'Intermediate',
      thumbnail_url: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
      instructor: 'Emily Rodriguez',
      duration: 90,
      enrolled_count: 2100,
      rating: 4.7
    },
    {
      id: '4',
      title: 'Physics for Engineers',
      description: 'Classical mechanics, thermodynamics, and electromagnetism with practical applications',
      category: 'Physics',
      level: 'Intermediate',
      thumbnail_url: 'https://images.pexels.com/photos/256219/pexels-photo-256219.jpeg',
      instructor: 'Dr. James Wilson',
      duration: 150,
      enrolled_count: 760,
      rating: 4.6
    },
    {
      id: '5',
      title: 'Web Development Bootcamp',
      description: 'Build modern websites with HTML, CSS, JavaScript, and React',
      category: 'Programming',
      level: 'Beginner',
      thumbnail_url: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
      instructor: 'Alex Thompson',
      duration: 200,
      enrolled_count: 3400,
      rating: 4.9
    },
    {
      id: '6',
      title: 'Creative Writing Workshop',
      description: 'Develop your storytelling skills and craft compelling narratives',
      category: 'Arts',
      level: 'All Levels',
      thumbnail_url: 'https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg',
      instructor: 'Maria Garcia',
      duration: 60,
      enrolled_count: 540,
      rating: 4.5
    }
  ],
  teamMembers: [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      role: 'Lead Educator',
      bio: 'Computer Science PhD with 10 years of teaching experience',
      avatar_url: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      specialization: 'Computer Science & AI'
    },
    {
      id: '2',
      name: 'Prof. Michael Chen',
      role: 'Mathematics Professor',
      bio: 'Specialized in advanced calculus and mathematical analysis',
      avatar_url: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
      specialization: 'Pure Mathematics'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      role: 'Business Instructor',
      bio: 'Digital marketing expert with 8+ years industry experience',
      avatar_url: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg',
      specialization: 'Digital Marketing'
    },
    {
      id: '4',
      name: 'Dr. James Wilson',
      role: 'Physics Educator',
      bio: 'Research physicist passionate about making science accessible',
      avatar_url: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg',
      specialization: 'Applied Physics'
    }
  ],
  stats: {
    totalStudents: 15000,
    totalCourses: 120,
    totalInstructors: 14,
    satisfactionRate: 98
  }
};
