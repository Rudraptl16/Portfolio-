// ─────────────────────────────────────────────────────────────────────────────
//  Featured Artifacts — data source for Artifacts.jsx & Projects.jsx
//  Categories: 'Web Apps' | 'Full-Stack' | 'Mobile Apps' | 'UI/UX Design'
// ─────────────────────────────────────────────────────────────────────────────

export const featuredArtifacts = [
  {
    id: 1,
    title: 'Zerodha Trading Platform',
    subtitle: 'High-Performance Editorial Trading Experience & Neo-Brutalist Architecture',
    description:
      'A radical, editorial split-screen trading presence engineered with a "Midnight Glass" aesthetic. Built for performance, high-frequency interactions, and sophisticated Framer Motion transitions across every screen.',
    image: '/case img/Zerodha.webp',
    tags: ['React 19', 'Framer Motion', 'Tailwind v4', 'Vite', 'Three.js'],
    skillsUsed: [
      'Component Architecture',
      'Animation Orchestration',
      'Responsive Design',
      'Theme System Design',
    ],
    keyFeatures: [
      'Vite-based ultra-fast HMR architecture with sub-second reload',
      'Custom CSS variable integration with Tailwind v4',
      'Global ambient aurora mesh background system',
      'Context-based adaptive dark/light theme engine',
      'Framer Motion stagger & layout animations',
      'Magnetic button micro-interactions',
    ],
    problem: 'Traditional financial platforms often feel static and cluttered. The objective was to create a high-frequency interaction model that feels like an ultra-responsive digital magazine.',
    solution: 'Implemented a motion-first architecture using Framer Motion and an HTML5 Canvas 2D ambient light mesh to create an immersive, fluid trading experience.',
    results: 'Achieved 99/100 Lighthouse performance, eliminated layout shifts (0.00 CLS), and delivered an editorial UI praised for clarity.',
    status: 'Production Ready',
    category: 'Full-Stack',
    liveUrl: 'https://rudrapatel.me',
    githubUrl: 'https://github.com/Rudraptl16/Rudraptl16',
    featured: true,
  },
  {
    id: 2,
    title: 'Hilink Outdoor Adventure Guide',
    subtitle: 'Next.js 15 Full-Stack Camp Booking, Route Mapping & Real-Time Trail Navigation',
    description:
      'A comprehensive outdoor exploration platform enabling hikers and campers to discover wild destinations, book verified campsites, and access real-time offline trail guides across challenging wilderness terrains.',
    image: '/case img/Hilink.webp',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'App Router', 'Vercel'],
    skillsUsed: [
      'Next.js 15 App Router',
      'Full-Stack Architecture',
      'SVG Vector Mapping',
      'Responsive Optimization',
    ],
    keyFeatures: [
      'Next.js 15 Server-Side Rendering (SSR) for optimal global SEO indexing',
      'Interactive trail elevation maps and camp location coordinates',
      'Offline-first route caching and PWA service-worker architecture',
      'Next-Gen WebP/AVIF responsive image pipeline with zero layout shift',
      'Accessible mobile navigation with fluid slide-over gestures',
    ],
    problem: 'Outdoor platforms frequently experience severe lag on mobile connections in rural zones and lack dependable offline navigation support.',
    solution: 'Leveraged Next.js 15 ISR and edge caching to reduce bundle sizes below 120KB, with offline trail state caching for remote usability.',
    results: '100/100 SEO audit, under 800ms loading speeds, and robust wilderness mobile usability.',
    status: 'Active Deployment',
    category: 'Full-Stack',
    liveUrl: 'https://hilink-travel-app.vercel.app',
    githubUrl: 'https://github.com/Rudraptl16/Hilink-travel-app',
    featured: true,
  },
  {
    id: 3,
    title: 'Furniqlo Luxury Living Store',
    subtitle: 'Luxury Furniture Commerce Platform with React 19, TypeScript & Multi-Language i18n',
    description:
      'A luxury furniture store web application engineered for an effortless shopping experience. Includes an interactive product catalog, multi-language internationalization (i18n), dynamic dark/light theme switching, and persistent cart state.',
    image: '/project img/Furniture.webp',
    tags: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'i18next'],
    skillsUsed: [
      'React 19 Hooks',
      'TypeScript Strict Mode',
      'Internationalization (i18n)',
      'Cart State Management',
    ],
    keyFeatures: [
      'Interactive 3D product tilt cards with realistic specular highlights',
      'Multi-language internationalization (English, Spanish, French) via i18next',
      'Persistent cart state preserved across page refreshes and browser tabs',
      'Instant multi-attribute product filtering (category, price, material)',
      'Zero-flicker theme synchronization using CSS custom properties',
    ],
    problem: 'Luxury retail applications often suffer from sluggish product filters and clunky language changes that disrupt the shopping experience.',
    solution: 'Engineered an in-memory client state store using custom hooks and LocalStorage persistence, coupled with dynamic i18n asynchronous chunk loading.',
    results: 'Sub-20ms language switching latency, smooth 60fps animations, and a seamless mobile shopping experience.',
    status: 'Production Ready',
    category: 'Web Apps',
    liveUrl: 'https://furniqlo-store.vercel.app',
    githubUrl: 'https://github.com/Rudraptl16/Furniqlo',
    featured: true,
  },
  {
    id: 4,
    title: 'Note Sphere Smart Workspace',
    subtitle: 'Smart, Clutter-Free Note Management System with Instant Local Sync',
    description:
      'A modern web-based note management application designed to help users create, edit, organize, and search personal notes and tasks with sub-10ms latency and client-side encryption.',
    image: '/project img/Note.webp',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript ES6+', 'Local Storage API'],
    skillsUsed: [
      'State Architecture',
      'Local Storage Sync',
      'Keyboard Accessibility',
      'Minimalist UI Design',
    ],
    keyFeatures: [
      'Instantaneous CRUD operations with sub-10ms response time',
      'Real-time fuzzy search and category filtering for note retrieval',
      'Minimalist responsive dark-mode UI optimized for long reading sessions',
      'Persistent browser storage with automatic backup and recovery',
      'Keyboard shortcut workflow for rapid note creation without mouse usage',
    ],
    problem: 'Most note-taking apps are cluttered with complex dependencies that slow down startup time and fail when disconnected from the internet.',
    solution: 'Built a lightweight (< 85KB) client-side note engine with instant IndexedDB/LocalStorage synchronisation and clean typography tokens.',
    results: '99/100 Lighthouse performance rating, zero load friction, and 100% offline reliability.',
    status: 'Completed',
    category: 'Web Apps',
    liveUrl: 'https://note-sphere-16.vercel.app/',
    githubUrl: 'https://github.com/Rudraptl16/Note-Sphere',
    featured: true,
  },
  {
    id: 5,
    title: 'Full-Stack Cloud Task & Workflow Engine',
    subtitle: 'High-Throughput Full-Stack Platform Engineered with Node.js, Express, MongoDB & React',
    description:
      'A high-performance full-stack web application and RESTful API engine engineered with Node.js, Express.js, MongoDB, and React with secure JWT auth, real-time database streaming, and sub-50ms query latency.',
    image: '/project img/iOS Todo-app.webp',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'React', 'JWT Auth'],
    skillsUsed: [
      'REST API Engineering',
      'Database Modeling & Indexing',
      'Authentication Pipelines',
      'Full-Stack Architecture',
    ],
    keyFeatures: [
      'RESTful API architecture with comprehensive CRUD operations and rate limiting',
      'MongoDB aggregation pipelines and indexed schema definitions for high throughput',
      'JWT-based bearer authentication with secure refresh token rotation',
      'Modular controller-service-repository pattern adhering to clean architecture',
      'Responsive React client with optimistic UI updates and real-time state sync',
    ],
    problem: 'Modern web applications require scalable server backends capable of managing concurrent requests without latency spikes or security loopholes.',
    solution: 'Architected a decoupled Node.js and Express backend with centralized error handling, custom input validation middleware, and connection-pooled MongoDB queries.',
    results: 'Consistent sub-45ms endpoint response times under stress, 99.9% uptime reliability, and zero auth token leakage.',
    status: 'Production Ready',
    category: 'Full-Stack',
    liveUrl: 'https://github.com/Rudraptl16',
    githubUrl: 'https://github.com/Rudraptl16',
    featured: true,
  },
  {
    id: 6,
    title: 'Panto Spatial Furniture Design System',
    subtitle: 'Figma-to-Code Design Token System & High-Conversion E-Commerce Architecture',
    description:
      'An enterprise-grade UI/UX design system and interactive prototype for a spatial luxury furniture brand, establishing a unified token foundation across typography, elevation, and responsive grids.',
    image: '/project img/Panto - Furniture Landing Page Design.webp',
    tags: ['UI/UX Design', 'Figma', 'Design Tokens', 'Design System', 'Tailwind CSS'],
    skillsUsed: [
      'Figma Design Systems',
      'Design Token Engineering',
      'Pixel-Perfect Conversion',
      'Spatial Grid Hierarchy',
    ],
    keyFeatures: [
      'Modular design token library bridging Figma variables to Tailwind CSS',
      'Spatial product showcases with elevated visual hierarchy and glass cards',
      'Micro-interaction blueprints for hover states, loaders, and drawer menus',
      'Tested color contrast ratios complying with WCAG AAA accessibility standards',
      'Full responsive wireframes across 320px mobile, tablet, and 4K viewports',
    ],
    problem: 'Disconnections between design files and production code lead to broken spacing, inconsistent branding, and slow delivery cycles.',
    solution: 'Created an end-to-end design token pipeline where Figma spacing and color variables translate directly into Tailwind utility tokens.',
    results: '100% pixel-perfect design translation, zero cumulative layout shift (0.00 CLS), and an extensible design system.',
    status: 'Completed',
    category: 'UI/UX Design',
    liveUrl: 'https://www.figma.com',
    githubUrl: 'https://github.com/Rudraptl16',
    featured: true,
  }
];

// ─── Derived helpers ──────────────────────────────────────────────────────────

/** All unique filter categories, with 'All' prepended */
export const artifactFilters = [
  'All',
  'Web Apps',
  'Full-Stack',
  'UI/UX Design'
];

/** Only the projects marked as featured === true */
export const featuredOnly = featuredArtifacts.filter((p) => p.featured);
