export default function Blog() {
  return (
    <section id="blog" className="p-10 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold">Blog</h2>

      <div className="mt-4 space-y-4">
        <div className="p-4 border rounded shadow bg-white dark:bg-gray-800">
          <h3 className="font-bold">My First Blog Post</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Short description about your blog topic.</p>
        </div>

        <div className="p-4 border rounded shadow bg-white dark:bg-gray-800">
          <h3 className="font-bold">Learning React</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Sharing my experience learning React.</p>
        </div>
      </div>
    </section>
  );
}