import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <section id="how" className="relative border-t border-black/5 bg-gradient-to-b from-white to-indigo-50/60">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
              <p className="mt-3 text-lg text-gray-600">Three simple steps to launch and keep your site fresh.</p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[ 
                {title: 'Add Vani on WhatsApp', desc: 'Save the number and say what your business does. We generate your starter page instantly.'},
                {title: 'Send a voice note or photo', desc: 'Describe updates in your own words. Attach photos of products or your shop.'},
                {title: 'Publish with a message', desc: 'Reply “publish” to go live. Change anything later by sending another message.'}
              ].map((s) => (
                <div key={s.title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                  <div className="text-sm font-semibold text-indigo-600">Step</div>
                  <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-6">{s.desc}</p>
                </div>
              ))}
            </div>

            <div id="get-started" className="mt-12 flex items-center justify-center">
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-6 py-3 font-semibold shadow-sm hover:bg-gray-800">
                Get a Vani demo
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
