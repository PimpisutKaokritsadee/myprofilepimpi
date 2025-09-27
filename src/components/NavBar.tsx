import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ฟังก์ชันเลื่อนแบบ smooth
  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // ให้ทำงานกับ hash (#...) เท่านั้น
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setOpen(false); // ปิดเมนูมือถือ
    }
  };

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <a
      href={href}
      onClick={(e) => smoothScroll(e, href)}
      className="px-3 py-2 text-sm font-medium hover:text-indigo-500"
    >
      {label}
    </a>
  );

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition ${
        scrolled ? "bg-gray-900 backdrop-blur shadow" : "bg-dark backdrop-blur"
      }`}
    >
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
        <a href="#" className="font-bold text-lg text-white">Porsche</a>

        {/* desktop */}
        <div className="hidden md:flex items-center gap-1 text-white">
          {links.map((l) => (
            <NavLink key={l.href} {...l} />
          ))}
        </div>

        {/* mobile button */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100/20"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-2 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => smoothScroll(e, l.href)}
                className="py-2 text-sm hover:text-indigo-500"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
