import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, FileCheck, AlertTriangle, Users, Calendar } from 'lucide-react';

const testPlanData = {
  projectOverview: {
    name: 'ProductFlow Platform',
    description: 'A comprehensive product lifecycle management system',
    scope: 'End-to-end testing of all product phases and features',
  },
  testCases: [
    {
      id: 'TC001',
      description: 'User Authentication',
      preconditions: 'Valid user credentials exist',
      steps: '1. Enter email\n2. Enter password\n3. Click login',
      expectedResults: 'Successful login with redirect to dashboard',
    },
    {
      id: 'TC002',
      description: 'Phase Creation',
      preconditions: 'User is authenticated with admin rights',
      steps: '1. Navigate to Phases\n2. Click Create Phase\n3. Fill details\n4. Save',
      expectedResults: 'New phase created and visible in dashboard',
    },
  ],
  environment: [
    { variable: 'API URL', value: 'https://api.productflow.dev', description: 'Development API endpoint' },
    { variable: 'Database', value: 'PostgreSQL 14', description: 'Main application database' },
  ],
  resources: [
    { id: 'QA001', name: 'QA Lead', description: 'Oversees testing strategy and execution' },
    { id: 'QA002', name: 'Test Engineers', description: 'Executes test cases and reports issues' },
  ],
};

export default function TestPlanPage() {
  const navigate = useNavigate();

  return (
    <div className="p-4 lg:p-8">
      <div className="flex items-center justify-between mb-8 mt-14 lg:mt-0">
        <div>
          <button
            onClick={() => navigate('/phase/testing')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft size={20} />
            Back to Testing & QA
          </button>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Test Plan
          </h1>
        </div>
      </div>

      <div className="grid gap-6">
        {/* Project Overview */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FileCheck className="text-indigo-600" />
            Project Overview
          </h2>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">Project Name</div>
                <div className="font-medium">{testPlanData.projectOverview.name}</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg md:col-span-2">
                <div className="text-sm text-gray-500 mb-1">Description</div>
                <div className="font-medium">{testPlanData.projectOverview.description}</div>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Scope</div>
              <div className="font-medium">{testPlanData.projectOverview.scope}</div>
            </div>
          </div>
        </div>

        {/* Test Cases */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="text-indigo-600" />
            Test Cases
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">ID</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Description</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Preconditions</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Steps</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Expected Results</th>
                </tr>
              </thead>
              <tbody>
                {testPlanData.testCases.map((testCase) => (
                  <tr key={testCase.id} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-sm">{testCase.id}</td>
                    <td className="py-3 px-4 text-sm">{testCase.description}</td>
                    <td className="py-3 px-4 text-sm">{testCase.preconditions}</td>
                    <td className="py-3 px-4 text-sm whitespace-pre-line">{testCase.steps}</td>
                    <td className="py-3 px-4 text-sm">{testCase.expectedResults}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Environment & Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Calendar className="text-indigo-600" />
              Test Environment
            </h2>
            <div className="space-y-4">
              {testPlanData.environment.map((env, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">{env.variable}</div>
                  <div className="font-medium">{env.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{env.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Users className="text-indigo-600" />
              Resource Allocation
            </h2>
            <div className="space-y-4">
              {testPlanData.resources.map((resource) => (
                <div key={resource.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium">{resource.name}</div>
                      <div className="text-sm text-gray-500">{resource.description}</div>
                    </div>
                    <div className="text-sm text-gray-500">{resource.id}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}