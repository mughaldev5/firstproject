
const MenuData = [
    { id: 0, name: 'Home', path: '/' },
    { id: 1, name: 'About', path: '/about' },
    { id: 2, name: 'Contact', path: '/contact' },
    { id: 3, name: 'Services', path: '/services' }
];

const Navbar = () => {
    return (
        <div className='w-full h-20 bg-gray-300 shadow-md flex justify-between items-center px-2 py-3'>
            <h1 className='text-2xl text-blue-400'>Logo</h1>
            <div className='flex gap-2 items-center'>
                {MenuData.map((item) => (
                    <a
                        className='decoration-0 text-lg text-black'
                        href={item.path} // use "to" instead of "href" for react-router-dom
                        key={item.id}
                    >
                        {item.name}
                    </a>
                ))}
            </div>
            <button className='py-2 px-4 rounded-sm bg-black text-white text-center'>Login</button>
        </div>
    );
};

export default Navbar;
