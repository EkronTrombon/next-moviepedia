import { getPopularPeople } from "@/lib/people";
import GridPeople from "@/components/grid-people/grid-people";
import Image from "next/image";

export default async function PeopleListingPage() {

    const people = await getPopularPeople();

    return (
        <div className="mt-10 container">
            <GridPeople>
                {people.map((person) => {
                    return (
                        <a href={`/people/${person.id}`} className="flex flex-col gap-2.5 justify-start items-center group">
                            <Image className="rounded-full aspect-square object-cover transition-all duration-300 group-hover:border-8 group-hover:border-primary group-hover:opacity-50" key={person.id} src={person.profile_path != null ? `https://image.tmdb.org/t/p/w500${person.profile_path}` : personPlaceholder} alt={person.name} width={150} height={150}/>
                            <h3 className="font-bold text-center transition-all duration-300 group-hover:text-primary">{person.name}</h3>
                        </a>
                    );
                })}
            </GridPeople>
        </div>
    );
}