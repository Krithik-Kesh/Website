const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'C++', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'SQL / NoSQL (Firestore)', level: 80 },
        { name: 'MATLAB / R', level: 70 },
      ],
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'PyTorch', level: 95 },
        { name: 'Hugging Face', level: 90 },
        { name: 'CNNs / Deep Learning', level: 90 },
        { name: 'Scikit-learn / NumPy', level: 85 },
      ],
    },
    {
      title: 'Engineering & Tools',
      skills: [
        { name: 'Git / GitHub', level: 95 },
        { name: 'Unreal Engine', level: 85 },
        { name: 'Google Cloud (Firebase)', level: 85 },
        { name: 'PyQt / Java Swing', level: 80 },
        { name: 'Docker / CI/CD', level: 75 },
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
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Specialized in High-Performance Computing, AI Development, and Cloud Architecture
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary-600 dark:text-primary-400">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
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