function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6 md:px-12">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <h2 className="text-xl font-semibold">
          Vansh<span className="text-blue-500">.</span>
        </h2>

        <p className="text-gray-400 text-center">
          © 2026 Vansh Jain. All rights reserved.
        </p>

        <p className="text-gray-400">
          Built with React & Tailwind CSS
        </p>

      </div>

    </footer>
  );
}

export default Footer;