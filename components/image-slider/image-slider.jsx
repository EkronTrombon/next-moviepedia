// pages/index.js or app/page.js
"use client"; // Add this if using the App Router

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

import ProfileCard from '@/components/profile-card/profile-card';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ImageSlider({ cast }) {

  const [selectedImage, setSelectedImage] = useState(null);

  // Handler function to open the modal - this will be passed to the child
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // For SSR compatibility
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Custom navigation arrows outside the slider */}
      <div className="flex items-center justify-between">
        <div className="swiper-button-prev-custom cursor-pointer text-white hover:text-secondary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        
        <div className="w-full px-4">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={5}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            pagination={{
              el: '.swiper-pagination-custom',
              clickable: true,
            }}
            className="mb-8" // Adds space below for pagination dots
          >
            {cast.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full rounded-lg overflow-hidden">
                    <ProfileCard profile={image} onImageClick={handleImageClick} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        <div className="swiper-button-next-custom cursor-pointer text-white hover:text-secondary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-black text-3xl font-bold">{selectedImage.name}</h3>
              <button onClick={closeModal} className="text-black hover:rotate-90 transition-transform duration-300 focus:outline-none" aria-label="Close modal">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <Image className="rounded-lg border border-white" src={`https://image.tmdb.org/t/p/w500${selectedImage.profile_path}`} alt={selectedImage.name} width={250} height={250}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}