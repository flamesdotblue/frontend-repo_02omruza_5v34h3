import { useState } from 'react';
import { MessageCircle, Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/60 border-b border-black/[0.06]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-600 grid place-items-center text-white">
              <MessageCircle size={20} />
            </div>
            <span className="text-xl font-semibold tracking-tight">Vani</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition">Features</a>
            <a href="#how" className="hover:text-gray-900 transition">How it works</a>
            <a href="#faq" className="hover:text-gray-900 transition">FAQ</a>
          </nav>

          <div className="hidden md:block">
            <a href="#get-started" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-gray-800">
              <Rocket size={16} />
              Get started
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/[0.06] bg-white/80">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-2">
            <a href="#features" className="py-2" onClick={() => setOpen(false)}>Features</a>
            <a href="#how" className="py-2" onClick={() => setOpen(false)}>How it works</a>
            <a href="#faq" className="py-2" onClick={() => setOpen(false)}>FAQ</a>
            <a href="#get-started" className="mt-2 inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-gray-800 w-max" onClick={() => setOpen(false)}>
              <Rocket size={16} />
              Get started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
