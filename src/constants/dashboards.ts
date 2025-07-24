import { Dashboard } from '../types';

export const DASHBOARD_CONFIGS: Record<string, Omit<Dashboard, 'questions'>> = {
  dsa: {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    description: 'Master fundamental data structures and algorithmic concepts',
    icon: '⚡',
    route: '/dashboard/dsa'
  },
  react: {
    id: 'react',
    title: 'React Learning Path',
    description: 'Master React fundamentals and advanced concepts with comprehensive learning modules',
    icon: '⚛️',
    route: '/react'
  },
  dataEngineeringLearning: {
    id: 'data-engineering-learning',
    title: 'Data Engineering Mastery Course',
    description: 'Master data engineering from foundations to advanced concepts',
    icon: '🔧',
    route: '/data-engineering'
  },
  algorithms: {
    id: 'algorithms',
    title: 'Algorithm Explanations',
    description: 'Detailed explanations of common algorithms',
    icon: '🧮',
    route: '/dashboard/algorithms'
  },
  systemDesign: {
    id: 'system-design',
    title: 'System Design & Architecture',
    description: 'Master scalable system design principles and architectural patterns',
    icon: '🏗️',
    route: '/system-design'
  },
  behavioralInterview: {
    id: 'behavioral-interview',
    title: 'Behavioral Interview Preparation',
    description: 'Master behavioral interview techniques, STAR method, and common scenarios',
    icon: '💼',
    route: '/behavioral-interview'
  },
  python: {
    id: 'python',
    title: 'Python Mastery Course',
    description: 'Learn Python from beginner to advanced with hands-on modules and examples',
    icon: '🐍',
    route: '/python'
  },
  devops: {
    id: 'devops',
    title: 'DevOps Mastery Course',
    description: 'Master DevOps practices, tools, and methodologies for modern software delivery',
    icon: '🚀',
    route: '/devops'
  }
}; 