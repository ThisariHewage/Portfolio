export default function Projects() {
  return (
    <section id="projects" className="p-10">
      <h2 className="text-2xl font-bold text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800 hover:scale-105 transition">
          <img src="/project1.png" alt="project" className="rounded" />
          <h3 className="font-bold mt-2">Project One</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Short description</p>
        </div>

        <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800 hover:scale-105 transition">
          <img src="/project2.png" alt="project" className="rounded" />
          <h3 className="font-bold mt-2">Project Two</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Short description</p>
        </div>
      </div>
    </section>
  );
}
