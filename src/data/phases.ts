import {
  Lightbulb,
  Users,
  Calendar,
  Code,
  TestTube,
  Rocket,
  Star,
  ClipboardList,
  UserCheck,
  CheckSquare,
  Bug,
  GitCommit,
  FileCheck,
  AlertTriangle,
  Percent,
  Timer,
  ListTodo,
  Heart,
  MessageSquare
} from 'lucide-react';
import { Phase } from '../types';

export const phases: Phase[] = [
  {
    id: 'ideation',
    title: 'Ideation',
    metrics: [
      { label: 'Ideas Submitted', value: 25, icon: Lightbulb },
      { label: 'Ideas Approved', value: 10, icon: Star },
      { label: 'Ideas in Review', value: 5, icon: Users },
    ],
    progress: 40,
    gradientFrom: '#4F46E5',
    gradientTo: '#7C3AED',
    charts: {
      pie: {
        title: 'Ideas Distribution',
        data: [
          { name: 'Approved', value: 10 },
          { name: 'Rejected', value: 10 },
          { name: 'In Review', value: 5 },
        ],
      },
      bar: {
        title: 'Ideas per Team',
        data: [
          { name: 'Team A', value: 8 },
          { name: 'Team B', value: 12 },
          { name: 'Team C', value: 5 },
        ],
      },
    },
    lists: [
      {
        title: 'Recent Ideas',
        items: [
          { label: 'Mobile App Redesign', value: 'In Review' },
          { label: 'Customer Portal', value: 'Approved' },
          { label: 'API Integration', value: 'Pending' },
        ],
      },
    ],
  },
  {
    id: 'research',
    title: 'Research & Validation',
    metrics: [
      { label: 'Surveys Conducted', value: 15, icon: ClipboardList },
      { label: 'Customer Interviews', value: 20, icon: UserCheck },
      { label: 'Validation Completed', value: 8, icon: CheckSquare },
    ],
    progress: 60,
    gradientFrom: '#2563EB',
    gradientTo: '#3B82F6',
    charts: {
      pie: {
        title: 'Validation Results',
        data: [
          { name: 'Validated', value: 8 },
          { name: 'Invalidated', value: 4 },
          { name: 'Pending', value: 3 },
        ],
      },
      bar: {
        title: 'Survey Responses',
        data: [
          { name: 'Week 1', value: 45 },
          { name: 'Week 2', value: 65 },
          { name: 'Week 3', value: 85 },
        ],
      },
    },
    lists: [
      {
        title: 'Recent Surveys',
        items: [
          { label: 'User Experience Survey', value: '85% Response Rate' },
          { label: 'Feature Priority Survey', value: '72% Response Rate' },
          { label: 'Market Research Survey', value: '90% Response Rate' },
        ],
      },
    ],
  },
  {
    id: 'planning',
    title: 'Planning & Roadmapping',
    metrics: [
      { label: 'Roadmap Milestones', value: 12, icon: Calendar },
      { label: 'Tasks Created', value: 50, icon: ListTodo },
      { label: 'Dependencies', value: 10, icon: GitCommit },
    ],
    progress: 30,
    gradientFrom: '#059669',
    gradientTo: '#10B981',
    charts: {
      pie: {
        title: 'Task Distribution',
        data: [
          { name: 'To Do', value: 25 },
          { name: 'In Progress', value: 15 },
          { name: 'Done', value: 10 },
        ],
      },
      bar: {
        title: 'Milestones Status',
        data: [
          { name: 'Achieved', value: 8 },
          { name: 'Pending', value: 4 },
        ],
      },
    },
    lists: [
      {
        title: 'Key Milestones',
        items: [
          { label: 'MVP Release', value: 'Oct 15, 2023' },
          { label: 'Beta Testing', value: 'Nov 1, 2023' },
          { label: 'Public Launch', value: 'Dec 1, 2023' },
        ],
      },
    ],
  },
  {
    id: 'development',
    title: 'Development',
    metrics: [
      { label: 'Tasks Completed', value: 35, icon: CheckSquare },
      { label: 'Bugs Reported', value: 12, icon: Bug },
      { label: 'Code Commits', value: 120, icon: Code },
    ],
    progress: 70,
    gradientFrom: '#DC2626',
    gradientTo: '#EF4444',
    charts: {
      pie: {
        title: 'Task Status',
        data: [
          { name: 'Completed', value: 35 },
          { name: 'In Progress', value: 10 },
          { name: 'Blocked', value: 5 },
        ],
      },
      bar: {
        title: 'Bug Status',
        data: [
          { name: 'Open', value: 5 },
          { name: 'In Progress', value: 4 },
          { name: 'Resolved', value: 3 },
        ],
      },
    },
    lists: [
      {
        title: 'Recent Commits',
        items: [
          { label: 'Feature: User Authentication', value: '@dev1' },
          { label: 'Fix: Dashboard Layout', value: '@dev2' },
          { label: 'Update: API Integration', value: '@dev3' },
        ],
      },
    ],
  },
  {
    id: 'testing',
    title: 'Testing & QA',
    metrics: [
      { label: 'Test Cases Executed', value: 100, icon: FileCheck },
      { label: 'Bugs Found', value: 20, icon: AlertTriangle },
      { label: 'Test Coverage', value: '85%', icon: Percent },
    ],
    progress: 50,
    gradientFrom: '#7C3AED',
    gradientTo: '#8B5CF6',
    charts: {
      pie: {
        title: 'Test Results',
        data: [
          { name: 'Passed', value: 85 },
          { name: 'Failed', value: 10 },
          { name: 'Pending', value: 5 },
        ],
      },
      bar: {
        title: 'Bugs per Tester',
        data: [
          { name: 'Tester A', value: 8 },
          { name: 'Tester B', value: 7 },
          { name: 'Tester C', value: 5 },
        ],
      },
    },
    lists: [
      {
        title: 'Critical Bugs',
        items: [
          { label: 'Login Authentication', value: 'High' },
          { label: 'Data Sync', value: 'Critical' },
          { label: 'Performance Issue', value: 'Medium' },
        ],
      },
    ],
  },
  {
    id: 'launch',
    title: 'Launch',
    metrics: [
      { label: 'Launch Date', value: '10/25/23', icon: Timer },
      { label: 'Pre-Launch Tasks', value: 15, icon: ListTodo },
      { label: 'Post-Launch Tasks', value: 10, icon: CheckSquare },
    ],
    progress: 90,
    gradientFrom: '#0D9488',
    gradientTo: '#14B8A6',
    charts: {
      pie: {
        title: 'Launch Tasks',
        data: [
          { name: 'Completed', value: 20 },
          { name: 'Remaining', value: 5 },
        ],
      },
      bar: {
        title: 'Task Progress',
        data: [
          { name: 'Pre-Launch', value: 12 },
          { name: 'Post-Launch', value: 8 },
        ],
      },
    },
    lists: [
      {
        title: 'Launch Checklist',
        items: [
          { label: 'Security Audit', value: 'Completed' },
          { label: 'Performance Testing', value: 'In Progress' },
          { label: 'Documentation', value: 'Pending' },
        ],
      },
    ],
  },
  {
    id: 'maintenance',
    title: 'Post-Launch & Maintenance',
    metrics: [
      { label: 'Bugs Reported', value: 5, icon: Bug },
      { label: 'Feature Requests', value: 8, icon: MessageSquare },
      { label: 'Customer Satisfaction', value: '92%', icon: Heart },
    ],
    progress: 80,
    gradientFrom: '#9333EA',
    gradientTo: '#A855F7',
    charts: {
      pie: {
        title: 'Feature Requests',
        data: [
          { name: 'High Priority', value: 3 },
          { name: 'Medium Priority', value: 3 },
          { name: 'Low Priority', value: 2 },
        ],
      },
      bar: {
        title: 'Bug Reports',
        data: [
          { name: 'Week 1', value: 3 },
          { name: 'Week 2', value: 1 },
          { name: 'Week 3', value: 1 },
        ],
      },
    },
    lists: [
      {
        title: 'Recent Feedback',
        items: [
          { label: 'User Interface', value: '4.5/5' },
          { label: 'Performance', value: '4.8/5' },
          { label: 'Features', value: '4.2/5' },
        ],
      },
    ],
  },
];