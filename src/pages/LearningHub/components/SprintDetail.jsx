import React, { useState } from 'react';
import './SprintDetail.scss';
import { 
  ArrowLeft, 
  Play, 
  CheckCircle, 
  ChevronRight,
  FileText,
  Video,
  ClipboardList,
  FileQuestion,
  Clock,
  Award,
  BookOpen
} from 'lucide-react';

const SprintDetail = ({ sprint, courseTitle, onBack, onResume }) => {
  const [activeResource, setActiveResource] = useState('overview');

  const {
    id,
    title,
    description,
    progress,
    modules,
    resources
  } = sprint;

  const resourceItems = [
    { 
      id: 'notes', 
      icon: <FileText size={20} />, 
      label: 'Notes', 
      description: resources?.notes || 'Complete theory & concepts',
      action: 'View Notes'
    },
    { 
      id: 'video', 
      icon: <Video size={20} />, 
      label: 'Video Playlist', 
      description: resources?.video || 'Curated lectures',
      action: 'Continue Video Playlist'
    },
    { 
      id: 'practice', 
      icon: <ClipboardList size={20} />, 
      label: 'Practice', 
      description: resources?.practice || 'LeetCode & CodeStudio Index',
      action: 'Practice Problems'
    },
    { 
      id: 'assignment', 
      icon: <FileQuestion size={20} />, 
      label: 'Assignment', 
      description: resources?.assignment || 'Coding Problems',
      action: 'Solve Assignment'
    },
  ];

  const completedModules = modules.filter(m => m.completed).length;
  const totalModules = modules.length;

  return (
    <div className="sprint-detail">
      {/* Back Button */}
      <button className="back-button" onClick={onBack}>
        <ArrowLeft size={20} />
        Back to {courseTitle}
      </button>

      {/* Sprint Header */}
      <div className="sprint-detail__header">
        <div className="sprint-detail__badge">Active Sprint</div>
        <div className="sprint-detail__meta">
          <span className="sprint-detail__days">5 Days to 3 Days</span>
        </div>
        <h1 className="sprint-detail__title">{title}</h1>
        <p className="sprint-detail__description">{description}</p>

        <div className="sprint-detail__stats">
          <div className="stat-item">
            <BookOpen size={18} />
            <span>{totalModules} Modules</span>
          </div>
          <div className="stat-item">
            <CheckCircle size={18} />
            <span>{completedModules} Completed</span>
          </div>
          <div className="stat-item">
            <Clock size={18} />
            <span>{Math.round(totalModules * 45 / 60)}h {totalModules * 45 % 60}m</span>
          </div>
        </div>

        <div className="sprint-detail__progress">
          <div className="progress-header">
            <span>Sprint Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="sprint-detail__actions">
        <button className="btn-primary" onClick={onResume}>
          <Play size={18} />
          Continue Video Playlist
        </button>
        <button className="btn-secondary">
          <ClipboardList size={18} />
          Practice Problems
        </button>
      </div>

      {/* Modules Section */}
      <div className="sprint-detail__section">
        <h3 className="section-title">Modules</h3>
        <div className="modules-list">
          {modules.map((module, index) => (
            <div key={module.id} className={`module-item ${module.completed ? 'completed' : ''}`}>
              <div className="module-item__left">
                <span className="module-number">{String(index + 1).padStart(2, '0')}</span>
                <div className="module-info">
                  <span className="module-title">{module.title}</span>
                  <span className="module-duration">{module.duration}</span>
                </div>
              </div>
              <div className="module-item__right">
                {module.completed ? (
                  <CheckCircle size={20} className="icon-completed" />
                ) : (
                  <button className="module-play">
                    <Play size={16} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resources Section */}
      <div className="sprint-detail__section">
        <h3 className="section-title">Sprint Resources</h3>
        <div className="resources-grid">
          {resourceItems.map((resource) => (
            <div key={resource.id} className="resource-card">
              <div className="resource-icon">{resource.icon}</div>
              <div className="resource-content">
                <h4>{resource.label}</h4>
                <p>{resource.description}</p>
              </div>
              <button className="resource-action">
                {resource.action}
                <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Resources */}
      <div className="sprint-detail__section">
        <h3 className="section-title">Quick Resources</h3>
        <div className="quick-resources">
          <span className="chip">Theory Notes</span>
          <span className="chip">Reading Material</span>
          <span className="chip">Cheat Sheet</span>
          <span className="chip chip-pending">Quiz (Pending)</span>
          <span className="chip">Assignment</span>
        </div>
      </div>
    </div>
  );
};

export default SprintDetail;