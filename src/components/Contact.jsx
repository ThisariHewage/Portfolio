export default function Contact() {
  return (
    <section id="contact" className="p-10 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Your Email" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea rows="4" className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}