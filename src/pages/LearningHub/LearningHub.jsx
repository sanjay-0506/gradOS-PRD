import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LearningHub.scss';
import CourseCard from './components/CourseCard';
import CourseFilters from './components/CourseFilters';
import ContinueLearning from './components/ContinueLearning';
import { coursesData, continueLearningData } from './data/courseData';
import { Search, BookOpen, Clock, Award, TrendingUp } from 'lucide-react';

const LearningHub = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState(coursesData);
  const [filteredCourses, setFilteredCourses] = useState(coursesData);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  // Stats
  const stats = [
    {
      label: 'Total Courses',
      value: courses.length,
      icon: <BookOpen size={20} />,
      color: 'primary',
    },
    {
      label: 'In Progress',
      value: courses.filter(c => c.status === 'in-progress').length,
      icon: <Clock size={20} />,
      color: 'tertiary',
    },
    {
      label: 'Completed',
      value: courses.filter(c => c.status === 'completed').length,
      icon: <Award size={20} />,
      color: 'neutral',
    },
    {
      label: 'Overall Progress',
      value: `${Math.round(courses.reduce((acc, c) => acc + c.progress, 0) / courses.length)}%`,
      icon: <TrendingUp size={20} />,
      color: 'secondary',
    },
  ];

  // Filter and search
  useEffect(() => {
    let result = courses;

    if (searchQuery) {
      result = result.filter(
        course =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (activeFilter !== 'all') {
      result = result.filter(course => course.status === activeFilter);
    }

    setFilteredCourses(result);
  }, [searchQuery, activeFilter, courses]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 300);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleCourseClick = (courseId) => {
    navigate(`/learning-hub/course/${courseId}`);
  };

  const handleResumeCourse = (courseId) => {
    navigate(`/learning-hub/course/${courseId}`);
  };

  return (
    <div className="learning-hub">
      {/* Header */}
      <div className="learning-hub__header">
        <div>
          <h1 className="learning-hub__title">Learning Hub</h1>
          <p className="learning-hub__subtitle">
            Continue your learning journey and track your progress
          </p>
        </div>
        <div className="learning-hub__search">
          <div className="search-container">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search courses, topics, or instructors..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button className="search-clear" onClick={() => handleSearch('')}>
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="learning-hub__stats">
        {stats.map((stat, index) => (
          <div key={index} className={`stat-card stat-card--${stat.color}`}>
            <div className="stat-card__icon">{stat.icon}</div>
            <div className="stat-card__info">
              <span className="stat-card__value">{stat.value}</span>
              <span className="stat-card__label">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Continue Learning */}
      <ContinueLearning courses={continueLearningData} onResume={handleResumeCourse} />

      {/* Filters */}
      <CourseFilters
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
        courseCount={filteredCourses.length}
      />

      {/* Course Grid */}
      <div className="learning-hub__grid">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="course-skeleton">
              <div className="course-skeleton__image"></div>
              <div className="course-skeleton__content">
                <div className="course-skeleton__title"></div>
                <div className="course-skeleton__subtitle"></div>
                <div className="course-skeleton__progress"></div>
              </div>
            </div>
          ))
        ) : filteredCourses.length === 0 ? (
          <div className="learning-hub__empty">
            <BookOpen size={48} className="empty-icon" />
            <h3>No courses found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={handleCourseClick}
              onResume={handleResumeCourse}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default LearningHub;