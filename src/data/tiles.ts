import { AssessmentTile } from '../types';
import { questions } from './questions';

export const tiles: AssessmentTile[] = [
  {
    id: 'inattention-survey',
    title: 'Attention Assessment',
    type: 'survey',
    category: 'inattention',
    questions: questions.filter(q => q.category === 'inattention'),
    icon: 'Brain'
  },
  {
    id: 'hyperactivity-survey',
    title: 'Hyperactivity Assessment',
    type: 'survey',
    category: 'hyperactivity',
    questions: questions.filter(q => q.category === 'hyperactivity'),
    icon: 'Zap'
  },
  {
    id: 'impulsivity-survey',
    title: 'Impulsivity Assessment',
    type: 'survey',
    category: 'impulsivity',
    questions: questions.filter(q => q.category === 'impulsivity'),
    icon: 'Rocket'
  },
  {
    id: 'executive-survey',
    title: 'Executive Function Assessment',
    type: 'survey',
    category: 'executive',
    questions: questions.filter(q => q.category === 'executive'),
    icon: 'Briefcase'
  },
  {
    id: 'category-comparison',
    title: 'Symptom Profile',
    type: 'chart',
    chartType: 'radar',
    icon: 'PieChart'
  },
  {
    id: 'score-breakdown',
    title: 'Score Breakdown',
    type: 'chart',
    chartType: 'bar',
    icon: 'BarChart'
  },
  {
    id: 'adhd-info',
    title: 'About ADHD',
    type: 'info',
    icon: 'Info'
  },
  {
    id: 'results-summary',
    title: 'Your Results',
    type: 'info',
    icon: 'FileText'
  }
];