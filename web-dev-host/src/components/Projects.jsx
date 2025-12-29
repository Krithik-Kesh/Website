import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description:
        'Personal Portfolio Website (This one!)',
      tech: ['React', 'Tailwind CSS', 'Vite', 'EmailJS'],
      image: '/portfolio-project.jpeg',
      github: 'https://github.com/krithikkeshant/portfolio',
    },
    {
      title: 'Travel Path App',
      description:
        'An automated trip-tracking app that visualizes your travel routes and weather forecast.',
      tech: ['Java', 'Swing', 'Google Maps API', 'OpenWeather API'],
      image: '/travel-path-project.webp',
      github: 'https://github.com/Krithik-Kesh/Travel-Path',
    },
    {
      title: 'Frequent Flyers System',
      description:
        'A simulated data analytics tool for a fictional budget airline.',
      tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      image: '/frequent-flyers-project.webp',
      github: 'https://github.com/Krithik-Kesh/Frequent-Flyers-System',
    },
    {
      title: 'IN MOTION (WIP)',
      description:
        'Java videogame',
      tech: ['Java', 'JFrame', 'JavaFX', 'Java 2D'],
      image: '/IN-MOTION.png',
      github: 'https://github.com/Krithik-Kesh/In-Motion',
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


