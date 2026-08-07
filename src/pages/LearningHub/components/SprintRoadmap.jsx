import React, { useState } from 'react';
import './SprintRoadmap.scss';
import { 
  CheckCircle, 
  Lock, 
  Play, 
  ChevronRight,
  FileText,
  Video,
  ClipboardList,
  FileQuestion,
  Award,
  Clock,
  TrendingUp
} from 'lucide-react';

const SprintRoadmap = ({ sprints, courseTitle, color, onSprintSelect, onBack }) => {
  const [selectedSprint, setSelectedSprint] = useState(null);

  const getStatusIcon = (sprint) => {
    if (sprint.isLocked) {
      return <Lock size={18} className="icon-locked" />;
    }
    if (sprint.status === 'completed') {
      return <CheckCircle size={18} className="icon-completed" />;
    }
    return <Play size={18} className="icon-progress" />;
  };

  const getStatusText = (sprint) => {
    if (sprint.isLocked) return 'Locked';
    if (sprint.status === 'completed') return 'Completed';
    if (sprint.status === 'in-progress') return 'In Progress';
    return 'Not Started';
  };

  const getStatusClass = (sprint) => {
    if (sprint.isLocked) return 'status-locked';
    if (sprint.status === 'completed') return 'status-completed';
    if (sprint.status === 'in-progress') return 'status-progress';
    return 'status-not-started';
  };

  const handleSprintClick = (sprint) => {
    if (!sprint.isLocked) {
      setSelectedSprint(sprint);
      onSprintSelect(sprint);
    }
  };

  return (
    <div className="sprint-roadmap">
      {/* Header */}
      <div className="sprint-roadmap__header">
        <button className="back-button" onClick={onBack}>
          <ChevronRight size={20} />
          Back to Course
        </button>
        <div className="header-content">
          <div className="header-left">
            <h1 className="sprint-roadmap__title">Sprint Roadmap</h1>
            <p className="sprint-roadmap__subtitle">{courseTitle}</p>
          </div>
          <div className="header-right">
            <div className="roadmap-stats">
              <div className="stat-item">
                <Award size={18} />
                <span>{sprints.filter(s => s.status === 'completed').length} Completed</span>
              </div>
              <div className="stat-item">
                <Clock size={18} />
                <span>{sprints.filter(s => s.status === 'in-progress').length} In Progress</span>
              </div>
              <div className="stat-item">
                <Lock size={18} />
                <span>{sprints.filter(s => s.isLocked).length} Locked</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="sprint-roadmap__overview">
        <div className="overview-card">
          <div className="overview-progress">
            <div className="progress-circle">
              <svg viewBox="0 0 36 36" className="circular-chart">
                <path
                  className="circle-bg"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  strokeDasharray={`${Math.round(sprints.reduce((acc, s) => acc + s.progress, 0) / sprints.length)}, 100`}
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  style={{ stroke: color }}
                />
              </svg>
              <div className="progress-text">
                <span className="progress-value">
                  {Math.round(sprints.reduce((acc, s) => acc + s.progress, 0) / sprints.length)}%
                </span>
                <span className="progress-label">Overall</span>
              </div>
            </div>
            <div className="overview-stats">
              <div className="stat-row">
                <span className="stat-label">Total Sprints</span>
                <span className="stat-value">{sprints.length}</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Completed</span>
                <span className="stat-value" style={{ color: '#10B981' }}>
                  {sprints.filter(s => s.status === 'completed').length}
                </span>
              </div>
              <div className="stat-row">
                <span className="stat-label">In Progress</span>
                <span className="stat-value" style={{ color: '#F59E0B' }}>
                  {sprints.filter(s => s.status === 'in-progress').length}
                </span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Locked</span>
                <span className="stat-value" style={{ color: '#94A3B8' }}>
                  {sprints.filter(s => s.isLocked).length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sprint List */}
      <div className="sprint-roadmap__list">
        <div className="sprint-list-header">
          <span className="header-id">ID</span>
          <span className="header-topic">Topic</span>
          <span className="header-status">Status</span>
          <span className="header-action">Action</span>
        </div>

        {sprints.map((sprint, index) => (
          <div
            key={sprint.id}
            className={`sprint-item ${sprint.isLocked ? 'locked' : ''} ${sprint.status === 'completed' ? 'completed' : ''}`}
            onClick={() => handleSprintClick(sprint)}
            style={{ borderColor: sprint.isLocked ? '#E8EAE9' : color }}
          >
            <div className="sprint-item__id">
              <span className="id-number">{String(index + 1).padStart(2, '0')}</span>
            </div>

            <div className="sprint-item__topic">
              <div className="topic-content">
                <span className="topic-title">{sprint.title}</span>
                <span className="topic-description">{sprint.description}</span>
              </div>
            </div>

            <div className="sprint-item__status">
              <span className={`status-badge ${getStatusClass(sprint)}`}>
                {getStatusIcon(sprint)}
                {getStatusText(sprint)}
              </span>
              {sprint.status === 'in-progress' && !sprint.isLocked && (
                <span className="progress-small">{sprint.progress}%</span>
              )}
            </div>

            <div className="sprint-item__action">
              {sprint.isLocked ? (
                <button className="action-btn locked" disabled>
                  <Lock size={16} />
                  Locked
                </button>
              ) : sprint.status === 'completed' ? (
                <button className="action-btn completed" style={{ background: '#10B981' }}>
                  <CheckCircle size={16} />
                  Completed
                </button>
              ) : (
                <button className="action-btn launch" style={{ background: color }}>
                  <Play size={16} />
                  Launch
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Sprint Resources */}
      <div className="sprint-roadmap__resources">
        <h3 className="resources-title">Sprint Resources</h3>
        <div className="resources-grid">
          <div className="resource-card">
            <div className="resource-icon notes">
              <FileText size={20} />
            </div>
            <div className="resource-content">
              <h4>Notes</h4>
              <p>Complete theory & traversal concepts</p>
            </div>
            <button className="resource-btn">View</button>
          </div>

          <div className="resource-card">
            <div className="resource-icon video">
              <Video size={20} />
            </div>
            <div className="resource-content">
              <h4>Video Playlist</h4>
              <p>Curated lectures (3h 45m)</p>
            </div>
            <button className="resource-btn">Watch</button>
          </div>

          <div className="resource-card">
            <div className="resource-icon practice">
              <ClipboardList size={20} />
            </div>
            <div className="resource-content">
              <h4>Practice</h4>
              <p>LevelCode & CodeStudio links</p>
            </div>
            <button className="resource-btn">Start</button>
          </div>

          <div className="resource-card">
            <div className="resource-icon assignment">
              <FileQuestion size={20} />
            </div>
            <div className="resource-content">
              <h4>Assignment</h4>
              <p>12 Coding Problems</p>
            </div>
            <button className="resource-btn">Solve</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SprintRoadmap;