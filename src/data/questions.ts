import { Question } from '../types';

export const questions: Question[] = [
  // Inattention Questions
  {
    id: 'q1',
    text: 'How often do you have trouble keeping your attention when doing boring or repetitive work?',
    options: [
      { value: 0, label: 'Never' },
      { value: 1, label: 'Rarely' },
      { value: 2, label: 'Sometimes' },
      { value: 3, label: 'Often' },
      { value: 4, label: 'Very Often' }
    ],
    category: 'inattention'
  },
  {
    id: 'q2',
    text: 'How often do you have difficulty organizing tasks and activities?',
    options: [
      { value: 0, label: 'Never' },
      { value: 1, label: 'Rarely' },
      { value: 2, label: 'Sometimes' },
      { value: 3, label: 'Often' },
      { value: 4, label: 'Very Often' }
    ],
    category: 'inattention'
  },
  {
    id: 'q3',
    text: 'How often are you easily distracted by external stimuli?',
    options: [
      { value: 0, label: 'Never' },
      { value: 1, label: 'Rarely' },
      { value: 2, label: 'Sometimes' },
      { value: 3, label: 'Often' },
      { value: 4, label: 'Very Often' }
    ],
    category: 'inattention'
  },
  
  // Hyperactivity Questions
  {
    id: 'q4',
    text: 'How often do you fidget with hands or feet or squirm in your seat?',
    options: [
      { value: 0, label: 'Never' },
      { value: 1, label: 'Rarely' },
      { value: 2, label: 'Sometimes' },
      { value: 3, label: 'Often' },
      { value: 4, label: 'Very Often' }
    ],
    category: 'hyperactivity'
  },
  {
    id: 'q5',
    text: 'How often do you feel restless or find it difficult to sit still for extended periods?',
    options: [
      { value: 0, label: 'Never' },
      { value: 1, label: 'Rarely' },
      { value: 2, label: 'Sometimes' },
      { value: 3, label: 'Often' },
      { value: 4, label: 'Very Often' }
    ],
    category: 'hyperactivity'
  },
  {
    id: 'q6',
    text: 'How often do you find yourself talking excessively?',
    options: [
      { value: 0, label: 'Never' },
      { value: 1, label: 'Rarely' },
      { value: 2, label: 'Sometimes' },
      { value: 3, label: 'Often' },
      { value: 4, label: 'Very Often' }
    ],
    category: 'hyperactivity'
  },
  
  // Impulsivity Questions
  {
    id: 'q7',
    text: 'How often do you have difficulty waiting your turn?',
    options: [
      { value: 0, label: 'Never' },
      { value: 1, label: 'Rarely' },
      { value: 2, label: 'Sometimes' },
      { value: 3, label: 'Often' },
      { value: 4, label: 'Very Often' }
    ],
    category: 'impulsivity'
  },
  {
    id: 'q8',
    text: 'How often do you interrupt others when they are busy?',
    options: [
      { value: 0, label: 'Never' },
      { value: 1, label: 'Rarely' },
      { value: 2, label: 'Sometimes' },
      { value: 3, label: 'Often' },
      { value: 4, label: 'Very Often' }
    ],
    category: 'impulsivity'
  },
  {
    id: 'q9',
    text: 'How often do you make decisions impulsively?',
    options: [
      { value: 0, label: 'Never' },
      { value: 1, label: 'Rarely' },
      { value: 2, label: 'Sometimes' },
      { value: 3, label: 'Often' },
      { value: 4, label: 'Very Often' }
    ],
    category: 'impulsivity'
  },
  
  // Executive Function Questions
  {
    id: 'q10',
    text: 'How often do you have trouble planning ahead for tasks or activities?',
    options: [
      { value: 0, label: 'Never' },
      { value: 1, label: 'Rarely' },
      { value: 2, label: 'Sometimes' },
      { value: 3, label: 'Often' },
      { value: 4, label: 'Very Often' }
    ],
    category: 'executive'
  },
  {
    id: 'q11',
    text: 'How often do you struggle to manage your time effectively?',
    options: [
      { value: 0, label: 'Never' },
      { value: 1, label: 'Rarely' },
      { value: 2, label: 'Sometimes' },
      { value: 3, label: 'Often' },
      { value: 4, label: 'Very Often' }
    ],
    category: 'executive'
  },
  {
    id: 'q12',
    text: 'How often do you have difficulty completing tasks once you\'ve started them?',
    options: [
      { value: 0, label: 'Never' },
      { value: 1, label: 'Rarely' },
      { value: 2, label: 'Sometimes' },
      { value: 3, label: 'Often' },
      { value: 4, label: 'Very Often' }
    ],
    category: 'executive'
  }
];