// src/pages/LearningHub/components/CourseDetail.jsx

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CourseDetail.scss';
import { 
  Clock, 
  Users, 
  Star, 
  Play, 
  BookOpen, 
  FileText, 
  CheckCircle,
  ChevronRight,
  Download,
  Share2,
  Bookmark,
  GitBranch,
  ArrowLeft,
  Lock,
  AlertCircle
} from 'lucide-react';
import { coursesData, quickResources } from '../data/courseData';
import SprintRoadmap from './SprintRoadmap';
import QuickResourceModal from './QuickResourceModal';

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [showResourceModal, setShowResourceModal] = useState(false);

  // Find the course with error handling
  const course = coursesData.find(c => c.id === parseInt(courseId));

  // Handle course not found
  if (!course) {
    return (
      <div className="course-not-found">
        <div className="not-found-content">
          <AlertCircle size={64} className="not-found-icon" />
          <h2>Course Not Found</h2>
          <p>The course you're looking for doesn't exist or has been removed.</p>
          <p className="course-id">Course ID: {courseId}</p>
          <button onClick={() => navigate('/learning-hub')} className="btn-primary">
            Back to Learning Hub
          </button>
        </div>
      </div>
    );
  }

  const {
    title,
    description,
    category,
    instructor,
    progress,
    duration,
    students,
    rating,
    status,
    color,
    sprints,
    image,
    fallbackImage,
    tags,
    shortTitle,
  } = course;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BookOpen size={18} /> },
    { id: 'roadmap', label: 'Sprint Roadmap', icon: <GitBranch size={18} /> },
    { id: 'resources', label: 'Resources', icon: <FileText size={18} /> },
  ];

  const getStatusColor = () => {
    switch (status) {
      case 'completed': return 'status--completed';
      case 'in-progress': return 'status--progress';
      default: return 'status--not-started';
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      default: return 'Not Started';
    }
  };

  const handleSprintSelect = (sprint) => {
    navigate(`/learning-hub/course/${courseId}/sprint/${sprint.id}`);
  };

  const handleBack = () => {
    navigate('/learning-hub');
  };

  const handleResume = () => {
    const inProgressSprint = sprints?.find(s => s.status === 'in-progress' && !s.isLocked);
    if (inProgressSprint) {
      navigate(`/learning-hub/course/${courseId}/sprint/${inProgressSprint.id}`);
    } else {
      navigate(`/learning-hub/course/${courseId}/roadmap`);
    }
  };

  const handleResourceClick = (resource) => {
    setSelectedResource(resource);
    setShowResourceModal(true);
  };

  const handleCloseModal = () => {
    setShowResourceModal(false);
    setSelectedResource(null);
  };

  // Get image source with fallback
  const getImageSrc = () => {
    if (imageError || !image) {
      return fallbackImage || `data:image/svg+xml,${encodeURIComponent(`
        <svg width="600" height="200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:${color};stop-opacity:0.9" />
              <stop offset="100%" style="stop-color:${color};stop-opacity:0.4" />
            </linearGradient>
          </defs>
          <rect width="600" height="200" fill="url(#grad)"/>
          <text x="300" y="100" text-anchor="middle" fill="white" font-size="48" font-weight="bold" font-family="Inter">${shortTitle || title}</text>
          <text x="300" y="135" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="18" font-family="Inter">${category}</text>
        </svg>
      `)}`;
    }
    return image;
  };

  // If showing roadmap
  if (showRoadmap) {
    return (
      <SprintRoadmap
        sprints={sprints || []}
        courseTitle={title}
        color={color}
        onSprintSelect={handleSprintSelect}
        onBack={() => setShowRoadmap(false)}
      />
    );
  }

  return (
    <>
      <div className="course-detail">
        {/* Back Button */}
        <button className="back-button" onClick={handleBack}>
          <ArrowLeft size={20} />
          Back to Courses
        </button>

        {/* Hero Section */}
        <div className="course-detail__hero" style={{ borderColor: color }}>
          {/* Course Image */}
          <div className="course-detail__image-wrapper">
            <img 
              src={getImageSrc()} 
              alt={title}
              className="course-detail__hero-image"
              onError={() => setImageError(true)}
            />
            <div className="course-detail__image-overlay">
              <span className="course-detail__category-badge" style={{ background: color }}>
                {category}
              </span>
              {tags && tags.length > 0 && (
                <div className="course-detail__tags">
                  {tags.map((tag, index) => (
                    <span key={index} className="course-detail__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="course-detail__hero-content">
            <div className="course-detail__breadcrumb">
              <span>Learning Hub</span>
              <ChevronRight size={16} />
              <span>{category}</span>
              <ChevronRight size={16} />
              <span className="active">{title}</span>
            </div>

            <h1 className="course-detail__title">{title}</h1>
            <p className="course-detail__description">{description}</p>

            <div className="course-detail__meta">
              <span className="course-detail__category" style={{ background: `${color}20`, color: color }}>
                {category}
              </span>
              <span className={`course-detail__status ${getStatusColor()}`}>
                {getStatusLabel()}
              </span>
            </div>

            <div className="course-detail__stats">
              <div className="stat-item">
                <Clock size={18} />
                <span>{duration}</span>
              </div>
              <div className="stat-item">
                <Users size={18} />
                <span>{students} students</span>
              </div>
              <div className="stat-item">
                <Star size={18} className="star" />
                <span>{rating}</span>
              </div>
            </div>

            <div className="course-detail__progress">
              <div className="progress-header">
                <span>Overall Progress</span>
                <span>{progress}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%`, background: color }} />
              </div>
            </div>

            <div className="course-detail__actions">
              <button className="btn-primary" onClick={handleResume} style={{ background: color }}>
                <Play size={18} />
                {status === 'completed' ? 'Review Course' : 'Continue Learning'}
              </button>
              <button className="btn-secondary" onClick={() => setShowRoadmap(true)}>
                <GitBranch size={18} />
                View Roadmap
              </button>
              <button className="btn-secondary">
                <Bookmark size={18} />
                Save
              </button>
              <button className="btn-secondary">
                <Share2 size={18} />
                Share
              </button>
            </div>
          </div>

          <div className="course-detail__instructor">
            <div className="instructor-card">
              <div className="instructor-avatar-large" style={{ background: color }}>
                {instructor.charAt(0).toUpperCase()}
              </div>
              <div className="instructor-info">
                <span className="instructor-name">{instructor}</span>
                <span className="instructor-role">Course Instructor</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="course-detail__tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="course-detail__content">
          {activeTab === 'overview' && (
            <div className="tab-content">
              <div className="course-tracks">
                <h3>Course Progress</h3>
                <div className="tracks-grid">
                  {sprints?.map((sprint, index) => (
                    <div 
                      key={sprint.id} 
                      className={`track-card ${sprint.isLocked ? 'locked' : ''}`}
                      onClick={() => !sprint.isLocked && handleSprintSelect(sprint)}
                    >
                      <div className="track-header">
                        <span className="track-number">#{index + 1}</span>
                        <span className="track-progress">{sprint.progress}%</span>
                      </div>
                      <h4 className="track-title">{sprint.title}</h4>
                      <p className="track-description">{sprint.description}</p>
                      <div className="track-progress-bar">
                        <div className="track-progress-fill" style={{ width: `${sprint.progress}%`, background: color }} />
                      </div>
                      <button className="track-action" style={{ color: color }}>
                        {sprint.isLocked ? <><Lock size={14} /> Locked</> : 
                         sprint.progress === 100 ? '✅ Completed' : 'Continue Sprint'}
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Resources */}
              <div className="quick-resources">
                <h3>Quick Resources</h3>
                <div className="resource-chips">
                  {quickResources.map((resource) => (
                    <span 
                      key={resource.id} 
                      className="chip"
                      onClick={() => handleResourceClick(resource)}
                    >
                      {resource.icon} {resource.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'roadmap' && (
            <div className="tab-content">
              <div className="roadmap-preview">
                <div className="preview-header">
                  <h3>Sprint Roadmap</h3>
                  <button className="view-roadmap-btn" onClick={() => setShowRoadmap(true)} style={{ background: color }}>
                    View Full Roadmap
                    <ChevronRight size={16} />
                  </button>
                </div>
                <div className="preview-list">
                  {sprints?.slice(0, 4).map((sprint, index) => (
                    <div key={sprint.id} className="preview-item">
                      <span className="preview-number">{index + 1}</span>
                      <span className="preview-title">{sprint.title}</span>
                      <span className={`preview-status ${sprint.isLocked ? 'locked' : sprint.status}`}>
                        {sprint.isLocked ? '🔒' : sprint.status === 'completed' ? '✅' : '🔄'}
                      </span>
                    </div>
                  ))}
                  {sprints?.length > 4 && (
                    <div className="preview-more">+{sprints.length - 4} more sprints</div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="tab-content">
              <div className="resources-list">
                {[
                  { name: 'Course Notes', type: 'PDF', size: '2.4 MB' },
                  { name: 'Practice Problems', type: 'PDF', size: '1.8 MB' },
                  { name: 'Solution Guide', type: 'PDF', size: '3.2 MB' },
                  { name: 'Video Lectures', type: 'MP4', size: '450 MB' },
                ].map((resource, index) => (
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
      </div>

      {/* Quick Resource Modal */}
      <QuickResourceModal
        isOpen={showResourceModal}
        onClose={handleCloseModal}
        resource={selectedResource}
        course={course}
      />
    </>
  );
};

export default CourseDetail;