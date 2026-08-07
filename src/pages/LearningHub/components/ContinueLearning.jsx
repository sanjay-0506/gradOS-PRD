// src/pages/LearningHub/components/ContinueLearning.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContinueLearning.scss';
import { Clock, ChevronRight, Play } from 'lucide-react';

const ContinueLearning = ({ courses, onResume }) => {
  const navigate = useNavigate();
  const [imageErrors, setImageErrors] = useState({});

  if (!courses || courses.length === 0) {
    return null;
  }

  const handleResume = (courseId) => {
    navigate(`/learning-hub/course/${courseId}`);
  };

  const handleImageError = (courseId) => {
    setImageErrors(prev => ({ ...prev, [courseId]: true }));
  };

  const getImageSrc = (course) => {
    if (imageErrors[course.id] || !course.image) {
      return course.fallbackImage || `data:image/svg+xml,${encodeURIComponent(`
        <svg width="100" height="80" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="80" fill="${course.color || '#0D9488'}" opacity="0.8"/>
          <text x="50" y="45" text-anchor="middle" fill="white" font-size="14" font-weight="bold" font-family="Inter">${course.shortTitle || course.title.substring(0, 10)}</text>
        </svg>
      `)}`;
    }
    return course.image;
  };

  return (
    <div className="continue-learning">
      <div className="continue-learning__header">
        <div>
          <h2 className="continue-learning__title">Continue Learning</h2>
          <p className="continue-learning__subtitle">
            Pick up where you left off
          </p>
        </div>
        <button className="continue-learning__view-all">
          View All
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="continue-learning__list">
        {courses.slice(0, 3).map((course) => (
          <div key={course.id} className="continue-item">
            <div className="continue-item__image">
              <img 
                src={getImageSrc(course)} 
                alt={course.title}
                onError={() => handleImageError(course.id)}
              />
              <div className="continue-item__overlay">
                <Play size={24} className="play-icon" />
              </div>
            </div>

            <div className="continue-item__content">
              <div className="continue-item__top">
                <h4 className="continue-item__title">{course.title}</h4>
                <span className="continue-item__category">{course.category}</span>
              </div>

              <div className="continue-item__bottom">
                <div className="continue-item__progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <span className="progress-text">{course.progress}%</span>
                </div>

                <div className="continue-item__meta">
                  <span className="continue-item__duration">
                    <Clock size={14} />
                    {course.duration || '2 weeks'}
                  </span>
                  <span className="continue-item__instructor">
                    {course.instructor}
                  </span>
                </div>
              </div>
            </div>

            <button 
              className="continue-item__resume"
              onClick={() => handleResume(course.id)}
              style={{ background: course.color || '#0D9488' }}
            >
              Resume
              <ChevronRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinueLearning;