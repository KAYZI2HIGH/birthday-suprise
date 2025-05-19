import React from "react";
export function HeartfeltNote() {
  return (
    <section className="w-full py-16 px-4 md:px-16">
      <div className="max-w-3xl mx-auto bg-white bg-opacity-70 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg border border-pink-100">
        <h2 className="text-3xl md:text-4xl font-serif text-pink-600 mb-8 text-center">
          A Note For You
        </h2>
        <div className="space-y-4 text-gray-700">
          <p className="text-lg leading-relaxed">Dear Abigirl,</p>
          <p className="md:text-lg leading-relaxed">
            On this special day, I wanted to take a moment to celebrate the
            amazing person you are. Your kindness, strength, and beautiful
            spirit touch everyone around you.
          </p>
          <p className="md:text-lg leading-relaxed">
            May this new year of life bring you endless joy, exciting
            adventures, and all the happiness you deserve. Thank you for being
            you – brilliant, caring, and wonderful in every way.
          </p>
          <p className="md:text-lg leading-relaxed text-right">
            With love and warmest wishes,
          </p>
          <p className="text-lg font-serif text-pink-600 text-right">
            Your Friends & Family
          </p>
        </div>
      </div>
    </section>
  );
}
