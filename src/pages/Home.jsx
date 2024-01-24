

const Home = () => {
    return (
        <div>
            <h2 className='text-3xl text-center'>Home Page</h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                <div className="h-32 rounded-lg bg-gray-200"></div>
                <div className="h-32 rounded-lg bg-gray-200"></div>
                <div className="h-32 rounded-lg bg-gray-200"></div>
            </div>
        </div>
    );
};

export default Home;