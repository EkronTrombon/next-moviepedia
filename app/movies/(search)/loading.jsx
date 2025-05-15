export default function MovieListingPageLoader() {
    return (
        <div className='grid grid-cols-3 md:grid-cols-5 gap-5' aria-hidden>
            {Array.from({ length: 12 }).map((_, index) => {
                <div key={index} className="bg-white/50 aspect-[500/750]" />
            })}
        </div>
    );
}