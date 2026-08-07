// src/pages/LearningHub/components/QuickResourceModal.jsx

import React, { useState } from 'react';
import './QuickResourceModal.scss';
import { 
  X, 
  FileText, 
  Video, 
  ClipboardList, 
  FileQuestion,
  Download,
  Eye,
  Play,
  CheckCircle,
  Clock,
  ChevronRight,
  BookOpen,
  Bookmark,
  Share2
} from 'lucide-react';

const QuickResourceModal = ({ isOpen, onClose, resource, course }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen || !resource) return null;

  const getResourceIcon = (type) => {
    switch (type) {
      case 'notes':
        return <FileText size={24} />;
      case 'reading':
        return <BookOpen size={24} />;
      case 'cheat':
        return <ClipboardList size={24} />;
      case 'quiz':
        return <FileQuestion size={24} />;
      case 'assignment':
        return <ClipboardList size={24} />;
      default:
        return <FileText size={24} />;
    }
  };

  const getResourceColor = (type) => {
    switch (type) {
      case 'notes':
        return '#0D9488';
      case 'reading':
        return '#0D9488';
      case 'cheat':
        return '#0D9488';
      case 'quiz':
        return '#0D9488';
      case 'assignment':
        return '#0D9488';
      default:
        return '#0D9488';
    }
  };

  const getResourceEmoji = (type) => {
    switch (type) {
      case 'notes':
        return '📝';
      case 'reading':
        return '📚';
      case 'cheat':
        return '📋';
      case 'quiz':
        return '📝';
      case 'assignment':
        return '📄';
      default:
        return '📄';
    }
  };

  // Mock resource content based on type
  const getResourceContent = () => {
    const contents = {
      notes: {
        title: `${resource.title} - Detailed Notes`,
        description: 'Comprehensive notes covering all key concepts with examples and diagrams.',
        items: [
          { title: 'Introduction & Overview', duration: '15 min', completed: true },
          { title: 'Core Concepts Explained', duration: '25 min', completed: true },
          { title: 'Advanced Topics', duration: '20 min', completed: false },
          { title: 'Summary & Key Takeaways', duration: '10 min', completed: false },
        ],
        resources: [
          { name: 'Complete Notes PDF', type: 'PDF', size: '2.4 MB' },
          { name: 'Practice Examples', type: 'PDF', size: '1.8 MB' },
          { name: 'Quick Reference Guide', type: 'PDF', size: '0.8 MB' },
        ]
      },
      reading: {
        title: `${resource.title} - Reading Material`,
        description: 'Curated reading materials to deepen your understanding of the subject.',
        items: [
          { title: 'Introduction Chapter', duration: '30 min', completed: true },
          { title: 'Core Concepts', duration: '45 min', completed: false },
          { title: 'Advanced Reading', duration: '40 min', completed: false },
          { title: 'Case Studies', duration: '35 min', completed: false },
        ],
        resources: [
          { name: 'Reading Material PDF', type: 'PDF', size: '3.2 MB' },
          { name: 'Case Studies', type: 'PDF', size: '2.1 MB' },
          { name: 'Additional Resources', type: 'PDF', size: '1.5 MB' },
        ]
      },
      cheat: {
        title: `${resource.title} - Cheat Sheet`,
        description: 'Quick reference guide with key formulas, concepts, and best practices.',
        items: [
          { title: 'Key Formulas', duration: '10 min', completed: true },
          { title: 'Common Patterns', duration: '15 min', completed: false },
          { title: 'Best Practices', duration: '10 min', completed: false },
        ],
        resources: [
          { name: 'Cheat Sheet PDF', type: 'PDF', size: '0.5 MB' },
          { name: 'Quick Reference', type: 'PDF', size: '0.3 MB' },
        ]
      },
      quiz: {
        title: `${resource.title} - Quiz`,
        description: 'Test your knowledge with interactive quizzes and assessments.',
        items: [
          { title: 'Quiz 1: Fundamentals', duration: '15 min', completed: false },
          { title: 'Quiz 2: Core Concepts', duration: '20 min', completed: false },
          { title: 'Quiz 3: Advanced Topics', duration: '25 min', completed: false },
        ],
        resources: [
          { name: 'Quiz Questions', type: 'PDF', size: '1.2 MB' },
          { name: 'Answer Key', type: 'PDF', size: '0.8 MB' },
        ]
      },
      assignment: {
        title: `${resource.title} - Assignment`,
        description: 'Practical assignments to apply your knowledge and build real-world skills.',
        items: [
          { title: 'Assignment 1: Basic Problems', duration: '60 min', completed: false },
          { title: 'Assignment 2: Intermediate', duration: '90 min', completed: false },
          { title: 'Assignment 3: Advanced', duration: '120 min', completed: false },
        ],
        resources: [
          { name: 'Assignment Brief', type: 'PDF', size: '2.0 MB' },
          { name: 'Starter Code', type: 'ZIP', size: '4.5 MB' },
          { name: 'Solution Guide', type: 'PDF', size: '3.0 MB' },
        ]
      }
    };

    return contents[resource.type] || contents.notes;
  };

  const content = getResourceContent();
  const color = getResourceColor(resource.type);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header" style={{ borderBottomColor: color }}>
          <div className="modal-header-left">
            <div className="modal-icon" style={{ background: `${color}20`, color: color }}>
              {getResourceIcon(resource.type)}
            </div>
            <div>
              <h2>{content.title}</h2>
              <p className="modal-subtitle">{course?.title || 'Course Resource'}</p>
            </div>
          </div>
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Tabs */}
        <div className="modal-tabs">
          <button 
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <BookOpen size={16} />
            Overview
          </button>
          <button 
            className={`tab-btn ${activeTab === 'content' ? 'active' : ''}`}
            onClick={() => setActiveTab('content')}
          >
            <FileText size={16} />
            Content
          </button>
          <button 
            className={`tab-btn ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            <Download size={16} />
            Resources
          </button>
        </div>

        {/* Content */}
        <div className="modal-body">
          {activeTab === 'overview' && (
            <div className="tab-content">
              <div className="overview-section">
                <div className="resource-badge" style={{ background: `${color}20`, color: color }}>
                  {getResourceEmoji(resource.type)} {resource.title}
                </div>
                <p className="overview-description">{content.description}</p>
                
                <div className="overview-stats">
                  <div className="stat-item">
                    <Clock size={16} />
                    <span>{content.items.length} sections</span>
                  </div>
                  <div className="stat-item">
                    <CheckCircle size={16} />
                    <span>{content.items.filter(i => i.completed).length} completed</span>
                  </div>
                  <div className="stat-item">
                    <FileText size={16} />
                    <span>{content.resources.length} resources</span>
                  </div>
                </div>
              </div>

              <div className="quick-actions">
                <button className="action-btn primary" style={{ background: color }}>
                  <Play size={18} />
                  Start Learning
                </button>
                <button className="action-btn secondary">
                  <Bookmark size={18} />
                  Save for Later
                </button>
                <button className="action-btn secondary">
                  <Share2 size={18} />
                  Share
                </button>
              </div>
            </div>
          )}

          {activeTab === 'content' && (
            <div className="tab-content">
              <div className="content-list">
                {content.items.map((item, index) => (
                  <div key={index} className="content-item">
                    <div className="content-item-left">
                      {item.completed ? (
                        <CheckCircle size={20} className="icon-completed" />
                      ) : (
                        <div className="content-number">{index + 1}</div>
                      )}
                      <div className="content-info">
                        <span className="content-title">{item.title}</span>
                        <span className="content-duration">{item.duration}</span>
                      </div>
                    </div>
                    <button className="content-action" style={{ color: color }}>
                      {item.completed ? 'Review' : 'Start'}
                      <ChevronRight size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="tab-content">
              <div className="resources-list">
                {content.resources.map((resource, index) => (
                  <div key={index} className="resource-item">
                    <FileText size={20} />
                    <div className="resource-info">
                      <span className="resource-name">{resource.name}</span>
                      <span className="resource-meta">{resource.type} • {resource.size}</span>
                    </div>
                    <button className="download-btn">
                      <Download size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button className="footer-btn" onClick={onClose}>
            Close
          </button>
          <button className="footer-btn primary" style={{ background: color }}>
            <Play size={16} />
            Continue Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickResourceModal;