export default function Blog() {
  const posts = [
    {
      title: "My Journey into Software Engineering",
      date: "Oct 12, 2023",
      excerpt: "Sharing my experiences and challenges as a software engineering undergraduate."
    },
    {
      title: "Why React is My Favorite Library",
      date: "Nov 05, 2023",
      excerpt: "Discussing the power and flexibility of React in modern web development."
    }
  ];

  return (
    <section id="blog" className="p-10 transition-colors duration-300">
      <h2 className="text-3xl font-bold text-center mb-8">Blog</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {posts.map((post, i) => (
          <article key={i} className="border-b dark:border-gray-700 pb-6 last:border-0 hover:translate-x-2 transition-transform duration-300">
            <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
            <h3 className="text-2xl font-semibold mt-1 mb-2 text-gray-800 dark:text-gray-100">{post.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
            <a href="#" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">Read more →</a>
          </article>
        ))}
      </div>
    </section>
  );
}