import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Cloud, Code, BarChart3, Zap, Shield, Globe, Cpu, GitBranch, Settings, TrendingUp, Layers } from 'lucide-react';

const DataEngineeringDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-4 transition-colors duration-200"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
            Data Engineering Mastery Course
          </h1>
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
            Master data engineering from foundations to advanced concepts with hands-on modules and real-world projects.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link
            to="/data-engineering/module/1"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
              <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
              Module 1: Foundations of Data Engineering
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
              Understand the basics of data engineering, programming, and the data ecosystem. Learn about data pipelines, databases, and cloud platforms.
            </p>
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 transition-colors duration-200">
              Beginner
            </span>
          </Link>
          <Link
            to="/data-engineering/module/2"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
              <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
              Module 2: Programming Fundamentals for Data Engineering
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
              Master Python, SQL, and shell scripting for data engineering. Learn data manipulation, automation, and best practices.
            </p>
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 transition-colors duration-200">
              Beginner - Intermediate
            </span>
          </Link>
          <Link
            to="/data-engineering/module/3"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
              <BarChart3 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
              Module 3: Data Warehousing & Data Lakes
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
              Design and implement data warehouses and data lakes. Learn about data modeling, schema design, and storage optimization.
            </p>
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 transition-colors duration-200">
              Intermediate
            </span>
          </Link>
          <Link
            to="/data-engineering/module/4"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
              <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
              Module 4: Big Data Technologies & Distributed Computing
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
              Master Hadoop, Spark, and distributed computing concepts. Learn about streaming technologies and cloud big data services.
            </p>
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 transition-colors duration-200">
              Intermediate
            </span>
          </Link>
          <Link
            to="/data-engineering/module/5"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
              <Cpu className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
              Module 5: Data Pipeline Development & Orchestration
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
              Design and implement ETL pipelines, orchestrate workflows with Airflow, and ensure data quality and reliability.
            </p>
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 transition-colors duration-200">
              Intermediate - Advanced
            </span>
          </Link>
          <Link
            to="/data-engineering/module/6"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
              <Cloud className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
              Module 6: Data Governance, Security & Compliance
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
              Establish data governance frameworks, implement security measures, and ensure regulatory compliance for data management.
            </p>
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 transition-colors duration-200">
              Intermediate
            </span>
          </Link>
          <Link
            to="/data-engineering/module/7"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
              <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
              Module 7: MLOps & Data Science Integration
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
              Master MLOps practices, feature engineering, model monitoring, and integrate data science workflows with engineering systems.
            </p>
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 transition-colors duration-200">
              Advanced
            </span>
          </Link>
          <Link
            to="/data-engineering/module/8"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
              <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
              Module 8: Real-time Data Processing & Event-Driven Architecture
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
              Design and implement real-time data processing systems, event-driven architectures, and streaming analytics solutions.
            </p>
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 transition-colors duration-200">
              Intermediate
            </span>
          </Link>
          <Link
            to="/data-engineering/module/9"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
              <GitBranch className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
              Module 9: Data Engineering Best Practices & Advanced Patterns
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
              Master industry best practices, advanced architectural patterns, automation strategies, and career development in data engineering.
            </p>
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 transition-colors duration-200">
              Intermediate - Advanced
            </span>
          </Link>
          <Link
            to="/data-engineering/module/10"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
              <Layers className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
              Module 10: Advanced Data Engineering & Emerging Technologies
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
              Explore advanced architectural patterns, automation strategies, performance optimization, and emerging technologies in data engineering.
            </p>
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 transition-colors duration-200">
              Advanced
            </span>
          </Link>
          <Link
            to="/data-engineering/module/11"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
              <Settings className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
              Module 11: Performance Optimization & Monitoring
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
              Master performance optimization techniques, comprehensive monitoring, data quality validation, and incident management for data systems.
            </p>
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 transition-colors duration-200">
              Advanced
            </span>
          </Link>
          <Link
            to="/data-engineering/module/12"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
              <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
              Module 12: Real-World Data Engineering Projects
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
              Build end-to-end data engineering projects. Implement real-world scenarios covering all aspects of data engineering.
            </p>
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 transition-colors duration-200">
              Advanced
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DataEngineeringDashboard; 