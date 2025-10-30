import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />

        {/* Storytelling scrolly section */}
        <section id="how" className="relative border-t border-black/5 bg-gradient-to-b from-white to-indigo-50/60">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
              <p className="mt-3 text-lg text-gray-600">Scroll through the journey from message to published page.</p>
            </motion.div>

            <div className="mt-14 space-y-10">
              {[
                {
                  k: 1,
                  title: 'Add Vani on WhatsApp',
                  desc: 'Save the number, say what your business does, and get your starter page instantly.',
                },
                {
                  k: 2,
                  title: 'Send a voice note or photo',
                  desc: 'Describe updates in your own words. Attach photos of products or your shop.',
                },
                {
                  k: 3,
                  title: 'Publish with a message',
                  desc: 'Reply “publish” to go live. Change anything later by sending another message.',
                },
              ].map((s, i) => (
                <motion.div
                  key={s.k}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="grid items-center gap-8 lg:grid-cols-2"
                >
                  <div className={`order-2 lg:order-${i % 2 === 0 ? '2' : '1'} w-full`}> 
                    <div className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm backdrop-blur">
                      <div className="text-sm font-semibold text-indigo-600">Step {s.k}</div>
                      <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                      <p className="mt-2 text-sm text-gray-600 leading-6">{s.desc}</p>
                    </div>
                  </div>

                  <div className={`order-1 lg:order-${i % 2 === 0 ? '1' : '2'} w-full`}> 
                    <motion.div
                      initial={{ scale: 0.98, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5 }}
                      className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-fuchsia-100 via-white to-indigo-100 shadow"
                    >
                      <div className="h-full w-full grid place-items-center text-center p-8">
                        <p className="max-w-md text-sm text-gray-700">
                          A clean canvas where your words and photos become a polished section on your site. Each update is versioned and reversible.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              id="get-started"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="mt-16 flex items-center justify-center"
            >
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-6 py-3 font-semibold shadow-sm hover:bg-gray-800">
                Get a Vani demo
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
