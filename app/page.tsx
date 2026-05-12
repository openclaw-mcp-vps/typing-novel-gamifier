export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#58a6ff]/10 border border-[#58a6ff]/30 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          RPG Typing Practice
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Type Classic Novels.<br />
          <span className="text-[#58a6ff]">Level Up Your Skills.</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Gamified typing practice through the greatest literature ever written. Earn XP, unlock achievements, climb leaderboards, and hit 120 WPM — one chapter at a time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Your Quest — $7/mo
          </a>
          <span className="text-[#8b949e] text-sm">No credit card required for free tier</span>
        </div>
        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#58a6ff]">50+</div>
            <div className="text-xs text-[#8b949e] mt-1">Classic Novels</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#58a6ff]">200+</div>
            <div className="text-xs text-[#8b949e] mt-1">Achievements</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#58a6ff]">12k+</div>
            <div className="text-xs text-[#8b949e] mt-1">Active Typists</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Adventurer</div>
          <div className="text-5xl font-extrabold text-white mb-1">$7</div>
          <div className="text-[#8b949e] text-sm mb-8">/month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Full library: 50+ classic novels',
              'RPG progression: XP, levels & ranks',
              '200+ unlockable achievements',
              'Real-time WPM & accuracy stats',
              'Global & friends leaderboards',
              'Daily quests & streak rewards',
              'Custom typing themes & fonts',
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started Now
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Free tier available · No credit card to start</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How is this different from other typing tools?',
              a: 'TypeQuest combines real literature with a full RPG progression system. You earn XP, level up your character, unlock achievements, and compete on leaderboards — all while building a genuine skill through meaningful content, not random words.'
            },
            {
              q: 'What skill level is this for?',
              a: 'All levels. Beginners start with short passages and guided pacing. Advanced typists tackle full novels at speed with accuracy challenges. The adaptive difficulty system meets you where you are and pushes you forward.'
            },
            {
              q: 'Can I cancel my subscription anytime?',
              a: 'Yes, absolutely. Cancel with one click from your account dashboard. You keep access until the end of your billing period with no questions asked and no cancellation fees.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-xs">
        © {new Date().getFullYear()} TypeQuest. All rights reserved.
      </footer>
    </main>
  )
}
