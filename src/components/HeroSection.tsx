import React from 'react'
export function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center py-16 relative">
      <div className="text-center">
        <h2 className="text-xl md:text-3xl text-pink-400 font-light tracking-widest mb-4 animate-fade-in">
          TODAY IS A SPECIAL DAY
        </h2>
        <h1 className="text-4xl md:text-7xl font-serif text-pink-600 mb-6 animate-scale-in">
          Happy Birthday, <span className="font-bold italic">Abigirl</span>!
        </h1>
        <p className="text-lg md:text-2xl text-purple-500 font-light animate-fade-in-delay">
          Wishing you a day filled with joy and beautiful memories
        </p>
        <div className="mt-12 animate-bounce-slow">
          <svg
            className="w-10 h-10 mx-auto text-pink-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}