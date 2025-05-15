import { getTrendingTv } from "@/lib/tv";
import TvCard from "@/components/tv-card/tv-card";
import GridBig from "@/components/grid-big/grid-big";

export default async function TrendingTVPage() {

    const series = await getTrendingTv();
    
    return (
        <div className="mt-5 md:mt-10 container">
            <h2 className="text-center">Trending TV Series</h2>
            <GridBig>
                {series.slice(0, 5).map((serie) => {
                    return <TvCard series={serie} />;
                })}
            </GridBig>
        </div>
    );
}