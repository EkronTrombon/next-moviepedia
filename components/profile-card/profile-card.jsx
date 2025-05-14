import { getPerson } from "@/lib/people";
import Image from "next/image";
import { useState } from "react";

import personPlaceholder from '@/assets/Person_placeholder.png';

export default function ProfileCard({ profile, onImageClick }) {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        try {
            setIsLoading(true);
            // Fetch the complete person data using the profile.id
            const personData = await getPerson(profile.id);
            
            // Pass the complete person data to the parent component
            onImageClick(personData);
        } catch (error) {
            console.error("Error fetching person data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative flex flex-col justify-center items-center gap-2 cursor-pointer" onClick={handleClick}>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg z-10">
                    <div className="animate-spin h-6 w-6 border-2 border-white border-t-transparent rounded-full"></div>
                </div>
            )}
            <Image className="rounded-lg border border-white" src={profile.profile_path != null ? `https://image.tmdb.org/t/p/w500${profile.profile_path}` : personPlaceholder} alt={profile.name} width={500} height={500}/>
            <div className="absolute top-0 left-0 bg-black opacity-0 w-full h-full rounded-lg border border-black p-2 flex flex-col justify-center items-center hover:opacity-60 transition-opacity duration-300">
                <p className="text-center text-sm font-semibold text-white">{profile.name}</p>
                <p className="text-center text-xs text-white">({profile.character})</p>
            </div>
        </div>
    );
}