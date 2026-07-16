export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[#0B0F19] py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[var(--text-muted)] text-sm">
          Designed & Developed by <span className="text-white font-medium">C. Raghavendra</span>
        </p>
        <p className="text-[var(--text-muted)] text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
