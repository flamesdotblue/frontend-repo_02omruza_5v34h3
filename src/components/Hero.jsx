import Spline from '@splinetool/react-spline';
import { Sparkles, Phone, Image, Mic } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient + vignette overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/70" />
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(80rem 40rem at 80% -10%, rgba(99,102,241,0.25), transparent), radial-gradient(70rem 35rem at -20% 120%, rgba(236,72,153,0.25), transparent)'
      }} />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-black/5 backdrop-blur">
              <Sparkles size={16} className="text-fuchsia-600" />
              Build a website by just talking
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Vani — your WhatsApp-powered website builder
            </h1>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Create and update a beautiful one-page site by sending voice notes and photos on WhatsApp. No logins. No editors. Just talk.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-5 py-3 font-semibold shadow-sm hover:bg-gray-800">
                Start for free
              </a>
              <a href="#how" className="inline-flex items-center justify-center rounded-lg bg-white/80 px-5 py-3 font-semibold text-gray-800 shadow-sm ring-1 ring-black/10 hover:bg-white">
                See how it works
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-sm text-gray-800">
              <div className="flex items-center gap-2 bg-white/70 rounded-lg px-3 py-2 shadow-sm ring-1 ring-black/5 backdrop-blur">
                <Mic size={16} className="text-fuchsia-600" />
                Voice notes
              </div>
              <div className="flex items-center gap-2 bg-white/70 rounded-lg px-3 py-2 shadow-sm ring-1 ring-black/5 backdrop-blur">
                <Image size={16} className="text-indigo-600" />
                Photos
              </div>
              <div className="flex items-center gap-2 bg-white/70 rounded-lg px-3 py-2 shadow-sm ring-1 ring-black/5 backdrop-blur">
                <Phone size={16} className="text-emerald-600" />
                WhatsApp
              </div>
            </div>
          </motion.div>

          {/* Glass conversation preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="relative mx-auto w-full max-w-xl rounded-2xl border border-white/50 bg-white/40 p-4 shadow-xl backdrop-blur-lg">
              <div className="rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-600/90 p-4 text-white shadow-inner">
                <p className="text-sm/relaxed opacity-90">WhatsApp • Vani</p>
                <motion.div className="mt-3 space-y-2 text-sm" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}>
                  {[
                    { role: 'user', text: 'Hi Vani, say we have fresh tulips this week and show our best bouquet photo.' },
                    { role: 'ai', text: 'Done! Your site now highlights fresh tulips and features the new photo at the top.' },
                    { role: 'user', text: 'Change the price of the rose bouquet to $29 and add opening hours.' },
                    { role: 'ai', text: 'Updated. Prices and hours are live on your site.' },
                  ].map((m, idx) => (
                    <motion.div
                      key={idx}
                      variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                      className={`${m.role === 'ai' ? 'ml-auto bg-white text-gray-900' : 'bg-white/10 text-white'} max-w-[80%] rounded-2xl px-4 py-3 backdrop-blur`}
                    >
                      {m.text}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              <p className="mt-4 text-center text-xs text-gray-700">This is a preview of the flow. Actual updates happen instantly on your live page.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
