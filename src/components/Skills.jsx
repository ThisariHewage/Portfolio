export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "MySQL"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Vite", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="p-10 transition-colors duration-300">
      <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <div key={i} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md">
            <h3 className="text-lg font-bold mb-4 text-blue-500">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, j) => (
                <span key={j} className="px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm font-medium shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}