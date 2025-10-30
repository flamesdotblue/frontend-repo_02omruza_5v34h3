import { Bot, Image, Mic, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Talk, don't type",
    description: 'Send a voice note and Vani understands what to change on your website—no dashboard required.',
    icon: Mic,
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    title: 'Photos become content',
    description: 'Just send product photos. Captions and layout are generated automatically to match your brand.',
    icon: Image,
    color: 'from-indigo-500 to-sky-500',
  },
  {
    title: 'AI website editor',
    description: 'Powered by state-of-the-art AI that converts your instructions into clean, on-brand sections.',
    icon: Bot,
    color: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: 'Safe & reversible',
    description: 'All changes are versioned so you can preview, publish, or roll back anytime with a message.',
    icon: ShieldCheck,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Polished by default',
    description: 'Modern typography, tasteful colors, and mobile-friendly layouts—no design skills needed.',
    icon: Sparkles,
    color: 'from-amber-500 to-orange-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Designed for busy owners</h2>
          <p className="mt-3 text-lg text-gray-600">If you can send a WhatsApp message, you can run your website.</p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-black/10 bg-white/90 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${f.color} text-white grid place-items-center shadow`}> 
                <f.icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
