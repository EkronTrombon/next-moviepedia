// pages/index.js or app/page.js
"use client"; // Add this if using the App Router

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

import ProfileCard from '@/components/profile-card/profile-card';

import personPlaceholder from '@/assets/Person_placeholder.png';

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
    <div className="relative w-full md:max-w-4xl md:mx-auto">
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
            slidesPerView={2}
            breakpoints={{
              768: {
                slidesPerView: 4,
              }
            }}
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
          <div className="bg-secondary rounded-lg overflow-hidden max-w-3xl w-full shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b border-black">
              <h3 className="text-black text-3xl font-bold">{selectedImage.name}</h3>
              <button onClick={closeModal} className="text-black hover:rotate-90 transition-transform duration-300 focus:outline-none" aria-label="Close modal">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4 flex flex-col md:flex-row justify-start gap-5">
              <Image className="rounded-lg border border-white h-fit" src={selectedImage.profile_path != null ? `https://image.tmdb.org/t/p/w500${selectedImage.profile_path}` : personPlaceholder} alt={selectedImage.name} width={250} height={250}/>
              <div className="flex flex-col gap-2 text-black">
                <ul className="flex flex-col h-full">
                  <li><strong>Department:</strong> {selectedImage.known_for_department}</li>
                  <li><strong>Birthday:</strong> {selectedImage.birthday}</li>
                  <li><strong>Place of Birth:</strong> {selectedImage.place_of_birth}</li>
                  <li>
                    <strong>Bio:</strong> 
                    <div className="max-h-64 overflow-y-auto border border-black p-2 mt-1 rounded custom-scrollbar">
                      {selectedImage.biography}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}