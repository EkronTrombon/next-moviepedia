import { getPerson, getPersonImages } from "@/lib/people";
import Image from "next/image";

export default async function PeopleDetailPage({params}) {

    const personId = await params.personId;
    const person = await getPerson(personId);
    
    const imageListing = await getPersonImages(personId);
    const images = imageListing.profiles;

    return (
        <div className="mt-5 md:mt-10 container">
            <div className="flex flex-col md:flex-row gap-5">
                <div className="w-full md:w-2/3 flex flex-col gap-2.5">
                    <Image className="rounded-lg" src={`https://image.tmdb.org/t/p/original${person.profile_path}`} width={250} height={250} />
                    <h2>{person.name}</h2>
                    <div>{person.birthday}</div>
                    <div>{person.place_of_birth}</div>
                    <p>{person.biography}</p>
                </div>
                <div className="w-full md:w-1/3">
                    <div className="grid grid-cols-4 gap-5">
                        {images.map((img) => (
                            <Image className="rounded-lg" src={`https://image.tmdb.org/t/p/original${img.file_path}`} width={100} height={100} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}