export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio built with React and Vite.",
      tech: ["React", "Vite", "Tailwind"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "A full-stack application to track and manage daily tasks.",
      tech: ["Node.js", "Express", "MySQL"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="p-10 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="group overflow-hidden rounded-2xl bg-white dark:bg-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, j) => (
                  <span key={j} className="text-xs font-semibold px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <a href={project.link} className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline">
                View Details
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
