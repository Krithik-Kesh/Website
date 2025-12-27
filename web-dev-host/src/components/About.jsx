const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                YN
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with a love for creating
              beautiful, functional, and user-friendly web applications. With
              expertise in modern web technologies, I bring ideas to life through
              clean code and thoughtful design.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My journey in web development started with curiosity and has evolved
              into a career where I continuously learn and adapt to new
              technologies. I believe in writing code that not only works but is
              maintainable, scalable, and elegant.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-1">
                  Experience
                </h4>
                <p className="text-gray-600 dark:text-gray-300">3+ Years</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-1">
                  Projects
                </h4>
                <p className="text-gray-600 dark:text-gray-300">50+ Completed</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-1">
                  Location
                </h4>
                <p className="text-gray-600 dark:text-gray-300">Worldwide</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-1">
                  Availability
                </h4>
                <p className="text-gray-600 dark:text-gray-300">Open to Work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

