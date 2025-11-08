const VideoTitle = (props) => {

    const { title, overview } = props;

    return (
        <div className="w-screen aspect-video pt-[15%] px-6 md:px-24 absolute top-0 text-white bg-gradient-to-r from-black">
            <h1 className="text-xl pt-[50%] md:pt-0 md:text-5xl font-bold mb-4">{title}</h1>
            <p className="hidden md:inline-block text-sm py-6 md:py-3 w-1/3">{overview}</p>
            <div className="">
                <button className="bg-white text-black px-4 md:px-16 py-2 md:py-4 rounded-lg mr-4 hover:bg-opacity-80"> Play</button>
                <button className="hidden md:inline-block bg-gray-700 text-white px-16 py-4 rounded-lg hover:bg-opacity-80">More Info</button>
            </div>
        </div>
    );
};

export default VideoTitle;
