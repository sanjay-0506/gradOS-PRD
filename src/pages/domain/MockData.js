// Mock data for Domain Readiness module
export const KPIS = [
  { id: 'domainScore', title: 'Domain Score', value: 82, unit: '%' },
  { id: 'problems', title: 'Problems Solved', value: 124 },
  { id: 'projects', title: 'Projects Completed', value: 6 },
  { id: 'streak', title: 'Current Streak', value: 7, unit: 'days' },
  { id: 'weeklyHours', title: 'Weekly Hours', value: 5.5, unit: 'hrs' },
  { id: 'readiness', title: 'Industry Readiness', value: 74, unit: '%' }
];

export const ROADMAP = [
  { id: 'python', title: 'Python', progress: 72, current: 'OOP & Modules', remaining: 3 },
  { id: 'sql', title: 'SQL', progress: 55, current: 'Joins', remaining: 5 },
  { id: 'dsa', title: 'DSA', progress: 40, current: 'Trees', remaining: 12 },
  { id: 'web', title: 'Web Development', progress: 28, current: 'React Basics', remaining: 9 },
  { id: 'cloud', title: 'Cloud', progress: 18, current: 'Intro to AWS', remaining: 7 },
  { id: 'ai', title: 'AI', progress: 10, current: 'Intro to ML', remaining: 8 }
];

export const UPCOMING = [
  { id: 1, date: '2026-08-09', topic: 'Advanced SQL Joins', mentor: 'Asha R.', duration: '45m', status: 'Scheduled' },
  { id: 2, date: '2026-08-11', topic: 'Binary Trees Deep-dive', mentor: 'K. Patel', duration: '60m', status: 'Scheduled' },
  { id: 3, date: '2026-08-13', topic: 'React State Patterns', mentor: 'M. Singh', duration: '50m', status: 'Planned' }
];

export const SESSIONS = [
  { id: 's1', title: 'Binary Search Trees', date: '2026-07-30', duration: '45m', score: 86, certificate: false },
  { id: 's2', title: 'Normalized DB Design', date: '2026-07-25', duration: '50m', score: 92, certificate: true },
  { id: 's3', title: 'Promises & Async', date: '2026-07-20', duration: '40m', score: 78, certificate: false }
];

export const ASSESSMENTS = [
  { id: 'a1', domain: 'DSA', difficulty: 'Medium', questions: 20, duration: '30m', xp: 120 },
  { id: 'a2', domain: 'SQL', difficulty: 'Easy', questions: 10, duration: '15m', xp: 50 },
  { id: 'a3', domain: 'Web', difficulty: 'Medium', questions: 15, duration: '25m', xp: 90 }
];

export const SKILL_SUMMARY = {
  strongest: 'SQL',
  weakest: 'AI',
  recommended: 'DSA - Trees',
  expectedReadiness: 85
};
