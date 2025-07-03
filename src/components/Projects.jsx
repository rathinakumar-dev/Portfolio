import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star } from 'lucide-react';

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for managing products, orders, and analytics with real-time data visualization.",
      image: "https://picsum.photos/200/300",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      githubUrl: "https://github.com/username/ecommerce-dashboard",
      liveUrl: "https://ecommerce-dashboard-demo.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with drag-and-drop functionality and team communication features.",
      image: "https://picsum.photos/200/300?random=11",
      category: "frontend",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/username/task-manager",
      liveUrl: "https://task-manager-demo.com",
      featured: false
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts and interactive weather maps.",
      image: "https://picsum.photos/200/300?random=14",
      category: "frontend",
      technologies: ["React", "API Integration", "CSS Animations"],
      githubUrl: "https://github.com/username/weather-app",
      liveUrl: "https://weather-app-demo.com",
      featured: true
    },
    {
      id: 4,
      title: "Blog CMS",
      description: "Content management system for bloggers with markdown support and SEO optimization.",
      image: "https://picsum.photos/200/300?random=16",
      category: "fullstack",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Vercel"],
      githubUrl: "https://github.com/username/blog-cms",
      liveUrl: "https://blog-cms-demo.com",
      featured: false
    },
    {
      id: 5,
      title: "Cryptocurrency Tracker",
      description: "Real-time crypto price tracking with portfolio management and market analysis tools.",
      image: "https://picsum.photos/200/300?random=18",
      category: "frontend",
      technologies: ["React", "Redux", "CoinGecko API", "Chart.js"],
      githubUrl: "https://github.com/username/crypto-tracker",
      liveUrl: "https://crypto-tracker-demo.com",
      featured: false
    },
    {
      id: 6,
      title: "Restaurant Booking System",
      description: "Complete restaurant management system with table reservations and menu management.",
      image: "https://picsum.photos/200/300?random=19",
      category: "fullstack",
      technologies: ["MERN Stack", "Socket.io", "Stripe", "JWT"],
      githubUrl: "https://github.com/username/restaurant-booking",
      liveUrl: "https://restaurant-booking-demo.com",
      featured: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="min-h-screen py-16 px-4 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg">
                  {/* Image Container - NO OVERLAY BUTTONS */}
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Only Featured Badge on Image */}
                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-blue-500 hover:bg-blue-600 text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <CardHeader className="p-0 mb-3">
                      <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0">
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons - ONLY HERE */}
                      <div className="flex space-x-3">
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                        <Button size="sm" className="flex-1" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;