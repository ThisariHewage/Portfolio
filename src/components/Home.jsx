export default function Home() {
  return (
    <section id="home" className="p-10 text-center">
      <h1 className="text-4xl font-bold">Hi, I'm Thisari Uresha Dewmini</h1>
      <h3 className="mt-2 text-lg">Software Engineering Undergraduate | Full Stack Developer</h3>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        I build accessible, user-friendly websites and applications with modern technologies.
      </p>

      <div className="mt-5 space-x-3">
        <a href="#" className="px-4 py-2 rounded bg-blue-600 text-white">GitHub</a>
        <a href="#" className="px-4 py-2 rounded bg-blue-600 text-white">LinkedIn</a>
        <a href="/cv.pdf" download className="px-4 py-2 rounded border">Download CV</a>
      </div>
    </section>
  );
}