
import React from "react";
export function FloatingElements() {
  const balloons = Array.from({
    length: 10,
  }).map((_, index) => ({
    id: index,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 10}s`,
    duration: `${Math.random() * 10 + 15}s`,
    size: `${Math.random() * 40 + 30}px`,
    color:
      index % 3 === 0
        ? "pink-300"
        : index % 3 === 1
        ? "purple-200"
        : "yellow-200",
  }));
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className={`absolute bg-${balloon.color} rounded-full opacity-70`}
          style={{
            left: balloon.left,
            bottom: "-50px",
            width: balloon.size,
            height: balloon.size,
            animation: `float ${balloon.duration} ease-in-out ${balloon.delay} infinite`,
            zIndex: 0,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(50vh) rotate(60deg);
            opacity: 0.9;
          }
          100% {
            transform: translateY(-20vh) rotate(120deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
