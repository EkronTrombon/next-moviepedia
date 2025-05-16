export default function GridPeople({children}) {
    return (
        <ul className='grid grid-cols-3 md:grid-cols-5 gap-5'>
            {children}
        </ul>
    );
}