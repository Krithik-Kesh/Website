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
            <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl flex items-center justify-center overflow-hidden relative group">
              {/* Your Photo - Place your image in the public folder and update the path below */}
              <img
                src="/profile-photo.jpg"
                alt="Your Name"
                className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
              />
              {/* Optional: Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I am a Computational Cognitive Science and Statistics 
            student at the University of Toronto, deeply interested in the 
            intersection of Machine Learning and Game Engineering. 
            I spend my time exploring how deep learning can enhance 
            real-time interactive systems, from emotional AI to optimized physics engines.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            With a background in C++ and Python, I build tools that bridge the gap between 
            complex research and artist-friendly production environments. I believe in writing 
            code that is not only high-performance but also maintainable and scalable.
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

