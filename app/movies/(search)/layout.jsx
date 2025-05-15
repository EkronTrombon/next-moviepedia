import { Suspense } from 'react';
import Form from 'next/form';
import MovieListingPageLoader from './loading';

export default function Layout({ children }) {
    return (
        <div className="mt-5 md:mt-10 container flex flex-col md:flex-row justify-start items-start gap-10">
            <div className="w-full md:max-w-xs">
                <Form className="flex justify-start items-center gap-2.5" action="/movies">
                    <label className="hidden" htmlFor="search">Search:</label>
                    <div className="w-full flex justify-start items-center">
                        <input className="w-full bg-white border border-primary border-r-0 rounded-l-lg p-2.5 text-base text-black" type="text" id="search" name="search" placeholder="Search" />
                        <button className="bg-primary border border-primary border-l-0 rounded-r-lg p-2.5 text-base text-white font-bold" type="submit">Submit</button>
                    </div>
                </Form>
            </div>
            <div className="w-full">
                <Suspense fallback={<MovieListingPageLoader/>}>
                    {children}
                </Suspense>
            </div>
        </div>
    );
}