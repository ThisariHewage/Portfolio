export default function Education() {
  const education = [
    {
      institution: "Your University",
      degree: "BSc (Hons) in Software Engineering",
      period: "2022 - Present",
      description: "Focusing on full-stack development, software architecture, and algorithm design."
    }
  ];

  return (
    <section id="education" className="p-10 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{edu.degree}</h3>
            <p className="font-medium text-gray-700 dark:text-gray-200">{edu.institution}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{edu.period}</p>
            <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}