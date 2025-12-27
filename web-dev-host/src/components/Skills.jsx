const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Next.js', level: 80 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Figma', level: 75 },
        { name: 'Linux', level: 80 },
        { name: 'CI/CD', level: 75 },
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary-600 dark:text-primary-400">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-primary-600 to-purple-600 h-2.5 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

