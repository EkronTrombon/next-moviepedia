export default function GridBig({children}) {
    return (
        <ul className='mt-10 grid grid-cols-3 md:grid-cols-5 gap-5'>
            {children}
        </ul>
    );
}