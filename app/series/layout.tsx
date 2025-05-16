export default function TvLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container py-5 md:py-10">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/5">
          <ul className="flex flex-col gap-2.5">
            <li className="font-heading font-bold text-2xl transition-colors duration-300 hover:text-secondary cursor-pointer">
              <a href="/series/trending/">Trending</a>
            </li>
            <li className="font-heading font-bold text-2xl transition-colors duration-300 hover:text-secondary cursor-pointer">
              <a href="/series/ontheair/">On The Air</a>
            </li>
            <li className="font-heading font-bold text-2xl transition-colors duration-300 hover:text-secondary cursor-pointer">
              <a href="/series/toprated/">Top Rated</a>
            </li>
            <li className="font-heading font-bold text-2xl transition-colors duration-300 hover:text-secondary cursor-pointer">
              <a href="/series/popular/">Popular</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-4/5">{children}</div>
      </div>
    </div>
  );
}