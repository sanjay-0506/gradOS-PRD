import React from 'react';
import './CourseFilters.scss';
import { Filter, Grid, List } from 'lucide-react';

const CourseFilters = ({ activeFilter, onFilterChange, courseCount }) => {
  const filters = [
    { id: 'all', label: 'All Courses' },
    { id: 'in-progress', label: 'In Progress' },
    { id: 'completed', label: 'Completed' },
    { id: 'not-started', label: 'Not Started' },
  ];

  return (
    <div className="course-filters">
      <div className="course-filters__left">
        <div className="filter-tabs">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-tab ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => onFilterChange(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="course-filters__right">
        <span className="course-count">{courseCount} courses</span>
        <div className="view-toggle">
          <button className="view-btn active">
            <Grid size={18} />
          </button>
          <button className="view-btn">
            <List size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseFilters;