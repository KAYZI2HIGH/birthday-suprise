'use client'
import BackgroundMusic from '@/components/AudioPlayer';
import { ConfettiEffect } from '@/components/ConfettiEffect';
import { FloatingElements } from '@/components/FloatingElements';
import { GallerySection } from '@/components/GallerySection';
import { HeartfeltNote } from '@/components/HeartfeltNote';
import { HeroSection } from '@/components/HeroSection';
import React from 'react'

const page = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-purple-50 overflow-hidden">
      <ConfettiEffect />
      <FloatingElements />
      <main className="w-full max-w-6xl mx-auto px-4 relative z-10">
        <HeroSection />
        <HeartfeltNote />
        <GallerySection />
      </main>
      <BackgroundMusic/>
    </div>
  );
}

export default page