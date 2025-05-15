import Image from "next/image";
import { getTvSeries } from "@/lib/tv";

export default async function TvDetailPage({params}) {

    const { tvId } = await params;
    
    const series = await getTvSeries(tvId);
    console.log(series);

    return (
        <div className="mt-5 md:mt-10 container">
            <div className='flex flex-col md:flex-row justify-between items-start gap-10'>
                <Image className="rounded-lg border border-white w-full md:w-1/3" src={`https://image.tmdb.org/t/p/w500${series.poster_path}`} alt={series.name} width={500} height={500}/>
                <div className="w-full md:w-2/3 flex flex-col justify-start items-start gap-5">
                    <h1>{series.name}</h1>
                    <h2>Original Title: {series.original_name}</h2>
                    <h2>Tagline: {series.tagline}</h2>
                    <h3>First Air Date: {series.first_air_date}</h3>
                    <p>{series.overview}</p>
                    <div className="flex justify-start items-center gap-5">Available in: 
                        {series.networks.map((network) => {
                            return (
                                <div className="bg-secondary border border-white p-2.5 rounded-lg flex justify-center items-center" key={network.id}>
                                    <Image src={`https://image.tmdb.org/t/p/w500${network.logo_path}`} alt={network.name} width={50} height={50} />
                                </div>
                        )})}
                    </div>
                </div>
            </div>
        </div>
    );
}