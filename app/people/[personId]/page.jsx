import { getPerson, getPersonImages } from "@/lib/people";
import Image from "next/image";

export default async function PeopleDetailPage({params}) {

    const personId = params.personId;
    const person = await getPerson(personId);
    const imageListing = await getPersonImages(personId);
    const images = imageListing.profiles;

    return (
        <div className="mt-5 md:mt-10 container">
            <h2>{person.name}</h2>
            <div className="grid grid-cols-8 gap-5">
                {images.map((img) => (
                    <Image className="rounded-lg" src={`https://image.tmdb.org/t/p/original${img.file_path}`} width={250} height={250} />
                ))}
            </div>
        </div>
    );
}