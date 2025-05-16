import { getOnTheAirTv } from "@/lib/tv";
import TvCard from "@/components/tv-card/tv-card";
import GridBig from "@/components/grid-big/grid-big";

export default async function OnTheAirTVPage() {

    const series = await getOnTheAirTv();
    
    return (
        <div>
            <GridBig>
                {series.map((serie) => {
                    return <TvCard series={serie} />;
                })}
            </GridBig>
        </div>
    );
}