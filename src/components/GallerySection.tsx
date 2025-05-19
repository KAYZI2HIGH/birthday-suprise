import Image from "next/image";
import React from "react";
export function GallerySection() {
  const memories = [
    {
      id: 1,
      image:
        "/image1.jpg",
      caption: "Beautiful memories together",
    },
    {
      id: 2,
      image:
        "/image2.png",
      caption: "Celebrating special moments",
    },
    {
      id: 3,
      image:
        "/image3.png",
      caption: "Here's to many more adventures",
    },
  ];
  return (
    <section className="py-16 w-full">
      <h2 className="text-3xl md:text-4xl font-serif text-pink-600 mb-12 text-center">
        Cherished Memories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {memories.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105"
          >
            <div className="w-full h-80 relative">
              <Image
                src={item.image}
                alt={item.caption}
                fill
                className="object-cover "
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end">
              <p className="text-white p-6 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <p className="text-xl text-pink-500 font-light">
          Wishing you another year of beautiful memories!
        </p>
      </div>
    </section>
  );
}
