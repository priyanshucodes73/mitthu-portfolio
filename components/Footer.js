export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 text-sm text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-6 w-full">
        {/* Left Section */}
        <p className="text-center sm:text-left w-full sm:w-auto">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Mitthu Kumar Bhagat</span> 👦. All
          rights reserved.
        </p>

        {/* Middle Section: Contact Info */}
        <div className="text-center w-full sm:w-auto">
          📧{" "}
          <a
            href="mailto:priyanshubhagat7373@gmail.com"
            className="hover:text-white"
          >
            priyanshubhagat7373@gmail.com
          </a>
          <br />
          📱{" "}
          <a href="tel:+917667284121" className="hover:text-white">
            +91 7667284121
          </a>
        </div>

        {/* Right Section */}
        <div className="opacity-80 text-center sm:text-right w-full sm:w-auto">
          🚀 Built with <span className="font-medium">Next.js</span> •{" "}
          <span className="font-medium">Tailwind</span> •{" "}
          <span className="font-medium">Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
