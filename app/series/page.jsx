import { getSeriesGenres } from "@/lib/tv";
import Link from "next/link";

export default async function SeriesListingPage() {

    const tvGenres = await getSeriesGenres();

    return (
        <div className="mt-10 container">
            <ul className="grid grid-cols-8 gap-5">
                <li className="border border-white rounded-lg p-5">
                    <Link className="flex justify-center items-center" href="/series/trending">Trending</Link>
                </li>
            </ul>
        </div>
    );
}