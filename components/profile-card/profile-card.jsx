import Image from "next/image";

export default function ProfileCard({profile, onImageClick}) {
    const handleClick = () => {
        onImageClick(profile);
    };
    return (
        <>
            <div className="relative flex flex-col justify-center items-center gap-2" onClick={handleClick}>
                <Image className="rounded-lg border border-white" src={`https://image.tmdb.org/t/p/w500${profile.profile_path}`} alt={profile.name} width={500} height={500}/>
                <div className="absolute top-0 left-0 bg-black opacity-0 w-full h-full rounded-lg border border-black p-2 flex flex-col justify-center items-center hover:opacity-60 transition-opacity duration-300">
                    <p className="text-center text-sm font-semibold text-white">{profile.name}</p>
                    <p className="text-center text-xs text-white">({profile.character})</p>
                </div>
            </div>
        </>
    );
}