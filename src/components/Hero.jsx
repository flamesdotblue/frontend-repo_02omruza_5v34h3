import { Sparkles, Phone, Image, Mic } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-100 via-white to-indigo-100" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-black/5">
              <Sparkles size={16} className="text-fuchsia-600" />
              Build a website by just talking
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Vani — your WhatsApp-powered website builder
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Non-technical business owners can create and update a beautiful one-page site by simply sending voice notes and photos to a WhatsApp bot. No logins. No editors. Just talk.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-5 py-3 font-semibold shadow-sm hover:bg-gray-800">
                Start for free
              </a>
              <a href="#how" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-semibold text-gray-700 shadow-sm ring-1 ring-black/10 hover:bg-gray-50">
                See how it works
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2 bg-white/70 rounded-lg px-3 py-2 shadow-sm ring-1 ring-black/5">
                <Mic size={16} className="text-fuchsia-600" />
                Voice notes
              </div>
              <div className="flex items-center gap-2 bg-white/70 rounded-lg px-3 py-2 shadow-sm ring-1 ring-black/5">
                <Image size={16} className="text-indigo-600" />
                Photos
              </div>
              <div className="flex items-center gap-2 bg-white/70 rounded-lg px-3 py-2 shadow-sm ring-1 ring-black/5">
                <Phone size={16} className="text-emerald-600" />
                WhatsApp
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-full max-w-xl rounded-2xl border border-black/10 bg-white p-4 shadow-lg">
              <div className="rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-600 p-4 text-white">
                <p className="text-sm opacity-90">WhatsApp • Vani</p>
                <div className="mt-3 space-y-2 text-sm">
                  <div className="max-w-[80%] rounded-2xl bg-white/10 px-4 py-3 backdrop-blur">
                    "Hi Vani, make my website say we have fresh tulips this week and show our best bouquet photo."
                  </div>
                  <div className="ml-auto max-w-[80%] rounded-2xl bg-white text-gray-900 px-4 py-3">
                    Done! Your site now highlights fresh tulips and features the new photo at the top.
                  </div>
                  <div className="max-w-[80%] rounded-2xl bg-white/10 px-4 py-3 backdrop-blur">
                    "Change the price of the rose bouquet to $29 and add opening hours."
                  </div>
                  <div className="ml-auto max-w-[80%] rounded-2xl bg-white text-gray-900 px-4 py-3">
                    Updated. Prices and hours are live on your site.
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-xs text-gray-600">This is a preview of the conversation flow. Actual updates happen instantly on your live page.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
