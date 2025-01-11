import React, { useState, useMemo } from 'react';
import { Search, Calendar, ClipboardList, Target, BookOpen, X, BarChart3, Clock, Tag, 
  Home, Settings, Users, FileText, Box, Truck, Shield, Leaf, Menu, ChevronDown } from 'lucide-react';

export default function SupplyChainDashboard() {
  const [selectedProcess, setSelectedProcess] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [projectFilter, setProjectFilter] = useState('All Projects');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Add project options
  const projectOptions = [
    'All Projects',
    'North America Operations',
    'European Supply Chain',
    'APAC Distribution',
    'Global Logistics',
    'Sustainability Initiatives'
  ];

  // Sidebar navigation items
  const sidebarItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: Box, label: 'Inventory', active: false },
    { icon: Truck, label: 'Logistics', active: false },
    { icon: FileText, label: 'Documents', active: false },
    { icon: Users, label: 'Suppliers', active: false },
    { icon: Shield, label: 'Compliance', active: false },
    { icon: Leaf, label: 'Sustainability', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  const processData = useMemo(() => ({
    "PM-NPI": {
      title: "PM-NPI (New Product Introduction)",
      category: "Product Management",
      documents: [
        { name: "New Product Introduction - Operations Guide", id: "OPS-001", priority: "High", status: "Active", lastUpdated: "2024-01-15" },
        { name: "NPI Part Development Expense Guide", id: "OPS-002", priority: "Medium", status: "Active", lastUpdated: "2024-01-20" },
        { name: "NCR Status Update and Credit Memo Collection", id: "SCM-001", priority: "High", status: "Active", lastUpdated: "2024-01-18" }
      ],
      status: "Active",
      description: "New Product Introduction and development processes",
      priority: "High",
      metrics: [
        { name: "Process Compliance", value: "94%", trend: "improving" },
        { name: "Cycle Time", value: "45 days", trend: "stable" }
      ]
    },
    "SCM": {
      title: "Supply Chain Management",
      category: "Operations",
      documents: [
        { name: "Supplier Quality Business Review (QBR)", id: "SCM-002", priority: "High", status: "Active", lastUpdated: "2024-01-22" },
        { name: "Material Supplier Qualification Process", id: "SCM-003", priority: "High", status: "Active", lastUpdated: "2024-01-25" },
        { name: "Logistics Sourcing Process", id: "SCM-004", priority: "Medium", status: "Active", lastUpdated: "2024-01-21" }
      ],
      status: "Active",
      description: "Core supply chain management processes and procedures",
      priority: "High",
      metrics: [
        { name: "Supplier Performance", value: "87%", trend: "improving" },
        { name: "Cost Savings", value: "$2.3M", trend: "improving" }
      ]
    },
    "PLANNING": {
      title: "Planning",
      category: "Operations",
      documents: [
        { name: "Order Management & Inventory Management", id: "PLN-001", priority: "High", status: "Active", lastUpdated: "2024-01-19" },
        { name: "OTD Reporting Process", id: "PLN-002", priority: "High", status: "Active", lastUpdated: "2024-01-23" },
        { name: "Supply Allocation Process", id: "PLN-003", priority: "High", status: "Active", lastUpdated: "2024-01-24" }
      ],
      status: "Active",
      description: "Demand planning and inventory management processes",
      priority: "High",
      metrics: [
        { name: "Forecast Accuracy", value: "85%", trend: "stable" },
        { name: "Inventory Turns", value: "12.5", trend: "improving" }
      ]
    },
    "PROCUREMENT": {
      title: "Procurement",
      category: "Purchasing",
      documents: [
        { name: "Direct and Indirect PO Classification", id: "PRC-001", priority: "Medium", status: "Active", lastUpdated: "2024-01-26" },
        { name: "Vendor Setup Procedures", id: "PRC-002", priority: "High", status: "Active", lastUpdated: "2024-01-27" },
        { name: "BOM Variance Analysis", id: "PRC-003", priority: "High", status: "Active", lastUpdated: "2024-01-28" }
      ],
      status: "Active",
      description: "Purchase order and vendor management processes",
      priority: "High",
      metrics: [
        { name: "PO Accuracy", value: "96%", trend: "stable" },
        { name: "Vendor Compliance", value: "92%", trend: "improving" }
      ]
    },
    "LOGISTICS": {
      title: "Logistics Operations",
      category: "Operations",
      documents: [
        { name: "International Booking Process", id: "LOG-001", priority: "High", status: "Active", lastUpdated: "2024-01-29" },
        { name: "Regional Logistics Coordination", id: "LOG-002", priority: "High", status: "Active", lastUpdated: "2024-01-30" },
        { name: "Letter of Credit Projects", id: "LOG-003", priority: "Medium", status: "Active", lastUpdated: "2024-01-31" }
      ],
      status: "Active",
      description: "Global logistics and transportation management",
      priority: "High",
      metrics: [
        { name: "On-Time Delivery", value: "94%", trend: "improving" },
        { name: "Freight Cost", value: "-8%", trend: "improving" }
      ]
    },
    "INVENTORY": {
      title: "Inventory/Warehouse",
      category: "Operations",
      documents: [
        { name: "Warehouse Operations Guide", id: "INV-001", priority: "High", status: "Active", lastUpdated: "2024-02-01" },
        { name: "Inventory Reconciliation Process", id: "INV-002", priority: "High", status: "Active", lastUpdated: "2024-02-02" },
        { name: "Supplier Liquidated Damages Process", id: "INV-003", priority: "Medium", status: "Active", lastUpdated: "2024-02-03" }
      ],
      status: "Active",
      description: "Warehouse operations and inventory management",
      priority: "High",
      metrics: [
        { name: "Inventory Accuracy", value: "99.2%", trend: "stable" },
        { name: "Storage Utilization", value: "87%", trend: "improving" }
      ]
    },
    "TRADE": {
      title: "Trade Compliance",
      category: "Compliance",
      documents: [
        { name: "Import Audit Procedure", id: "TRD-001", priority: "High", status: "Active", lastUpdated: "2024-02-04" },
        { name: "Import Classification Procedure", id: "TRD-002", priority: "High", status: "Active", lastUpdated: "2024-02-05" },
        { name: "Country of Origin Procedure", id: "TRD-003", priority: "High", status: "Active", lastUpdated: "2024-02-06" }
      ],
      status: "Active",
      description: "Trade compliance and import/export procedures",
      priority: "High",
      metrics: [
        { name: "Compliance Rate", value: "100%", trend: "stable" },
        { name: "Audit Success", value: "98%", trend: "improving" }
      ]
    },
    "SUSTAINABILITY": {
      title: "Sustainability",
      category: "ESG",
      documents: [
        { name: "Supplier Selection Criteria", id: "SUS-001", priority: "High", status: "Active", lastUpdated: "2024-02-07" },
        { name: "Climate Risk Assessment", id: "SUS-002", priority: "High", status: "Active", lastUpdated: "2024-02-08" },
        { name: "Sustainable Product Design", id: "SUS-003", priority: "High", status: "Active", lastUpdated: "2024-02-09" }
      ],
      status: "Active",
      description: "Sustainability and environmental management",
      priority: "High",
      metrics: [
        { name: "ESG Score", value: "85/100", trend: "improving" },
        { name: "Carbon Reduction", value: "-12%", trend: "improving" }
      ]
    }
  }), []);

  const categories = useMemo(() => {
    const cats = new Set(Object.values(processData).map(p => p.category));
    return ['All', ...Array.from(cats)];
  }, [processData]);

  const statuses = useMemo(() => {
    const stats = new Set(Object.values(processData).map(p => p.status));
    return ['All', ...Array.from(stats)];
  }, [processData]);

  const filteredProcesses = useMemo(() => {
    return Object.entries(processData).filter(([_, data]) => {
      const matchesSearch = data.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          data.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          data.documents.some(doc => doc.name.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = categoryFilter === 'All' || data.category === categoryFilter;
      const matchesStatus = statusFilter === 'All' || data.status === statusFilter;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchTerm, categoryFilter, statusFilter, processData]);

  function renderProcessCard(id, data) {
    // Generate random coverage between 0-80%
    const coverage = Math.floor(Math.random() * 81);
    
    // Color coding based on coverage percentage
    const getCoverageColor = (percentage) => {
      if (percentage < 30) return 'bg-red-600';
      if (percentage < 60) return 'bg-yellow-500';
      return 'bg-green-600';
    };

    // Status color coding
    const getStatusColor = (status) => {
      switch (status.toLowerCase()) {
        case 'active':
          return 'bg-green-100 text-green-800';
        case 'pending':
          return 'bg-yellow-100 text-yellow-800';
        case 'draft':
          return 'bg-gray-100 text-gray-800';
        default:
          return 'bg-blue-100 text-blue-800';
      }
    };

    return (
      <div 
        className="border border-gray-200 rounded-xl p-5 cursor-pointer hover:shadow-lg transition-all hover:border-blue-200 bg-white"
        onClick={() => setSelectedProcess({ id, ...data })}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-gray-800">{data.title}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            data.priority === 'High' ? 'bg-blue-100 text-blue-800' : 
            'bg-gray-100 text-gray-800'
          }`}>
            {data.category}
          </span>
        </div>
        
        <div className="space-y-4">
          <p className="text-sm text-gray-600 line-clamp-2">{data.description}</p>
          
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Document Coverage</span>
              <span className={`font-medium ${
                coverage < 30 ? 'text-red-600' :
                coverage < 60 ? 'text-yellow-600' :
                'text-green-600'
              }`}>{coverage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`${getCoverageColor(coverage)} h-2 rounded-full transition-all`}
                style={{ width: `${coverage}%` }}
              />
            </div>
          </div>

          <div className="flex justify-between text-sm text-gray-600">
            <span>{data.documents.length} Documents</span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(data.status)}`}>
              {data.status}
            </span>
          </div>
        </div>
      </div>
    );
  }

  function renderDetailModal() {
    if (!selectedProcess) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold">{selectedProcess.title}</h2>
                <span className={`px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800`}>
                  {selectedProcess.category}
                </span>
              </div>
              <p className="text-gray-600">{selectedProcess.description}</p>
            </div>
            <button 
              onClick={() => setSelectedProcess(null)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <ClipboardList size={18} />
                Documents
              </h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {selectedProcess.documents.map((doc, index) => (
                  <div key={index} 
                    className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-medium">{doc.name}</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                          <BookOpen size={14} />
                          <span>ID: {doc.id}</span>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        doc.status === 'Active' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {doc.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>Updated: {doc.lastUpdated}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag size={14} />
                        <span className={`${
                          doc.priority === 'High' ? 'text-blue-600' :
                          'text-gray-600'
                        }`}>
                          {doc.priority}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <BarChart3 size={18} />
                Process Metrics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedProcess.metrics.map((metric, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-xl">
                    <div className="text-sm text-gray-600 mb-1">{metric.name}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-semibold">{metric.value}</span>
                      <span className={`text-sm ${
                        metric.trend === 'improving' ? 'text-green-600' :
                        metric.trend === 'stable' ? 'text-blue-600' :
                        'text-red-600'
                      }`}>
                        {metric.trend === 'improving' ? '↑' : 
                         metric.trend === 'stable' ? '→' : '↓'}
                      </span>
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

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-gray-200 transition-all duration-300 flex flex-col fixed h-full`}>
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h1 className={`font-bold text-xl ${!isSidebarOpen && 'hidden'}`}>Supply Chain</h1>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu size={20} />
          </button>
        </div>
        <nav className="flex-1 p-4">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-3 p-3 rounded-lg mb-2 transition-colors ${
                item.active 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              <item.icon size={20} />
              {isSidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className={`flex-1 ${isSidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
        <div className="max-w-7xl mx-auto p-6">
          {/* Header with Project Filter */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Process Management</h1>
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 font-medium"
                  value={projectFilter}
                  onChange={(e) => setProjectFilter(e.target.value)}
                >
                  {projectOptions.map(project => (
                    <option key={project} value={project}>{project}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              </div>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search processes, documents, or IDs..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex gap-3">
                <select
                  className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white min-w-[140px]"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                
                <select
                  className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white min-w-[140px]"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  {statuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Process Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProcesses.map(([id, data]) => (
              <div key={id}>
                {renderProcessCard(id, data)}
              </div>
            ))}
          </div>

          {renderDetailModal()}
        </div>
      </div>
    </div>
  );
}