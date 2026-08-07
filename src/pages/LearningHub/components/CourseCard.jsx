// src/pages/LearningHub/components/CourseCard.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseCard.scss';
import { Clock, Users, Star, ChevronRight } from 'lucide-react';

const CourseCard = ({ course, onClick, onResume }) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const {
    id,
    title,
    description,
    category,
    instructor,
    progress,
    duration,
    students,
    rating,
    image,
    fallbackImage,
    status,
    tags,
    color,
    shortTitle,
  } = course;

  const getStatusColor = () => {
    switch (status) {
      case 'completed':
        return 'status--completed';
      case 'in-progress':
        return 'status--progress';
      default:
        return 'status--not-started';
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      default:
        return 'Not Started';
    }
  };

  const handleResumeClick = (e) => {
    e.stopPropagation();
    navigate(`/learning-hub/course/${id}`);
  };

  const handleCardClick = () => {
    navigate(`/learning-hub/course/${id}`);
  };

  const getImageSrc = () => {
    if (imageError || !image) {
      return fallbackImage || `data:image/svg+xml,${encodeURIComponent(`
        <svg width="300" height="160" xmlns="http://www.w3.org/2000/svg">
          <rect width="300" height="160" fill="${color || '#0D9488'}"/>
          <text x="150" y="85" text-anchor="middle" fill="white" font-size="24" font-weight="bold" font-family="Inter">${shortTitle || title}</text>
          <text x="150" y="115" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="12" font-family="Inter">${category}</text>
        </svg>
      `)}`;
    }
    return image;
  };

  return (
    <div className="course-card" onClick={handleCardClick}>
      <div className="course-card__image">
        <img 
          src={getImageSrc()} 
          alt={title}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          style={{ opacity: imageLoaded ? 1 : 0.6 }}
        />
        {!imageLoaded && !imageError && (
          <div className="image-loading">
            <div className="spinner"></div>
          </div>
        )}
        <span className={`course-card__status ${getStatusColor()}`}>
          {getStatusLabel()}
        </span>
        {tags && tags.length > 0 && (
          <div className="course-card__tags">
            {tags.slice(0, 2).map((tag, index) => (
              <span key={index} className="course-card__tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="course-card__content">
        <div className="course-card__header">
          <span className="course-card__category">{category}</span>
          <div className="course-card__rating">
            <Star size={14} className="star-icon" />
            <span>{rating || 4.5}</span>
          </div>
        </div>

        <h3 className="course-card__title">{title}</h3>
        <p className="course-card__description">{description}</p>

        <div className="course-card__meta">
          <div className="course-card__meta-item">
            <Clock size={14} />
            <span>{duration || '2 weeks'}</span>
          </div>
          <div className="course-card__meta-item">
            <Users size={14} />
            <span>{students || 0} students</span>
          </div>
        </div>

        <div className="course-card__instructor">
          <div className="instructor-avatar" style={{ background: color || '#0D9488' }}>
            {instructor.charAt(0).toUpperCase()}
          </div>
          <span className="instructor-name">{instructor}</span>
        </div>

        <div className="course-card__progress">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress || 0}%`, background: color || '#0D9488' }}
            />
          </div>
          <span className="progress-text">{progress || 0}%</span>
        </div>

        <button 
          className="course-card__button"
          onClick={handleResumeClick}
          style={{ background: color || '#0D9488' }}
        >
          {status === 'completed' ? 'Review Course' : 'Resume'}
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;