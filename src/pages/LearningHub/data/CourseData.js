const PRIMARY_COLOR = '#0D9488';
const getFallbackImage = (title, shortTitle, color = PRIMARY_COLOR) => {
  return `data:image/svg+xml,${encodeURIComponent(`
    <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color};stop-opacity:0.9" />
          <stop offset="100%" style="stop-color:${color};stop-opacity:0.5" />
        </linearGradient>
        <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/>
        </pattern>
      </defs>
      <rect width="400" height="200" fill="url(#grad)"/>
      <rect width="400" height="200" fill="url(#pattern)"/>
      <text x="200" y="95" text-anchor="middle" fill="white" font-size="42" font-weight="bold" font-family="Inter, sans-serif">${shortTitle || title}</text>
      <text x="200" y="135" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="16" font-family="Inter, sans-serif">${title}</text>
      <rect x="150" y="155" width="100" height="6" rx="3" fill="rgba(255,255,255,0.3)"/>
      <rect x="150" y="155" width="60" height="6" rx="3" fill="rgba(255,255,255,0.7)"/>
    </svg>
  `)}`;
};

// Education-focused image URLs
const getCourseImage = (seed, category) => {
  // Curated education-themed images from Unsplash
  const images = {
    // Technical/Programming
    dsa: {
      url: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=200&fit=crop&q=80',
      alt: 'Coding on laptop with algorithms'
    },
    python: {
      url: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=200&fit=crop&q=80',
      alt: 'Python code on screen'
    },
    webdev: {
      url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=200&fit=crop&q=80',
      alt: 'Web development workspace'
    },
    cloud: {
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&q=80',
      alt: 'Cloud computing infrastructure'
    },
    ml: {
      url: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=200&fit=crop&q=80',
      alt: 'Machine learning data visualization'
    },
    cyber: {
      url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=200&fit=crop&q=80',
      alt: 'Cybersecurity network protection'
    },
    // Education-themed fallbacks
    education: {
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop&q=80',
      alt: 'Students studying together'
    },
    coding: {
      url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop&q=80',
      alt: 'Coding on computer'
    },
    students: {
      url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=200&fit=crop&q=80',
      alt: 'University students in class'
    },
    laptop: {
      url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop&q=80',
      alt: 'Laptop with code'
    },
    classroom: {
      url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=200&fit=crop&q=80',
      alt: 'Modern classroom'
    },
    library: {
      url: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=200&fit=crop&q=80',
      alt: 'Library bookshelf'
    },
    study: {
      url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=200&fit=crop&q=80',
      alt: 'Student studying'
    },
    workshop: {
      url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=200&fit=crop&q=80',
      alt: 'Workshop session'
    },
    online: {
      url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop&q=80',
      alt: 'Online learning'
    },
    // Technology specific
    react: {
      url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop&q=80',
      alt: 'React development'
    },
    node: {
      url: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=200&fit=crop&q=80',
      alt: 'Node.js development'
    },
    docker: {
      url: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=200&fit=crop&q=80',
      alt: 'Docker containers'
    },
    aws: {
      url: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=400&h=200&fit=crop&q=80',
      alt: 'Cloud services'
    },
    security: {
      url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=200&fit=crop&q=80',
      alt: 'Security lock'
    },
    ai: {
      url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop&q=80',
      alt: 'AI technology'
    },
    data: {
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&q=80',
      alt: 'Data analytics'
    }
  };
  
  // Return the image object or education fallback
  const selectedImage = images[seed] || images.education;
  return selectedImage.url;
};

// Get image alt text for accessibility
const getImageAlt = (seed) => {
  const images = {
    dsa: 'Data Structures and Algorithms coding on laptop',
    python: 'Python programming code on screen',
    webdev: 'Web development workspace with computer',
    cloud: 'Cloud computing infrastructure visualization',
    ml: 'Machine learning data visualization',
    cyber: 'Cybersecurity network protection concept',
    education: 'Students studying together',
    coding: 'Coding on computer screen',
    students: 'University students in classroom',
    laptop: 'Laptop with programming code',
    classroom: 'Modern classroom setting',
    library: 'Library with bookshelf',
    study: 'Student studying at desk',
    workshop: 'Workshop session with participants',
    online: 'Online learning on computer',
    react: 'React development interface',
    node: 'Node.js development environment',
    docker: 'Docker container technology',
    aws: 'AWS cloud services',
    security: 'Cybersecurity lock concept',
    ai: 'Artificial intelligence technology',
    data: 'Data analytics visualization'
  };
  return images[seed] || 'Educational course image';
};

export const coursesData = [
  {
    id: 1,
    title: 'Data Structures & Algorithms',
    shortTitle: 'DSA',
    description: 'Master DSA concepts including arrays, linked lists, trees, graphs, and dynamic programming with practical implementations.',
    category: 'Technical',
    instructor: 'Dr. Sarah Johnson',
    progress: 85,
    duration: '8 weeks',
    students: 1245,
    rating: 4.8,
    status: 'in-progress',
    tags: ['DSA', 'Coding', 'Interview'],
    image: getCourseImage('dsa'),
    fallbackImage: getFallbackImage('Data Structures & Algorithms', 'DSA', PRIMARY_COLOR),
    color: PRIMARY_COLOR,
    sprints: [
      {
        id: 'sprint-1',
        title: 'Arrays & Strings',
        description: 'Mastering arrays, strings, and their manipulation techniques.',
        progress: 100,
        status: 'completed',
        isLocked: false,
        modules: [
          { id: 'm1', title: 'Introduction to Arrays', duration: '45 min', completed: true },
          { id: 'm2', title: 'Array Operations', duration: '60 min', completed: true },
          { id: 'm3', title: 'String Manipulation', duration: '50 min', completed: true },
          { id: 'm4', title: 'Practice Problems', duration: '90 min', completed: true },
        ],
        resources: {
          notes: 'Complete theory & array concepts',
          video: 'Curated lectures (2h 30m)',
          practice: 'LeetCode & CodeStudio Index',
          assignment: '10 Coding Problems'
        }
      },
      {
        id: 'sprint-2',
        title: 'Linked Lists',
        description: 'Understanding singly, doubly, and circular linked lists.',
        progress: 80,
        status: 'in-progress',
        isLocked: false,
        modules: [
          { id: 'm5', title: 'Singly Linked List', duration: '45 min', completed: true },
          { id: 'm6', title: 'Doubly Linked List', duration: '40 min', completed: true },
          { id: 'm7', title: 'Circular Linked List', duration: '35 min', completed: false },
          { id: 'm8', title: 'Practice Problems', duration: '90 min', completed: false },
        ],
        resources: {
          notes: 'Complete theory & linked list concepts',
          video: 'Curated lectures (2h 15m)',
          practice: 'LeetCode & CodeStudio Index',
          assignment: '8 Coding Problems'
        }
      },
      {
        id: 'sprint-3',
        title: 'Stacks & Queues',
        description: 'Understanding stack and queue data structures.',
        progress: 60,
        status: 'in-progress',
        isLocked: false,
        modules: [
          { id: 'm9', title: 'Stack Implementation', duration: '40 min', completed: true },
          { id: 'm10', title: 'Queue Implementation', duration: '40 min', completed: true },
          { id: 'm11', title: 'Applications', duration: '50 min', completed: false },
          { id: 'm12', title: 'Practice Problems', duration: '90 min', completed: false },
        ],
        resources: {
          notes: 'Complete theory & stack/queue concepts',
          video: 'Curated lectures (2h 10m)',
          practice: 'LeetCode & CodeStudio Index',
          assignment: '8 Coding Problems'
        }
      },
      {
        id: 'sprint-4',
        title: 'Trees & BST',
        description: 'Mastering binary trees, binary search trees, and their traversal algorithms.',
        progress: 87,
        status: 'in-progress',
        isLocked: false,
        modules: [
          { id: 'm13', title: 'Binary Trees', duration: '50 min', completed: true },
          { id: 'm14', title: 'Binary Search Trees', duration: '45 min', completed: true },
          { id: 'm15', title: 'Tree Traversals', duration: '60 min', completed: false },
          { id: 'm16', title: 'LCA of Binary Tree', duration: '50 min', completed: false },
          { id: 'm17', title: 'Practice Problems', duration: '90 min', completed: false },
        ],
        resources: {
          notes: 'Complete theory & traversal concepts',
          video: 'Curated lectures (3h 45m)',
          practice: 'LevelCode & CodeStudio links',
          assignment: '12 Coding Problems'
        }
      },
      {
        id: 'sprint-5',
        title: 'Dynamic Programming',
        description: 'Mastering DP concepts including memoization, tabulation, and common patterns.',
        progress: 0,
        status: 'locked',
        isLocked: true,
        modules: [
          { id: 'm18', title: 'Introduction to DP', duration: '45 min', completed: false },
          { id: 'm19', title: 'Memoization', duration: '55 min', completed: false },
          { id: 'm20', title: 'Tabulation', duration: '50 min', completed: false },
          { id: 'm21', title: 'Practice Problems', duration: '90 min', completed: false },
        ],
        resources: {
          notes: 'Complete theory & DP concepts',
          video: 'Curated lectures (4h)',
          practice: 'LeetCode & CodeStudio Index',
          assignment: '15 Coding Problems'
        }
      },
      {
        id: 'sprint-6',
        title: 'Advanced Graph Algorithms',
        description: 'Mastering advanced graph algorithms including shortest paths, MST, and network flow.',
        progress: 0,
        status: 'locked',
        isLocked: true,
        modules: [
          { id: 'm22', title: 'Shortest Paths', duration: '55 min', completed: false },
          { id: 'm23', title: 'Minimum Spanning Tree', duration: '50 min', completed: false },
          { id: 'm24', title: 'Network Flow', duration: '60 min', completed: false },
          { id: 'm25', title: 'Practice Problems', duration: '90 min', completed: false },
        ],
        resources: {
          notes: 'Complete theory & graph concepts',
          video: 'Curated lectures (4h 30m)',
          practice: 'LeetCode & CodeStudio Index',
          assignment: '12 Coding Problems'
        }
      }
    ]
  },
  {
    id: 2,
    title: 'Python Programming Mastery',
    shortTitle: 'Python',
    description: 'Complete Python course covering fundamentals to advanced concepts with real-world projects and applications.',
    category: 'Programming',
    instructor: 'Prof. Michael Chen',
    progress: 60,
    duration: '6 weeks',
    students: 2300,
    rating: 4.7,
    status: 'in-progress',
    tags: ['Python', 'Programming', 'Projects'],
    image: getCourseImage('python'),
    fallbackImage: getFallbackImage('Python Programming Mastery', 'Python', PRIMARY_COLOR),
    color: PRIMARY_COLOR,
    sprints: [
      {
        id: 'sprint-1',
        title: 'Python Basics',
        description: 'Variables, data types, control flow, and functions.',
        progress: 100,
        status: 'completed',
        isLocked: false,
        modules: [
          { id: 'm1', title: 'Variables & Data Types', duration: '40 min', completed: true },
          { id: 'm2', title: 'Control Flow', duration: '50 min', completed: true },
          { id: 'm3', title: 'Functions', duration: '45 min', completed: true },
        ],
        resources: {
          notes: 'Python basics complete notes',
          video: 'Introductory lectures (2h)',
          practice: 'Basic Python exercises',
          assignment: '5 Problems'
        }
      },
      {
        id: 'sprint-2',
        title: 'OOP Concepts',
        description: 'Classes, objects, inheritance, and polymorphism.',
        progress: 70,
        status: 'in-progress',
        isLocked: false,
        modules: [
          { id: 'm4', title: 'Classes & Objects', duration: '45 min', completed: true },
          { id: 'm5', title: 'Inheritance', duration: '40 min', completed: true },
          { id: 'm6', title: 'Polymorphism', duration: '35 min', completed: false },
        ],
        resources: {
          notes: 'OOP concepts complete notes',
          video: 'OOP lectures (2h 30m)',
          practice: 'OOP exercises',
          assignment: '6 Problems'
        }
      },
      {
        id: 'sprint-3',
        title: 'Advanced Python',
        description: 'Decorators, generators, context managers, and more.',
        progress: 0,
        status: 'locked',
        isLocked: true,
        modules: [
          { id: 'm7', title: 'Decorators', duration: '45 min', completed: false },
          { id: 'm8', title: 'Generators', duration: '40 min', completed: false },
          { id: 'm9', title: 'Context Managers', duration: '35 min', completed: false },
        ],
        resources: {
          notes: 'Advanced Python notes',
          video: 'Advanced lectures (2h 30m)',
          practice: 'Advanced exercises',
          assignment: '8 Problems'
        }
      },
      {
        id: 'sprint-4',
        title: 'Data Science with Python',
        description: 'NumPy, Pandas, Matplotlib for data analysis.',
        progress: 0,
        status: 'locked',
        isLocked: true,
        modules: [
          { id: 'm10', title: 'NumPy Basics', duration: '50 min', completed: false },
          { id: 'm11', title: 'Pandas DataFrames', duration: '55 min', completed: false },
          { id: 'm12', title: 'Data Visualization', duration: '45 min', completed: false },
        ],
        resources: {
          notes: 'Data Science notes',
          video: 'Data Science lectures (3h)',
          practice: 'Data Science exercises',
          assignment: 'Data analysis project'
        }
      }
    ]
  },
  {
    id: 3,
    title: 'Web Development Bootcamp',
    shortTitle: 'Web Dev',
    description: 'Full-stack web development with React, Node.js, and modern web technologies for building production-ready applications.',
    category: 'Web Development',
    instructor: 'Emily Rodriguez',
    progress: 20,
    duration: '10 weeks',
    students: 3450,
    rating: 4.9,
    status: 'not-started',
    tags: ['React', 'Node.js', 'Full Stack'],
    image: getCourseImage('webdev'),
    fallbackImage: getFallbackImage('Web Development Bootcamp', 'Web Dev', PRIMARY_COLOR),
    color: PRIMARY_COLOR,
    sprints: [
      {
        id: 'sprint-1',
        title: 'HTML & CSS',
        description: 'Building responsive layouts with HTML5 and CSS3.',
        progress: 60,
        status: 'in-progress',
        isLocked: false,
        modules: [
          { id: 'm1', title: 'HTML5 Basics', duration: '40 min', completed: true },
          { id: 'm2', title: 'CSS3 Styling', duration: '50 min', completed: true },
          { id: 'm3', title: 'Flexbox & Grid', duration: '45 min', completed: false },
        ],
        resources: {
          notes: 'HTML & CSS complete notes',
          video: 'Frontend lectures (2h 15m)',
          practice: 'Layout exercises',
          assignment: 'Build a landing page'
        }
      },
      {
        id: 'sprint-2',
        title: 'JavaScript',
        description: 'Core JavaScript concepts for web development.',
        progress: 20,
        status: 'in-progress',
        isLocked: false,
        modules: [
          { id: 'm4', title: 'JS Basics', duration: '45 min', completed: false },
          { id: 'm5', title: 'DOM Manipulation', duration: '50 min', completed: false },
          { id: 'm6', title: 'ES6 Features', duration: '40 min', completed: false },
        ],
        resources: {
          notes: 'JavaScript complete notes',
          video: 'JS lectures (2h 30m)',
          practice: 'JS exercises',
          assignment: 'Build interactive app'
        }
      },
      {
        id: 'sprint-3',
        title: 'React Component API',
        description: 'Building components with React hooks and state management.',
        progress: 42,
        status: 'locked',
        isLocked: true,
        modules: [
          { id: 'm7', title: 'Components & Props', duration: '45 min', completed: false },
          { id: 'm8', title: 'State & Hooks', duration: '50 min', completed: false },
          { id: 'm9', title: 'Component API', duration: '40 min', completed: false },
        ],
        resources: {
          notes: 'React complete notes',
          video: 'React lectures (3h)',
          practice: 'React exercises',
          assignment: 'Build React app'
        }
      },
      {
        id: 'sprint-4',
        title: 'Node.js & Express',
        description: 'Building REST APIs with Node.js and Express framework.',
        progress: 0,
        status: 'locked',
        isLocked: true,
        modules: [
          { id: 'm10', title: 'Node.js Basics', duration: '45 min', completed: false },
          { id: 'm11', title: 'Express Framework', duration: '50 min', completed: false },
          { id: 'm12', title: 'REST API', duration: '55 min', completed: false },
        ],
        resources: {
          notes: 'Node.js complete notes',
          video: 'Backend lectures (3h)',
          practice: 'API exercises',
          assignment: 'Build REST API'
        }
      }
    ]
  },
  {
    id: 4,
    title: 'Cloud Computing & DevOps',
    shortTitle: 'Cloud',
    description: 'Learn cloud platforms, containers, CI/CD pipelines, and modern DevOps practices for scalable infrastructure.',
    category: 'Cloud',
    instructor: 'Priya Patel',
    progress: 45,
    duration: '8 weeks',
    students: 675,
    rating: 4.5,
    status: 'in-progress',
    tags: ['AWS', 'Docker', 'DevOps'],
    image: getCourseImage('cloud'),
    fallbackImage: getFallbackImage('Cloud Computing & DevOps', 'Cloud', PRIMARY_COLOR),
    color: PRIMARY_COLOR,
    sprints: [
      {
        id: 'sprint-1',
        title: 'Cloud Fundamentals',
        description: 'Understanding cloud computing concepts and services.',
        progress: 80,
        status: 'in-progress',
        isLocked: false,
        modules: [
          { id: 'm1', title: 'Cloud Concepts', duration: '40 min', completed: true },
          { id: 'm2', title: 'AWS Services', duration: '50 min', completed: true },
          { id: 'm3', title: 'Azure Basics', duration: '45 min', completed: false },
        ],
        resources: {
          notes: 'Cloud fundamentals notes',
          video: 'Cloud lectures (2h)',
          practice: 'Cloud exercises',
          assignment: 'Setup AWS account'
        }
      },
      {
        id: 'sprint-2',
        title: 'Docker & Containers',
        description: 'Containerization with Docker and container orchestration.',
        progress: 30,
        status: 'in-progress',
        isLocked: false,
        modules: [
          { id: 'm4', title: 'Docker Basics', duration: '45 min', completed: false },
          { id: 'm5', title: 'Container Orchestration', duration: '50 min', completed: false },
        ],
        resources: {
          notes: 'Docker complete notes',
          video: 'Docker lectures (2h 30m)',
          practice: 'Docker exercises',
          assignment: 'Containerize an app'
        }
      },
      {
        id: 'sprint-3',
        title: 'CI/CD Pipelines',
        description: 'Building CI/CD pipelines for automated deployment.',
        progress: 0,
        status: 'locked',
        isLocked: true,
        modules: [
          { id: 'm6', title: 'CI/CD Concepts', duration: '45 min', completed: false },
          { id: 'm7', title: 'Jenkins & GitHub Actions', duration: '55 min', completed: false },
        ],
        resources: {
          notes: 'CI/CD notes',
          video: 'CI/CD lectures (2h)',
          practice: 'Pipeline exercises',
          assignment: 'Build CI/CD pipeline'
        }
      },
      {
        id: 'sprint-4',
        title: 'Kubernetes',
        description: 'Container orchestration with Kubernetes.',
        progress: 0,
        status: 'locked',
        isLocked: true,
        modules: [
          { id: 'm8', title: 'Kubernetes Basics', duration: '50 min', completed: false },
          { id: 'm9', title: 'Deployment & Scaling', duration: '55 min', completed: false },
        ],
        resources: {
          notes: 'Kubernetes notes',
          video: 'Kubernetes lectures (3h)',
          practice: 'K8s exercises',
          assignment: 'Deploy with K8s'
        }
      }
    ]
  },
  {
    id: 5,
    title: 'Machine Learning Fundamentals',
    shortTitle: 'ML',
    description: 'Introduction to ML concepts including supervised and unsupervised learning, neural networks, and model evaluation.',
    category: 'AI/ML',
    instructor: 'Dr. David Kim',
    progress: 20,
    duration: '10 weeks',
    students: 890,
    rating: 4.6,
    status: 'in-progress',
    tags: ['ML', 'AI', 'Data Science'],
    image: getCourseImage('ml'),
    fallbackImage: getFallbackImage('Machine Learning Fundamentals', 'ML', PRIMARY_COLOR),
    color: PRIMARY_COLOR,
    sprints: [
      {
        id: 'sprint-1',
        title: 'ML Fundamentals',
        description: 'Understanding machine learning concepts and types.',
        progress: 40,
        status: 'in-progress',
        isLocked: false,
        modules: [
          { id: 'm1', title: 'What is ML?', duration: '40 min', completed: true },
          { id: 'm2', title: 'Supervised Learning', duration: '50 min', completed: false },
          { id: 'm3', title: 'Unsupervised Learning', duration: '45 min', completed: false },
        ],
        resources: {
          notes: 'ML fundamentals notes',
          video: 'ML lectures (2h)',
          practice: 'ML exercises',
          assignment: 'Build first model'
        }
      },
      {
        id: 'sprint-2',
        title: 'Neural Networks',
        description: 'Understanding neural networks and deep learning.',
        progress: 0,
        status: 'locked',
        isLocked: true,
        modules: [
          { id: 'm4', title: 'Perceptron', duration: '45 min', completed: false },
          { id: 'm5', title: 'Deep Learning', duration: '50 min', completed: false },
        ],
        resources: {
          notes: 'Neural network notes',
          video: 'Deep learning lectures (3h)',
          practice: 'NN exercises',
          assignment: 'Build neural network'
        }
      },
      {
        id: 'sprint-3',
        title: 'Model Evaluation',
        description: 'Techniques for evaluating and improving ML models.',
        progress: 0,
        status: 'locked',
        isLocked: true,
        modules: [
          { id: 'm6', title: 'Cross Validation', duration: '45 min', completed: false },
          { id: 'm7', title: 'Hyperparameter Tuning', duration: '50 min', completed: false },
        ],
        resources: {
          notes: 'Model evaluation notes',
          video: 'Evaluation lectures (2h)',
          practice: 'Evaluation exercises',
          assignment: 'Model evaluation project'
        }
      },
      {
        id: 'sprint-4',
        title: 'NLP Fundamentals',
        description: 'Natural Language Processing basics and applications.',
        progress: 0,
        status: 'locked',
        isLocked: true,
        modules: [
          { id: 'm8', title: 'NLP Basics', duration: '45 min', completed: false },
          { id: 'm9', title: 'Text Processing', duration: '50 min', completed: false },
        ],
        resources: {
          notes: 'NLP notes',
          video: 'NLP lectures (2h 30m)',
          practice: 'NLP exercises',
          assignment: 'NLP project'
        }
      }
    ]
  },
  {
    id: 6,
    title: 'Cybersecurity Essentials',
    shortTitle: 'Cyber',
    description: 'Learn cybersecurity fundamentals including network security, cryptography, and ethical hacking techniques.',
    category: 'Security',
    instructor: 'Lisa Wang',
    progress: 15,
    duration: '8 weeks',
    students: 320,
    rating: 4.3,
    status: 'in-progress',
    tags: ['Security', 'Cryptography', 'Ethical Hacking'],
    image: getCourseImage('cyber'),
    fallbackImage: getFallbackImage('Cybersecurity Essentials', 'Cyber', PRIMARY_COLOR),
    color: PRIMARY_COLOR,
    sprints: [
      {
        id: 'sprint-1',
        title: 'Security Fundamentals',
        description: 'Understanding cybersecurity concepts, threats, and defense strategies.',
        progress: 60,
        status: 'in-progress',
        isLocked: false,
        modules: [
          { id: 'm1', title: 'Introduction to Cybersecurity', duration: '40 min', completed: true },
          { id: 'm2', title: 'Types of Threats', duration: '50 min', completed: true },
          { id: 'm3', title: 'Defense Strategies', duration: '45 min', completed: false },
        ],
        resources: {
          notes: 'Security fundamentals notes',
          video: 'Security lectures (2h)',
          practice: 'Security exercises',
          assignment: 'Security assessment'
        }
      },
      {
        id: 'sprint-2',
        title: 'Network Security',
        description: 'Understanding network security protocols and practices.',
        progress: 20,
        status: 'in-progress',
        isLocked: false,
        modules: [
          { id: 'm4', title: 'Network Protocols', duration: '45 min', completed: false },
          { id: 'm5', title: 'Firewalls & VPNs', duration: '50 min', completed: false },
          { id: 'm6', title: 'Intrusion Detection', duration: '40 min', completed: false },
        ],
        resources: {
          notes: 'Network security notes',
          video: 'Network security lectures (2h 30m)',
          practice: 'Network exercises',
          assignment: 'Network security setup'
        }
      },
      {
        id: 'sprint-3',
        title: 'Cryptography',
        description: 'Understanding encryption, hashing, and cryptographic protocols.',
        progress: 0,
        status: 'locked',
        isLocked: true,
        modules: [
          { id: 'm7', title: 'Symmetric Encryption', duration: '45 min', completed: false },
          { id: 'm8', title: 'Asymmetric Encryption', duration: '50 min', completed: false },
          { id: 'm9', title: 'Hashing & Digital Signatures', duration: '40 min', completed: false },
        ],
        resources: {
          notes: 'Cryptography notes',
          video: 'Cryptography lectures (2h 30m)',
          practice: 'Crypto exercises',
          assignment: 'Implement encryption'
        }
      },
      {
        id: 'sprint-4',
        title: 'Ethical Hacking',
        description: 'Learning ethical hacking techniques and penetration testing.',
        progress: 0,
        status: 'locked',
        isLocked: true,
        modules: [
          { id: 'm10', title: 'Penetration Testing', duration: '50 min', completed: false },
          { id: 'm11', title: 'Vulnerability Assessment', duration: '45 min', completed: false },
          { id: 'm12', title: 'Reporting & Remediation', duration: '40 min', completed: false },
        ],
        resources: {
          notes: 'Ethical hacking notes',
          video: 'Hacking lectures (3h)',
          practice: 'Hacking exercises',
          assignment: 'Penetration test'
        }
      }
    ]
  }
];

export const continueLearningData = [
  {
    id: 1,
    title: 'Data Structures & Algorithms',
    category: 'Technical',
    instructor: 'Dr. Sarah Johnson',
    progress: 85,
    duration: '8 weeks',
    image: getCourseImage('dsa'),
    fallbackImage: getFallbackImage('Data Structures & Algorithms', 'DSA', PRIMARY_COLOR),
    currentSprint: 'Sprint 4: Trees & BST',
    nextUp: 'LCA of Binary Tree',
    moduleProgress: '87% Module',
    color: PRIMARY_COLOR
  },
  {
    id: 2,
    title: 'Python Programming Mastery',
    category: 'Programming',
    instructor: 'Prof. Michael Chen',
    progress: 60,
    duration: '6 weeks',
    image: getCourseImage('python'),
    fallbackImage: getFallbackImage('Python Programming Mastery', 'Python', PRIMARY_COLOR),
    currentSprint: 'Sprint 2: OOP Concepts',
    nextUp: 'Polymorphism',
    moduleProgress: '70% Module',
    color: PRIMARY_COLOR
  },
  {
    id: 4,
    title: 'Cloud Computing & DevOps',
    category: 'Cloud',
    instructor: 'Priya Patel',
    progress: 45,
    duration: '8 weeks',
    image: getCourseImage('cloud'),
    fallbackImage: getFallbackImage('Cloud Computing & DevOps', 'Cloud', PRIMARY_COLOR),
    currentSprint: 'Sprint 1: Cloud Fundamentals',
    nextUp: 'Azure Basics',
    moduleProgress: '80% Module',
    color: PRIMARY_COLOR
  },
  {
    id: 6,
    title: 'Cybersecurity Essentials',
    category: 'Security',
    instructor: 'Lisa Wang',
    progress: 15,
    duration: '8 weeks',
    image: getCourseImage('cyber'),
    fallbackImage: getFallbackImage('Cybersecurity Essentials', 'Cyber', PRIMARY_COLOR),
    currentSprint: 'Sprint 1: Security Fundamentals',
    nextUp: 'Defense Strategies',
    moduleProgress: '60% Module',
    color: PRIMARY_COLOR
  }
];

export const quickResources = [
  { 
    id: 1, 
    title: 'Theory Notes', 
    icon: '📝', 
    type: 'notes',
    description: 'Complete theory & traversal concepts'
  },
  { 
    id: 2, 
    title: 'Reading Material', 
    icon: '📚', 
    type: 'reading',
    description: 'Curated reading materials'
  },
  { 
    id: 3, 
    title: 'Cheat Sheet', 
    icon: '📋', 
    type: 'cheat',
    description: 'Quick reference guide'
  },
  { 
    id: 4, 
    title: 'Quiz (Pending)', 
    icon: '📝', 
    type: 'quiz',
    description: 'Test your knowledge'
  },
  { 
    id: 5, 
    title: 'Assignment', 
    icon: '📄', 
    type: 'assignment',
    description: 'Practical assignments'
  },
];

export default coursesData;