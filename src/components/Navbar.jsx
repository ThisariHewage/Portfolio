export default function Navbar({ dark, setDark }) {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800 shadow sticky top-0 z-50">
      <h2 className="font-bold text-lg">Thisari</h2>
      <div className="space-x-4">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </div>

      <button
      onClick={() => setDark(!dark)}
        className="ml-4 px-3 py-1 rounded bg-black text-white dark:bg-white dark:text-black"
      >
        {dark ? "Light" : "Dark"}
      </button>
    </nav>
  );
}